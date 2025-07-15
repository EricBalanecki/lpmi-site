import React from "react";

export default function TechnicalProgramManagementPage() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="max-w-3xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Technical Program Management</h1>
        <p className="text-lg text-muted-foreground mb-8">
          LPMI provides oversight and coordination of multi-project technology programs. We manage vendors, track progress, and deliver executive reporting for your most mission-critical initiatives.
        </p>
        <div className="bg-card rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Program Management Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Program oversight and governance</li>
            <li>Multi-project coordination and scheduling</li>
            <li>Vendor management and contract oversight</li>
            <li>Executive reporting and stakeholder communication</li>
            <li>Risk management and issue resolution</li>
          </ul>
        </div>
        <a
          href="/contact"
          className="inline-block rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        >
          Request Program Management
        </a>
      </section>
    </div>
  );
} 