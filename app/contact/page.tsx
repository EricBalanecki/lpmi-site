"use client";

import React, { useState, useRef } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<null | "success" | "error" | "loading">(null);
  const [error, setError] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="max-w-2xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Have a question or want to work with us? Reach out and we’ll get back to you as soon as possible.
        </p>
        <div className="bg-card rounded-2xl shadow-lg p-8 mb-10">
          <div className="mb-6">
            <div className="mb-2 text-foreground font-semibold">Email</div>
            <a href="mailto:info@lpmi.com" className="text-primary hover:underline">info@lpmi.com</a>
          </div>
          <div>
            <div className="mb-2 text-foreground font-semibold">Phone</div>
            <a href="tel:+1234567890" className="text-primary hover:underline">(123) 456-7890</a>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="bg-card rounded-2xl shadow p-8 grid gap-6">
          {/* Honeypot field for spam protection */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground" />
          </div>
          <button type="submit" className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors disabled:opacity-60" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <div className="text-green-600 font-medium">Message sent! We’ll be in touch soon.</div>}
          {status === "error" && <div className="text-red-600 font-medium">{error}</div>}
        </form>
      </section>
    </div>
  );
} 