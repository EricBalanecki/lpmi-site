import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limit (for demo; use Redis or DB for production)
const ipTimestamps = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    const now = Date.now();
    if (ipTimestamps.has(ip) && now - ipTimestamps.get(ip)! < RATE_LIMIT_WINDOW) {
      return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 });
    }
    ipTimestamps.set(ip, now);

    const { name, email, message, company } = await req.json();
    // Honeypot spam protection
    if (company && company.trim() !== "") {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    // Basic email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    // Custom HTML email template
    const html = `
      <div style="font-family: Arial, sans-serif; background: #f4f8fb; padding: 32px; border-radius: 12px; color: #1a202c; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #2563eb; margin-bottom: 16px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
        <p><strong>Message:</strong></p>
        <div style="background: #fff; border-radius: 8px; padding: 16px; border: 1px solid #dbeafe; margin-bottom: 16px;">${message.replace(/\n/g, "<br/>")}</div>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #dbeafe;" />
        <small style="color: #64748b;">This message was sent from the LPMI website contact form.</small>
      </div>
    `;
    // Send email
    await resend.emails.send({
      from: "LPMI Contact <noreply@lpmi.com>",
      to: ["info@lpmi.com"],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
} 