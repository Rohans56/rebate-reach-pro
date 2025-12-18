import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface IntervalData {
  date: string;
  time: string;
  kwh: number;
  isExport: boolean;
}

interface ParsedNEM12 {
  nmi: string;
  intervals: IntervalData[];
  totalImport: number;
  totalExport: number;
  averageDailyUsage: number;
  peakUsage: number;
  offPeakUsage: number;
  daysOfData: number;
}

function parseNEM12(csvContent: string): ParsedNEM12 {
  const lines = csvContent.split('\n').map(line => line.trim()).filter(line => line);
  
  let nmi = '';
  const intervals: IntervalData[] = [];
  let currentNMI = '';
  let currentDate = '';
  let intervalLength = 30; // Default 30 minutes
  
  for (const line of lines) {
    const parts = line.split(',');
    const recordType = parts[0];
    
    // 200 record - NMI data details
    if (recordType === '200') {
      currentNMI = parts[1] || '';
      nmi = currentNMI;
      intervalLength = parseInt(parts[8]) || 30;
    }
    
    // 300 record - Interval data
    if (recordType === '300') {
      currentDate = parts[1] || '';
      const intervalsPerDay = 1440 / intervalLength;
      
      // Parse interval readings (starting from index 2)
      for (let i = 2; i < 2 + intervalsPerDay && i < parts.length; i++) {
        const reading = parseFloat(parts[i]);
        if (!isNaN(reading)) {
          const minuteOfDay = (i - 2) * intervalLength;
          const hours = Math.floor(minuteOfDay / 60);
          const minutes = minuteOfDay % 60;
          const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
          
          intervals.push({
            date: currentDate,
            time,
            kwh: reading,
            isExport: reading < 0,
          });
        }
      }
    }
  }
  
  // Calculate statistics
  const importIntervals = intervals.filter(i => i.kwh > 0);
  const exportIntervals = intervals.filter(i => i.kwh < 0);
  
  const totalImport = importIntervals.reduce((sum, i) => sum + i.kwh, 0);
  const totalExport = Math.abs(exportIntervals.reduce((sum, i) => sum + i.kwh, 0));
  
  // Get unique days
  const uniqueDays = new Set(intervals.map(i => i.date));
  const daysOfData = uniqueDays.size || 1;
  
  const averageDailyUsage = totalImport / daysOfData;
  
  // Peak hours (6am-10pm) vs off-peak
  const peakIntervals = importIntervals.filter(i => {
    const hour = parseInt(i.time.split(':')[0]);
    return hour >= 6 && hour < 22;
  });
  const offPeakIntervals = importIntervals.filter(i => {
    const hour = parseInt(i.time.split(':')[0]);
    return hour < 6 || hour >= 22;
  });
  
  const peakUsage = peakIntervals.reduce((sum, i) => sum + i.kwh, 0);
  const offPeakUsage = offPeakIntervals.reduce((sum, i) => sum + i.kwh, 0);
  
  return {
    nmi,
    intervals,
    totalImport,
    totalExport,
    averageDailyUsage,
    peakUsage,
    offPeakUsage,
    daysOfData,
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fileContent, batteryCapacity, electricityRate, feedInTariff } = await req.json();
    
    if (!fileContent) {
      throw new Error('No file content provided');
    }

    console.log('Parsing NEM12 file...');
    const parsedData = parseNEM12(fileContent);
    
    if (parsedData.intervals.length === 0) {
      throw new Error('Could not parse interval data from the file. Please ensure it is a valid NEM12 format.');
    }
    
    console.log(`Parsed ${parsedData.intervals.length} intervals over ${parsedData.daysOfData} days`);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const batteryKwh = batteryCapacity || 13.5;
    const rate = electricityRate || 0.30;
    const feedIn = feedInTariff || 0.05;

    const analysisPrompt = `You are an expert solar and battery energy analyst in Australia. Analyze this smart meter data and provide detailed battery savings calculations.

## Smart Meter Data Summary:
- Total days of data: ${parsedData.daysOfData}
- Total electricity imported from grid: ${parsedData.totalImport.toFixed(2)} kWh
- Total solar exported to grid: ${parsedData.totalExport.toFixed(2)} kWh
- Average daily usage: ${parsedData.averageDailyUsage.toFixed(2)} kWh
- Peak hour usage (6am-10pm): ${parsedData.peakUsage.toFixed(2)} kWh
- Off-peak usage (10pm-6am): ${parsedData.offPeakUsage.toFixed(2)} kWh

## Customer's Current Setup:
- Battery being considered: ${batteryKwh} kWh capacity
- Current electricity rate: $${rate}/kWh
- Current feed-in tariff: $${feedIn}/kWh

## Calculate and provide:
1. Daily battery cycling potential (how much solar can charge the battery)
2. Daily savings from using battery instead of grid power
3. Annual savings projection
4. Victorian battery rebate amount (~$340/kWh, max $4,000)
5. Estimated payback period in years
6. Self-consumption improvement percentage
7. Key recommendations for this household

Provide your analysis as a JSON object with this exact structure:
{
  "dailyBatteryUsage": number (kWh that battery can realistically cycle daily),
  "dailySavings": number ($ saved per day),
  "annualSavings": number ($ saved per year),
  "batteryRebate": number (Victorian rebate amount),
  "estimatedBatteryCost": number (typical installed cost),
  "netCost": number (cost after rebate),
  "paybackYears": number (years to payback),
  "selfConsumptionBefore": number (% of solar used before battery),
  "selfConsumptionAfter": number (% of solar used with battery),
  "peakShavingPotential": number (kWh that can be shifted from peak),
  "recommendations": [array of 3-4 string recommendations],
  "summary": "A brief 2-3 sentence summary of the analysis"
}

Only respond with valid JSON, no other text.`;

    console.log('Calling AI for analysis...');
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'user', content: analysisPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI usage limit reached. Please try again later.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`AI analysis failed: ${errorText}`);
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error('No analysis received from AI');
    }

    console.log('AI response received, parsing...');
    
    // Extract JSON from response (handle markdown code blocks)
    let jsonStr = content;
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }
    
    const analysis = JSON.parse(jsonStr);

    return new Response(JSON.stringify({
      success: true,
      meterData: {
        nmi: parsedData.nmi,
        daysOfData: parsedData.daysOfData,
        totalImport: parsedData.totalImport,
        totalExport: parsedData.totalExport,
        averageDailyUsage: parsedData.averageDailyUsage,
        peakUsage: parsedData.peakUsage,
        offPeakUsage: parsedData.offPeakUsage,
      },
      analysis,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in analyze-nem12 function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Failed to analyze file' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
