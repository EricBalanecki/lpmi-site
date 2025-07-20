import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, Video, Users, Shield, Zap } from "lucide-react";

export default function TeamsVoiceService() {
  const features = [
    {
      icon: Phone,
      title: "Voice Integration",
      description: "Seamless integration of Microsoft Teams with your existing phone systems and infrastructure."
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description: "High-quality video conferencing capabilities with advanced features and management tools."
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user provisioning, licensing, and policy management for Teams Voice."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security features and compliance with industry standards and regulations."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Network optimization and quality of service (QoS) configuration for optimal voice quality."
    },
    {
      icon: CheckCircle,
      title: "Migration Support",
      description: "Complete migration from legacy phone systems to Microsoft Teams Voice with minimal disruption."
    }
  ];

  const benefits = [
    "Unified communications platform integration",
    "Cost reduction through VoIP implementation",
    "Enhanced collaboration capabilities",
    "Scalable solution for growing organizations",
    "24/7 support and maintenance",
    "Comprehensive training and documentation"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                Microsoft Teams Voice Solution Delivery
              </h1>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                Transform your organization's communication infrastructure with Microsoft Teams Voice. Our expert team delivers comprehensive voice solutions that integrate seamlessly with your existing Microsoft ecosystem, providing unified communications that enhance productivity and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Get Started
                </Link>
                <Link href="#features" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Comprehensive Teams Voice Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From initial planning to ongoing support, we provide end-to-end Microsoft Teams Voice implementation services tailored to your organization's needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
              Our Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A structured approach to ensure successful Microsoft Teams Voice deployment and adoption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Assessment & Planning</h3>
              <p className="text-muted-foreground">Evaluate current infrastructure and design optimal Teams Voice solution architecture.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Configuration & Setup</h3>
              <p className="text-muted-foreground">Configure Teams Voice policies, routing, and integration with existing systems.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Testing & Migration</h3>
              <p className="text-muted-foreground">Comprehensive testing and phased migration from legacy systems to Teams Voice.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Training & Support</h3>
              <p className="text-muted-foreground">User training, documentation, and ongoing support for optimal adoption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Why Choose Our Teams Voice Solutions?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
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
            Ready to Transform Your Communications?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our Microsoft Teams Voice experts help you implement a unified communications solution that enhances collaboration and productivity across your organization.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 