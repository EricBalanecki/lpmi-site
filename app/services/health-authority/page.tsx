import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Building2, Heart, Shield, Users, Zap, Activity, FileText } from "lucide-react";

export default function HealthAuthorityService() {
  const services = [
    {
      icon: Building2,
      title: "Hospital Infrastructure",
      description: "Comprehensive IT infrastructure design and implementation for modern healthcare facilities."
    },
    {
      icon: Heart,
      title: "Clinical Systems",
      description: "Electronic Health Record (EHR) implementation and clinical workflow optimization."
    },
    {
      icon: Shield,
      title: "Healthcare Security",
      description: "HIPAA-compliant security frameworks and data protection for patient information."
    },
    {
      icon: Users,
      title: "Staff Training",
      description: "Comprehensive training programs for healthcare staff on new systems and workflows."
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Seamless integration of clinical, administrative, and operational systems."
    },
    {
      icon: Activity,
      title: "Project Management",
      description: "Healthcare-specific project management with clinical workflow considerations and regulatory compliance."
    }
  ];

  const expertise = [
    "BC Health Authority compliance and regulatory requirements",
    "Healthcare IT infrastructure design and implementation",
    "Clinical system integration and workflow optimization",
    "Electronic Health Record (EHR) deployment and training",
    "Healthcare data security and privacy protection",
    "Medical device integration and interoperability",
    "Healthcare facility network and communication systems",
    "Clinical staff training and change management",
    "Healthcare project governance and stakeholder management",
    "Post-implementation support and optimization"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                BC Health Authority Hospital Redevelopment
              </h1>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                Specialized IT project management and infrastructure delivery for BC Health Authority hospital redevelopment projects. Our healthcare IT experts understand the unique challenges of healthcare environments and deliver solutions that enhance patient care while ensuring regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Get Started
                </Link>
                <Link href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Healthcare IT Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT services tailored specifically for healthcare environments, ensuring patient safety, regulatory compliance, and operational excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Our Healthcare Project Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A specialized approach designed for healthcare environments, ensuring patient safety, regulatory compliance, and successful system adoption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Healthcare Assessment</h3>
              <p className="text-muted-foreground">Comprehensive analysis of clinical workflows, regulatory requirements, and healthcare-specific needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Clinical Design</h3>
              <p className="text-muted-foreground">Healthcare-focused architecture design with clinical workflow optimization and safety considerations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Safe Implementation</h3>
              <p className="text-muted-foreground">Phased deployment with minimal clinical disruption, comprehensive testing, and safety validation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Clinical Adoption</h3>
              <p className="text-muted-foreground">Specialized training, change management, and ongoing support for healthcare staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Our Healthcare Expertise
              </h2>
              <ul className="space-y-4">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-4">
            Ready to Transform Healthcare IT?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our healthcare IT experts help you implement technology solutions that enhance patient care, improve clinical workflows, and ensure regulatory compliance for your hospital redevelopment project.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 