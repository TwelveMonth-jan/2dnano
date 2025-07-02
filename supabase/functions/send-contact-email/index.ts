import { corsHeaders } from '../_shared/cors.ts';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        {
          status: 405,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Parse the request body
    const formData: ContactFormData = await req.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Prepare email content
    const emailSubject = `Contact Form: ${formData.subject}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #1e40af 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">2D Nano Website</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 10px 0; font-size: 18px;">Contact Information</h3>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #10b981;">
              <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${formData.name}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> ${formData.email}</p>
              ${formData.company ? `<p style="margin: 5px 0; color: #475569;"><strong>Company:</strong> ${formData.company}</p>` : ''}
              <p style="margin: 5px 0; color: #475569;"><strong>Subject:</strong> ${formData.subject}</p>
            </div>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 10px 0; font-size: 18px;">Message</h3>
            <div style="background: #f8fafc; padding: 20px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
            </div>
          </div>
          
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Submitted on ${new Date().toLocaleString('en-GB', { 
                timeZone: 'Europe/London',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })} GMT
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <p style="color: #64748b; font-size: 12px; margin: 0;">
            This email was sent from the 2D Nano contact form
          </p>
        </div>
      </div>
    `;

    // Send email using Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer re_hXHPCPMu_3VnNGn2psjVPgS7gL2UvbTio',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['henrylaw2003@gmail.com'],
        subject: emailSubject,
        html: emailHtml,
        reply_to: formData.email,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error('Resend API error:', errorData);
      throw new Error(`Failed to send email: ${resendResponse.status}`);
    }

    const emailResult = await resendResponse.json();
    console.log('Email sent successfully:', emailResult);

    // Log the submission for backup
    console.log('Contact form submission processed:', {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not provided',
      subject: formData.subject,
      timestamp: new Date().toISOString(),
      emailId: emailResult.id,
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your message! We have received your inquiry and will get back to you within 24 hours.',
        emailId: emailResult.id,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(
      JSON.stringify({
        error: 'Failed to send message. Please try again later or contact us directly at henrylaw2003@gmail.com',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
});