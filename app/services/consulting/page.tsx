import React from "react";

export default function ITProjectDeliveryPage() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="max-w-3xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">IT Project Delivery</h1>
        <p className="text-lg text-muted-foreground mb-8">
          LPMI manages every detail of your IT infrastructure rollout, ensuring seamless delivery and minimal disruption to your business. Our certified project managers bring deep technical expertise and a relentless focus on your business outcomes.
        </p>
        <div className="bg-card rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>End-to-end IT project management and delivery</li>
            <li>Technical leadership for infrastructure, cloud, and cybersecurity projects</li>
            <li>Business continuity and risk mitigation</li>
            <li>Stakeholder engagement and executive reporting</li>
            <li>Vendor and partner coordination</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose LPMI?</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Proven track record with major Canadian organizations</li>
            <li>Certified, experienced project managers</li>
            <li>Technical depth and business acumen</li>
            <li>Transparent, collaborative approach</li>
          </ul>
        </div>
        <a
          href="/contact"
          className="inline-block rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
} 