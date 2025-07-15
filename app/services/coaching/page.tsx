import React from "react";

export default function ProjectRecoveryPage() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="max-w-3xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Project Recovery & Turnaround</h1>
        <p className="text-lg text-muted-foreground mb-8">
          LPMI rapidly assesses and rescues troubled IT projects. We restore momentum, resolve issues, and deliver results for your organization with proven turnaround expertise.
        </p>
        <div className="bg-card rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">How We Help</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Rapid project assessment and triage</li>
            <li>Root cause analysis and issue resolution</li>
            <li>Stakeholder alignment and communication</li>
            <li>Restoring project momentum and confidence</li>
            <li>Delivering results and project closeout</li>
          </ul>
        </div>
        <a
          href="/contact"
          className="inline-block rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        >
          Book a Consultation
        </a>
      </section>
    </div>
  );
} 