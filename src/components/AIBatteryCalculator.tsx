import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  Battery, 
  Upload, 
  DollarSign, 
  TrendingUp, 
  ArrowRight, 
  Zap,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
  Info,
  Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MeterData {
  nmi: string;
  daysOfData: number;
  totalImport: number;
  totalExport: number;
  averageDailyUsage: number;
  peakUsage: number;
  offPeakUsage: number;
}

interface Analysis {
  dailyBatteryUsage: number;
  dailySavings: number;
  annualSavings: number;
  batteryRebate: number;
  estimatedBatteryCost: number;
  netCost: number;
  paybackYears: number;
  selfConsumptionBefore: number;
  selfConsumptionAfter: number;
  peakShavingPotential: number;
  recommendations: string[];
  summary: string;
}

export const AIBatteryCalculator = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [meterData, setMeterData] = useState<MeterData | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const [batteryCapacity, setBatteryCapacity] = useState([13.5]);
  const [electricityRate, setElectricityRate] = useState([30]);
  const [feedInTariff, setFeedInTariff] = useState([5]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'text/csv' && !selectedFile.name.endsWith('.csv')) {
        toast({
          title: "Invalid file type",
          description: "Please upload a CSV file (NEM12 format)",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
      setError(null);
      setAnalysis(null);
      setMeterData(null);
    }
  }, [toast]);

  const analyzeFile = useCallback(async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const fileContent = await file.text();
      
      const { data, error: fnError } = await supabase.functions.invoke('analyze-nem12', {
        body: {
          fileContent,
          batteryCapacity: batteryCapacity[0],
          electricityRate: electricityRate[0] / 100,
          feedInTariff: feedInTariff[0] / 100,
        },
      });

      if (fnError) throw fnError;
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMeterData(data.meterData);
      setAnalysis(data.analysis);
      
      toast({
        title: "Analysis Complete!",
        description: "Your smart meter data has been analyzed.",
      });
    } catch (err) {
      console.error('Analysis error:', err);
      const message = err instanceof Error ? err.message : 'Failed to analyze file';
      setError(message);
      toast({
        title: "Analysis Failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  }, [file, batteryCapacity, electricityRate, feedInTariff, toast]);

  return (
    <section id="ai-calculator" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">AI-Powered Analysis</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get <span className="text-accent">Precise Savings</span> From Your Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your smart meter data (NEM12 CSV) and our AI will calculate exactly what you could save with a battery
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Upload & Settings */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* File Upload */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Upload Smart Meter Data
                </h3>
                
                <label className="block">
                  <div className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                    file ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}>
                    <input
                      type="file"
                      accept=".csv"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {file ? (
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle className="w-10 h-10 text-primary" />
                        <p className="font-medium text-foreground">{file.name}</p>
                        <p className="text-sm text-muted-foreground">Click to change file</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="w-10 h-10 text-muted-foreground" />
                        <p className="font-medium text-foreground">Drop NEM12 CSV here</p>
                        <p className="text-sm text-muted-foreground">or click to browse</p>
                      </div>
                    )}
                  </div>
                </label>

                <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Get your NEM12 file from your electricity distributor's portal (AusNet, Jemena, Powercor, etc.)
                  </p>
                </div>
              </div>

              {/* Settings */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Battery & Rates</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-medium text-muted-foreground">Battery Capacity</label>
                      <span className="text-lg font-bold text-primary">{batteryCapacity[0]} kWh</span>
                    </div>
                    <Slider
                      value={batteryCapacity}
                      onValueChange={setBatteryCapacity}
                      min={5}
                      max={20}
                      step={0.5}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        Electricity Rate
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><Info className="w-3 h-3" /></TooltipTrigger>
                            <TooltipContent>Your cost per kWh from the grid</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </label>
                      <span className="text-lg font-bold text-primary">{electricityRate[0]}c/kWh</span>
                    </div>
                    <Slider
                      value={electricityRate}
                      onValueChange={setElectricityRate}
                      min={20}
                      max={50}
                      step={1}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        Feed-in Tariff
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><Info className="w-3 h-3" /></TooltipTrigger>
                            <TooltipContent>What you get paid for exported solar</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </label>
                      <span className="text-lg font-bold text-primary">{feedInTariff[0]}c/kWh</span>
                    </div>
                    <Slider
                      value={feedInTariff}
                      onValueChange={setFeedInTariff}
                      min={0}
                      max={15}
                      step={0.5}
                    />
                  </div>
                </div>

                <Button
                  onClick={analyzeFile}
                  disabled={!file || isAnalyzing}
                  className="w-full mt-6"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing Your Data...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Analyze My Usage
                    </>
                  )}
                </Button>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-destructive">Analysis Error</h4>
                      <p className="text-sm text-destructive/80">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {analysis && meterData ? (
                <div className="space-y-6">
                  {/* Summary Card */}
                  <div className="bg-gradient-hero rounded-2xl shadow-card p-6 md:p-8 text-primary-foreground">
                    <p className="text-sm text-primary-foreground/70 mb-2">Based on {meterData.daysOfData} days of your actual usage</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-5xl font-bold">${Math.round(analysis.annualSavings).toLocaleString()}</span>
                      <span className="text-primary-foreground/70">/year savings</span>
                    </div>
                    <p className="text-primary-foreground/80">{analysis.summary}</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-card rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Battery className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Daily Battery Cycle</p>
                          <p className="text-xl font-bold text-foreground">{analysis.dailyBatteryUsage.toFixed(1)} kWh</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-solar-orange/10 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-solar-orange" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Payback Period</p>
                          <p className="text-xl font-bold text-foreground">{analysis.paybackYears.toFixed(1)} years</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Government Rebate</p>
                          <p className="text-xl font-bold text-foreground">${analysis.batteryRebate.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Self-Consumption</p>
                          <p className="text-xl font-bold text-foreground">
                            {analysis.selfConsumptionBefore}% → {analysis.selfConsumptionAfter}%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="bg-card rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-foreground mb-4">Investment Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estimated Battery Cost</span>
                        <span className="font-semibold">${analysis.estimatedBatteryCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-accent">
                        <span>Victorian Rebate</span>
                        <span className="font-semibold">-${analysis.batteryRebate.toLocaleString()}</span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold text-foreground">Net Cost</span>
                        <span className="font-bold text-primary">${analysis.netCost.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-card rounded-xl p-6 shadow-sm">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-solar-yellow" />
                      AI Recommendations
                    </h4>
                    <ul className="space-y-3">
                      {analysis.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button variant="accent" size="lg" className="w-full" asChild>
                    <Link to="/contact" className="group">
                      Get Your Personalized Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              ) : !error && (
                <div className="bg-card rounded-2xl shadow-card p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
                    <Battery className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Upload Your Smart Meter Data</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Our AI will analyze your actual electricity usage patterns to calculate precise battery savings based on your real data.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
