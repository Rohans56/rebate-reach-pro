import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadData {
  name: string;
  email: string;
  phone: string;
  streetAddress: string;
  suburb: string;
  postcode: string;
  message?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const PYLON_API_KEY = Deno.env.get("PYLON_API_KEY");
    if (!PYLON_API_KEY) {
      console.error("PYLON_API_KEY is not configured");
      throw new Error("PYLON_API_KEY is not configured");
    }

    const leadData: LeadData = await req.json();
    console.log("Received lead data:", { ...leadData, email: "[redacted]" });

    // Split name into first and last
    const nameParts = leadData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Full address for Pylon
    const fullAddress = `${leadData.streetAddress}, ${leadData.suburb} ${leadData.postcode}`;

    // Create lead in Pylon using their lead_form endpoint
    const pylonPayload = {
      contact: {
        first_name: firstName,
        last_name: lastName,
        email: leadData.email,
        phone_number: leadData.phone,
      },
      lead: {
        source_type: "website",
      },
      opportunity: {
        title: `${firstName} ${lastName} - ${leadData.suburb}`,
        notes: leadData.message || "Website quote request",
        custom_property_values: {
          "getpylon.com:address_single_line": fullAddress,
        },
      },
    };

    console.log("Sending to Pylon:", { ...pylonPayload, contact: { ...pylonPayload.contact, email: "[redacted]" } });

    const pylonResponse = await fetch("https://api.getpylon.com/v1/lead_form", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PYLON_API_KEY}`,
        "Content-Type": "application/json",
        "Accept": "application/vnd.api+json",
        "Prefer": "pylon-legacy-crm=sync",
      },
      body: JSON.stringify(pylonPayload),
    });

    if (!pylonResponse.ok) {
      const errorText = await pylonResponse.text();
      console.error("Pylon API error:", pylonResponse.status, errorText);
      throw new Error(`Pylon API error: ${pylonResponse.status} - ${errorText}`);
    }

    const pylonResult = await pylonResponse.json();
    console.log("Pylon response:", pylonResult);

    return new Response(JSON.stringify({ success: true, pylonId: pylonResult.data?.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending to Pylon:", error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
