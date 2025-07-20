import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Network, Wifi, Server, Shield, Zap, Globe } from "lucide-react";

export default function TelecomArchitectureService() {
  const services = [
    {
      icon: Network,
      title: "Network Design",
      description: "Comprehensive network architecture design including LAN, WAN, and wireless infrastructure planning."
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Enterprise-grade wireless network design and implementation for seamless connectivity."
    },
    {
      icon: Server,
      title: "Data Center Design",
      description: "Modern data center architecture with high availability, redundancy, and scalability."
    },
    {
      icon: Shield,
      title: "Security Architecture",
      description: "Multi-layered security design including firewalls, VPNs, and intrusion detection systems."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Network performance tuning, QoS implementation, and bandwidth management solutions."
    },
    {
      icon: Globe,
      title: "Cloud Integration",
      description: "Hybrid and multi-cloud architecture design with seamless on-premises integration."
    }
  ];

  const capabilities = [
    "Enterprise network infrastructure design and implementation",
    "VoIP and unified communications architecture",
    "SD-WAN and MPLS network solutions",
    "Network security and compliance frameworks",
    "Cloud connectivity and hybrid architecture",
    "Network monitoring and management systems",
    "Disaster recovery and business continuity planning",
    "Network performance optimization and troubleshooting"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
                Telecommunication Architecture and Delivery
              </h1>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                Design and implement robust telecommunication infrastructure that powers your organization's digital transformation. Our expert architects deliver scalable, secure, and high-performance network solutions that support your business objectives and future growth.
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
              Comprehensive Telecom Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From initial assessment to ongoing support, we provide end-to-end telecommunication architecture services that ensure your network infrastructure meets current needs and scales for future growth.
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
              Our Architecture Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven approach to designing and delivering telecommunication infrastructure that aligns with your business strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Discovery & Analysis</h3>
              <p className="text-muted-foreground">Comprehensive assessment of current infrastructure, requirements, and business objectives.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Architecture Design</h3>
              <p className="text-muted-foreground">Detailed technical design including network topology, security framework, and scalability planning.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Implementation</h3>
              <p className="text-muted-foreground">Phased deployment with minimal disruption, comprehensive testing, and quality assurance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Optimization</h3>
              <p className="text-muted-foreground">Performance tuning, monitoring setup, and ongoing support for optimal network operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Our Telecom Capabilities
              </h2>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
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
            Ready to Build Your Telecom Infrastructure?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our telecommunication architecture experts design and implement a robust network infrastructure that supports your business growth and digital transformation initiatives.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 