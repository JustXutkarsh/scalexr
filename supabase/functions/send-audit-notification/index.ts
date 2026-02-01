import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const N8N_WEBHOOK_URL = Deno.env.get("N8N_WEBHOOK_URL");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AuditRequestData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  currentChallenges: string;
  monthlyLeads: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: AuditRequestData = await req.json();
    
    console.log("Received audit request:", {
      name: data.name,
      email: data.email,
      businessName: data.businessName
    });

    // Send notification email to admin
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Autonix Audit <noreply@agencyautonix.com>",
        to: ["utkarsh@agencyautonix.com"],
        subject: `🔔 New Audit Request from ${data.businessName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
              New Business Audit Request
            </h1>
            
            <div style="background: #f8f5ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h2 style="color: #333; margin-top: 0;">📋 Personal Details</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
            </div>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h2 style="color: #333; margin-top: 0;">🏢 Business Details</h2>
              <p><strong>Business Name:</strong> ${data.businessName}</p>
              <p><strong>Industry/Type:</strong> ${data.businessType}</p>
              <p><strong>Monthly Leads:</strong> ${data.monthlyLeads || 'Not specified'}</p>
            </div>
            
            <div style="background: #fef3c7; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h2 style="color: #333; margin-top: 0;">⚡ Current Challenges</h2>
              <p style="white-space: pre-wrap;">${data.currentChallenges}</p>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              This request was submitted via the Autonix website. Please respond within 24-48 hours.
            </p>
          </div>
        `,
      }),
    });

    if (!adminEmailRes.ok) {
      const error = await adminEmailRes.text();
      console.error("Failed to send admin email:", error);
      throw new Error(`Failed to send admin email: ${error}`);
    }

    console.log("Admin notification sent successfully");

    // Send confirmation email to the user
    const userEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Autonix <noreply@agencyautonix.com>",
        to: [data.email],
        subject: "We've received your audit request! 🎉",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #7c3aed;">Thank you, ${data.name}!</h1>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              We've received your business audit request for <strong>${data.businessName}</strong>.
            </p>
            
            <div style="background: #f8f5ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h2 style="color: #7c3aed; margin-top: 0;">What happens next?</h2>
              <ol style="color: #333; line-height: 1.8;">
                <li>Our team will review your submission</li>
                <li>We'll analyze your current customer journey</li>
                <li>You'll receive a personalized audit report within <strong>24-48 hours</strong></li>
              </ol>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              In the meantime, if you'd like to discuss your needs right away, feel free to 
              <a href="https://calendly.com/scalee-x/new-meeting" style="color: #7c3aed;">book a call with us</a>.
            </p>
            
            <p style="color: #666; margin-top: 30px;">
              Best regards,<br>
              <strong>The Autonix Team</strong>
            </p>
          </div>
        `,
      }),
    });

    if (!userEmailRes.ok) {
      console.error("Failed to send user confirmation email:", await userEmailRes.text());
      // Don't throw here - admin was notified, that's the priority
    } else {
      console.log("User confirmation sent successfully");
    }

    // Trigger n8n workflow for calling automation
    if (N8N_WEBHOOK_URL) {
      try {
        const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            businessName: data.businessName,
            businessType: data.businessType,
            currentChallenges: data.currentChallenges,
            monthlyLeads: data.monthlyLeads,
            submittedAt: new Date().toISOString(),
          }),
        });
        console.log("n8n webhook triggered, status:", n8nResponse.status);
      } catch (n8nError) {
        console.error("Failed to trigger n8n webhook:", n8nError);
        // Don't throw - emails were sent, that's the priority
      }
    } else {
      console.warn("N8N_WEBHOOK_URL not configured, skipping calling automation");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-audit-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
