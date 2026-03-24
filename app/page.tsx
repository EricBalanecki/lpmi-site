"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setActiveServiceSlide(carouselApi.selectedScrollSnap());
    };

    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

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
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
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
              Comprehensive project management and technology solutions tailored to your organization&apos;s needs.
            </p>
          </div>

          <div className="mb-6 flex items-center justify-center gap-3">
            <span
              className={`h-2.5 w-2.5 rounded-full transition-colors ${activeServiceSlide === 0 ? "bg-primary" : "bg-gray-300"}`}
            />
            <span
              className={`h-2.5 w-2.5 rounded-full transition-colors ${activeServiceSlide === 1 ? "bg-primary" : "bg-gray-300"}`}
            />
          </div>

          <Carousel
            setApi={setCarouselApi}
            opts={{ loop: false, duration: 44 }}
            className="w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl"
          >
            <CarouselContent className="ml-0">
              <CarouselItem className="pl-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="p-8 md:p-10 min-h-[520px]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <h3 className="text-3xl font-bold text-foreground mb-4">Project Management</h3>
                      <p className="text-muted-foreground mb-6">
                        One unified service covering delivery leadership, program coordination, recovery, and stakeholder/vendor management.
                      </p>
                      <Image
                        src="/images/icons/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL21vdGFybzdfZ3JlZW5fbW91bnRhaW5faWNvbl9zaWxob3VldHRlX21vbm90b25lX3NpbXBsZV9hZXN0aGV0aV80YjY5Mzk3NS1lOWE3LTRkZTItYmU3Mi02NGZiN2RhYjdkYzdfMi5qcGc.webp"
                        alt="Mountain icon"
                        width={110}
                        height={110}
                        className="h-auto w-24 object-contain opacity-90"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl bg-gray-50 p-6">
                          <h4 className="text-lg font-semibold mb-2">IT Project Delivery</h4>
                          <p className="text-muted-foreground text-sm mb-4">Full delivery leadership from planning through execution and closeout.</p>
                          <Link href="/services/project-management" className="text-primary font-medium text-sm">Learn More →</Link>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-6">
                          <h4 className="text-lg font-semibold mb-2">Technical Program Management</h4>
                          <p className="text-muted-foreground text-sm mb-4">Multi-project coordination, executive reporting, and governance alignment.</p>
                          <Link href="/services/project-management" className="text-primary font-medium text-sm">Learn More →</Link>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-6">
                          <h4 className="text-lg font-semibold mb-2">Project Recovery &amp; Turnaround</h4>
                          <p className="text-muted-foreground text-sm mb-4">Rapid stabilization support for at-risk projects and delayed programs.</p>
                          <Link href="/services/project-management" className="text-primary font-medium text-sm">Learn More →</Link>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-6">
                          <h4 className="text-lg font-semibold mb-2">Stakeholder &amp; Vendor Coordination</h4>
                          <p className="text-muted-foreground text-sm mb-4">Structured communication and accountability across teams and partners.</p>
                          <Link href="/services/project-management" className="text-primary font-medium text-sm">Learn More →</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>

              <CarouselItem className="pl-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="p-8 md:p-10 min-h-[520px]"
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
                    <div className="lg:col-span-1 lg:order-2">
                      <h3 className="text-3xl font-bold text-foreground mb-4">Services</h3>
                      <p className="text-muted-foreground mb-6">
                        Each specialty area has a dedicated service page with delivery scope, outcomes, and implementation focus.
                      </p>
                      <Image
                        src="/images/icons/pngtree-mountains-and-lakes-icon-vector-png-image_7045309.png"
                        alt="Mountain and lake icon"
                        width={110}
                        height={110}
                        className="h-auto w-24 object-contain opacity-90"
                      />
                    </div>
                    <div className="lg:col-span-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="rounded-2xl bg-gray-50 p-6">
                        <h4 className="text-lg font-semibold mb-2">Project Management</h4>
                        <p className="text-muted-foreground text-sm mb-4">Unified project delivery, program oversight, turnaround, and stakeholder coordination.</p>
                        <Link href="/services/project-management" className="text-primary font-medium text-sm">Learn More →</Link>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-6">
                        <h4 className="text-lg font-semibold mb-2">Microsoft Teams Voice</h4>
                        <p className="text-muted-foreground text-sm mb-4">Unified communications design and implementation for modern collaboration.</p>
                        <Link href="/services/teams-voice" className="text-primary font-medium text-sm">Learn More →</Link>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-6">
                        <h4 className="text-lg font-semibold mb-2">Telecommunication Architecture</h4>
                        <p className="text-muted-foreground text-sm mb-4">Robust telecom architecture that supports growth, resiliency, and transformation.</p>
                        <Link href="/services/telecom-architecture" className="text-primary font-medium text-sm">Learn More →</Link>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-6">
                        <h4 className="text-lg font-semibold mb-2">Call Centre Solutions</h4>
                        <p className="text-muted-foreground text-sm mb-4">Modern contact-centre capabilities to improve customer experience and agent performance.</p>
                        <Link href="/services/call-centre" className="text-primary font-medium text-sm">Learn More →</Link>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-6">
                        <h4 className="text-lg font-semibold mb-2">Network Architecture</h4>
                        <p className="text-muted-foreground text-sm mb-4">Foundational network design and delivery for secure, scalable digital operations.</p>
                        <Link href="/services/network-architecture" className="text-primary font-medium text-sm">Learn More →</Link>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-6">
                        <h4 className="text-lg font-semibold mb-2">Healthcare IT</h4>
                        <p className="text-muted-foreground text-sm mb-4">Specialized infrastructure and delivery support for health authority environments.</p>
                        <Link href="/services/health-authority" className="text-primary font-medium text-sm">Learn More →</Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 border shadow-md" />
            <CarouselNext className="right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 border shadow-md" />
          </Carousel>
        </div>
      </section>

      {/* About Section - now below Services */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
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

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/images/AdobeStock_170135481.webp"
              alt="LPMI project management collaboration"
              width={900}
              height={650}
              className="w-full h-full object-cover"
            />
          </div>
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
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
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
