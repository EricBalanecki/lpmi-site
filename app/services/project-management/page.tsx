import Link from "next/link";
import { CheckCircle, BriefcaseBusiness, RefreshCcw, Users, ChartNoAxesCombined, ShieldCheck } from "lucide-react";

export default function ProjectManagementPage() {
  const features = [
    {
      icon: BriefcaseBusiness,
      title: "IT Project Delivery",
      description: "End-to-end delivery management for infrastructure, cloud, and enterprise technology initiatives.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Technical Program Management",
      description: "Coordinated oversight across multiple projects, with governance and executive reporting.",
    },
    {
      icon: RefreshCcw,
      title: "Project Recovery & Turnaround",
      description: "Rapid stabilization support to restore execution momentum and delivery confidence.",
    },
    {
      icon: Users,
      title: "Stakeholder & Vendor Coordination",
      description: "Structured communication and accountability across sponsors, teams, and partners.",
    },
    {
      icon: ShieldCheck,
      title: "Risk & Issue Management",
      description: "Proactive identification, escalation, and mitigation of project risks and dependencies.",
    },
    {
      icon: CheckCircle,
      title: "Outcome-Focused Governance",
      description: "Clear governance rhythms that keep decisions aligned to business outcomes.",
    },
  ];

  const benefits = [
    "PMI-trained, certified project professionals",
    "Proven delivery record across healthcare, finance, utilities, and public sector organizations",
    "Strong technical depth paired with business-first execution",
    "Collaborative engagement model with transparent reporting",
    "Scalable support from project setup through closeout",
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                Project Management
              </h1>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                One unified service for IT project delivery, program coordination, turnaround support, and stakeholder/vendor management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-800">
                  Get Started
                </Link>
                <Link href="#features" className="inline-flex items-center justify-center px-6 py-3 border border-emerald-200 text-base font-medium rounded-md text-emerald-800 bg-white hover:bg-emerald-50">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Comprehensive Delivery Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Flexible project management support across planning, execution, governance, and recovery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-6">
                  <feature.icon className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8 text-center">
            Why Organizations Choose LPMI
          </h2>
          <ul className="max-w-3xl mx-auto space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-700 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-4">
            Ready to Improve Delivery Confidence?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s align your project strategy, governance, and execution with the outcomes your organization needs.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-emerald-800 bg-white hover:bg-emerald-50">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
