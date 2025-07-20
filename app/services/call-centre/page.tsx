import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, Headphones, Users, BarChart3, Shield, Zap } from "lucide-react";

export default function CallCentreService() {
  const solutions = [
    {
      icon: Phone,
      title: "Contact Center Platforms",
      description: "Implementation of Genesys, Avaya, and other leading contact center platforms with full feature deployment."
    },
    {
      icon: Headphones,
      title: "Agent Experience",
      description: "Optimized agent desktop, workflow automation, and performance management tools for enhanced productivity."
    },
    {
      icon: Users,
      title: "Customer Journey",
      description: "Omnichannel customer experience design with seamless transitions between voice, chat, email, and social media."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive reporting dashboards, real-time analytics, and performance metrics for data-driven decisions."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "PCI DSS compliance, call recording, data protection, and security frameworks for contact center operations."
    },
    {
      icon: Zap,
      title: "Integration Services",
      description: "CRM integration, API development, and third-party system connectivity for unified customer data."
    }
  ];

  const benefits = [
    "Improved customer satisfaction and first-call resolution",
    "Enhanced agent productivity and reduced handle times",
    "Scalable infrastructure for seasonal and growth demands",
    "Comprehensive reporting and performance analytics",
    "Omnichannel customer experience across all touchpoints",
    "Cost optimization through automation and efficiency gains",
    "Compliance with industry regulations and standards",
    "24/7 support and maintenance for critical operations"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                Call Centre Architecture and Delivery
              </h1>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                Transform your customer service operations with modern call centre solutions that enhance customer experience and agent productivity. Our expert team designs and implements scalable contact center architectures that drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Get Started
                </Link>
                <Link href="#solutions" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Comprehensive Call Centre Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From platform selection to ongoing optimization, we provide end-to-end call centre architecture services that deliver exceptional customer experiences and operational efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
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
              Our Implementation Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology for designing and deploying call centre solutions that maximize customer satisfaction and operational efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Requirements Analysis</h3>
              <p className="text-muted-foreground">Deep dive into business requirements, customer journey mapping, and performance objectives.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Platform Selection</h3>
              <p className="text-muted-foreground">Evaluation and selection of optimal contact center platform based on requirements and budget.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Design & Configuration</h3>
              <p className="text-muted-foreground">Detailed architecture design, workflow configuration, and integration planning.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Deployment & Training</h3>
              <p className="text-muted-foreground">Phased deployment, comprehensive testing, and agent training for successful adoption.</p>
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
                Why Choose Our Call Centre Solutions?
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
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our call centre architecture experts design and implement a modern contact center solution that enhances customer satisfaction and drives business growth.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 