"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/home_page_background.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            {/* Semi-transparent bubble */}
            <motion.div
              className="bg-background/80 backdrop-blur-md rounded-3xl p-10 shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Certified IT Project Delivery
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                LPMI delivers complex IT infrastructure projects with certified project management expertise.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#services"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  Our Services
                </a>
                <a
                  href="#about"
                  className="text-sm font-semibold leading-6 text-foreground"
                >
                  Why LPMI? <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - moved above About */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive project management and technology solutions tailored to your organization's needs.
            </p>
          </div>
          
          {/* Project Management Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Project Management Services</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* IT Project Delivery */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.2 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl font-bold mb-2">IT</div>
                    <div className="text-sm">Project Delivery</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">IT Project Delivery</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    We manage every detail of your IT infrastructure rollout, ensuring seamless delivery and minimal disruption to your business.
                  </p>
                  <Link href="/services/consulting" className="font-medium transition-colors text-primary hover:text-primary/80 text-sm">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
              
              {/* Technical Program Management */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.35 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl font-bold mb-2">Program</div>
                    <div className="text-sm">Management</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Technical Program Management</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Oversight and coordination of multi-project programs, vendor management, and executive reporting for mission-critical technology initiatives.
                  </p>
                  <Link href="/services/training" className="font-medium transition-colors text-primary hover:text-primary/80 text-sm">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
              
              {/* Project Recovery & Turnaround */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.5 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl font-bold mb-2">Recovery</div>
                    <div className="text-sm">& Turnaround</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Project Recovery & Turnaround</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Rapid assessment and rescue of troubled IT projects. We restore momentum, resolve issues, and deliver results for your organization.
                  </p>
                  <Link href="/services/coaching" className="font-medium transition-colors text-primary hover:text-primary/80 text-sm">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
              
              {/* Stakeholder & Vendor Coordination */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.65 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl font-bold mb-2">Coordination</div>
                    <div className="text-sm">& Management</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Stakeholder & Vendor Coordination</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    We coordinate all project stakeholders and vendors, ensuring clear communication and accountability from kickoff to closeout.
                  </p>
                  <Link href="/services/consulting" className="font-medium transition-colors text-primary hover:text-primary/80 text-sm">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Specialized Services */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Specialized Technology Services</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Microsoft Teams Voice */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.2 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-3xl font-bold mb-1">Teams</div>
                    <div className="text-sm">Voice Solutions</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Microsoft Teams Voice</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Transform your communications with Microsoft Teams Voice integration and unified communications solutions.
                  </p>
                  <Link href="/services/teams-voice" className="font-medium transition-colors text-primary hover:text-primary/80 text-sm">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* Telecom Architecture */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.35 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-3xl font-bold mb-1">Telecom</div>
                    <div className="text-sm">Architecture</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Telecommunication Architecture</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Design and implement robust telecommunication infrastructure that powers your organization's digital transformation.
                  </p>
                  <Link href="/services/telecom-architecture" className="font-medium transition-colors text-primary hover:text-primary/80 text-sm">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* Call Centre */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.5 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-3xl font-bold mb-1">Call Centre</div>
                    <div className="text-sm">Architecture</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Call Centre Solutions</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Transform your customer service operations with modern call centre solutions that enhance customer experience and agent productivity.
                  </p>
                  <Link href="/services/call-centre" className="font-medium transition-colors text-primary hover:text-primary/80 text-sm">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* Network Architecture */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.65 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-3xl font-bold mb-1">Network</div>
                    <div className="text-sm">Architecture</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Network Architecture</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Design and implement robust network infrastructure that forms the foundation of your digital transformation.
                  </p>
                  <Link href="/services/network-architecture" className="font-medium transition-colors text-primary hover:text-primary/80 text-sm">
                    Learn More →
                  </Link>
                </div>
              </motion.div>

              {/* Healthcare */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: 0.8 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 lg:col-start-2"
              >
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-3xl font-bold mb-1">Healthcare</div>
                    <div className="text-sm">IT Solutions</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Healthcare IT</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Specialized IT project management and infrastructure delivery for healthcare environments with regulatory compliance.
                  </p>
                  <Link href="/services/health-authority" className="font-medium transition-colors text-primary hover:text-primary/80 text-sm">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - now below Services */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            About LPMI
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            LPMI’s project management team is PMI-trained and certified in advanced project management and leadership. We specialize in delivering IT infrastructure and technology projects on time and on budget for clients in healthcare, finance, utilities, and the public sector.
          </p>
          <ul className="space-y-2 text-muted-foreground mb-8">
            <li className="flex items-center">
              <span className="mr-2 text-primary">✓</span>
              PMI-certified, advanced project managers
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-primary">✓</span>
              Deep expertise in IT infrastructure and technical delivery
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-primary">✓</span>
              Track record of on-time, on-budget project success
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-primary">✓</span>
              Trusted by major Canadian organizations
            </li>
          </ul>
        </div>
      </section>

      {/* Stats/Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$500M+</div>
              <div className="text-muted-foreground">IT Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <svg className="h-8 w-8 text-primary mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m2 0a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0v6m0-6h2" /></svg>
            <blockquote className="italic text-muted-foreground text-center max-w-xl mb-2">“LPMI’s certified project managers delivered our IT infrastructure project on time and exceeded our expectations. Their professionalism and technical expertise are unmatched.”</blockquote>
            <div className="text-sm text-foreground font-semibold">VP, Information Technology, National Healthcare Provider</div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
            Ready to deliver your next IT project with confidence?
          </h2>
          <p className="text-lg text-primary-foreground mb-8">
            Contact LPMI’s certified project management team today to discuss your goals and get started.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg hover:bg-primary/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
