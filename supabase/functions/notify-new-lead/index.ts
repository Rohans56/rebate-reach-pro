import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NOTIFICATION_EMAIL = "1971rohan@gmail.com";

interface LeadData {
  name?: string;
  email?: string;
  phone?: string;
  streetAddress?: string;
  suburb?: string;
  postcode?: string;
  message?: string;
  source?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

    const lead: LeadData = await req.json();

    const htmlContent = `
      <h2>New Lead Received - ADSA Australian Solar</h2>
      <table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
        <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${lead.name || "-"}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${lead.email || "-"}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${lead.phone || "-"}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Address:</td><td style="padding: 8px;">${lead.streetAddress || ""}, ${lead.suburb || ""} ${lead.postcode || ""}</td></tr>
        ${lead.message ? `<tr><td style="padding: 8px; font-weight: bold;">Message:</td><td style="padding: 8px;">${lead.message}</td></tr>` : ""}
        ${lead.source ? `<tr><td style="padding: 8px; font-weight: bold;">Source:</td><td style="padding: 8px;">${lead.source}</td></tr>` : ""}
        <tr><td style="padding: 8px; font-weight: bold;">Submitted:</td><td style="padding: 8px;">${new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })}</td></tr>
      </table>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ADSA Solar <onboarding@resend.dev>",
        to: [NOTIFICATION_EMAIL],
        subject: `New Lead: ${lead.name || "Unknown"} - ${lead.suburb || "Unknown suburb"}`,
        html: htmlContent,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Resend API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    console.log("Notification email sent:", data);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
