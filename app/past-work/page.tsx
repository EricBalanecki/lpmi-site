"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function PastWork() {
  const projects = [
    {
      title: "Lions Gate Hospital",
      year: "2023",
      description: "IT Technical Project Management for the new Acute Care Facility (ACF) redevelopment project at Lions Gate Hospital.",
      tags: ["Healthcare IT", "Infrastructure", "Technical PM"],
      imageSrc: "/images/past-work/lions-gate-hospital.jpg",
      imageAlt: "Lions Gate Hospital"
    },
    {
      title: "Vancity Contact Centre",
      year: "2022",
      description: "Program Management for Vancity's Member Experience Contact Centre program with Genesys SAAS cloud-based call centre solution and API integrations.",
      tags: ["Program Management", "Genesys", "API Integration"],
      imageSrc: "/images/past-work/vancity-contact-centre.jpg",
      imageAlt: "Vancity Contact Centre"
    },
    {
      title: "BC Hydro Cybersecurity",
      year: "2022",
      description: "Project management for BC Hydro Cybersecurity portfolio including Next Generation cybersecurity firewall and datacentre network security projects.",
      tags: ["Cybersecurity", "Firewall", "Datacentre"],
      imageSrc: "/images/past-work/bc-hydro-cybersecurity.jpg",
      imageAlt: "BC Hydro Cybersecurity"
    },
    {
      title: "WorkSafe BC",
      year: "2021",
      description: "Project delivery leadership and Technical SME for a unified communications and call center operational sustainment transition project.",
      tags: ["Unified Communications", "Call Centre", "Technical SME"],
      imageSrc: "/images/past-work/worksafe-bc.jpg",
      imageAlt: "WorkSafe BC"
    },
    {
      title: "Best Buy Canada",
      year: "2021",
      description: "Project management planning for a $40M+ datacentre move program, cybersecurity network segmentation, and SolarWinds network monitoring projects.",
      tags: ["Datacentre", "Cybersecurity", "Network Monitoring"],
      imageSrc: "/images/past-work/bestbuy-canada.jpg",
      imageAlt: "Best Buy Canada"
    },
    {
      title: "Coast Capital Savings",
      year: "2020",
      description: "Project management for Coast Capital's NextGen Contact Centre program with Aspects call centre solution and custom CRM development across 4 environments.",
      tags: ["Contact Centre", "CRM Development", "Multi-Environment"],
      imageSrc: "/images/past-work/coast-capital-savings.jpg",
      imageAlt: "Coast Capital Savings"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Past Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful project management initiatives, 
              strategic consulting engagements, and transformative training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Past Work Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 h-full">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="h-full flex"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  year={project.year}
                  description={project.description}
                  tags={project.tags}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how we can help you achieve your project management goals 
            and drive successful outcomes for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="rounded-xl border border-primary px-8 py-3 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 