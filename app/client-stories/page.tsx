"use client";

import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Target, Award } from "lucide-react";

export default function ClientStories() {
  const projects = [
    {
      title: "Lions Gate Hospital",
      year: "2023",
      description: "IT Technical Project Management for the new Acute Care Facility (ACF) redevelopment project at Lions Gate Hospital.",
      tags: ["Healthcare IT", "Infrastructure", "Technical PM"],
      imageSrc: "/images/past-work/lions-gate-hospital.jpg",
      imageAlt: "Lions Gate Hospital",
      logoSrc: "/images/logos/lionsgate.webp",
      stats: {
        value: "$50M+",
        label: "Project Value"
      }
    },
    {
      title: "Vancity Contact Centre",
      year: "2022",
      description: "Program Management for Vancity's Member Experience Contact Centre program with Genesys SAAS cloud-based call centre solution and API integrations.",
      tags: ["Program Management", "Genesys", "API Integration"],
      imageSrc: "/images/past-work/vancity-contact-centre.jpg",
      imageAlt: "Vancity Contact Centre",
      logoSrc: "/images/logos/Logo-vancity.png",
      stats: {
        value: "1000+",
        label: "Agents Supported"
      }
    },
    {
      title: "BC Hydro Cybersecurity",
      year: "2022",
      description: "Project management for BC Hydro Cybersecurity portfolio including Next Generation cybersecurity firewall and datacentre network security projects.",
      tags: ["Cybersecurity", "Firewall", "Datacentre"],
      imageSrc: "/images/past-work/bc-hydro-cybersecurity.jpg",
      imageAlt: "BC Hydro Cybersecurity",
      logoSrc: "/images/logos/bc_hydro.png",
      stats: {
        value: "24/7",
        label: "Security Coverage"
      }
    },
    {
      title: "WorkSafe BC",
      year: "2021",
      description: "Project delivery leadership and Technical SME for a unified communications and call center operational sustainment transition project.",
      tags: ["Unified Communications", "Call Centre", "Technical SME"],
      imageSrc: "/images/past-work/worksafe-bc.jpg",
      imageAlt: "WorkSafe BC",
      logoSrc: "/images/logos/worksafe_bc.png",
      stats: {
        value: "500+",
        label: "Users Migrated"
      }
    },
    {
      title: "Best Buy Canada",
      year: "2021",
      description: "Project management planning for a $40M+ datacentre move program, cybersecurity network segmentation, and SolarWinds network monitoring projects.",
      tags: ["Datacentre", "Cybersecurity", "Network Monitoring"],
      imageSrc: "/images/past-work/bestbuy-canada.jpg",
      imageAlt: "Best Buy Canada",
      logoSrc: "/images/logos/Best_Buy_Logo.png",
      stats: {
        value: "$40M+",
        label: "Program Value"
      }
    },
    {
      title: "Coast Capital Savings",
      year: "2020",
      description: "Project management for Coast Capital's NextGen Contact Centre program with Aspects call centre solution and custom CRM development across 4 environments.",
      tags: ["Contact Centre", "CRM Development", "Multi-Environment"],
      imageSrc: "/images/past-work/coast-capital-savings.jpg",
      imageAlt: "Coast Capital Savings",
      logoSrc: "/images/logos/Coast-Capital-Savings.png",
      stats: {
        value: "4",
        label: "Environments"
      }
    }
  ];

  const stats = [
    { icon: Award, value: "50+", label: "Projects Delivered" },
    { icon: Users, value: "25+", label: "Clients Served" },
    { icon: Target, value: "98%", label: "Success Rate" },
    { icon: Calendar, value: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DJI_0358_HDR-3-scaled.jpeg"
            alt="Client Stories Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Client Stories
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 max-w-4xl mx-auto mb-12">
              Explore our portfolio of successful project management initiatives, 
              strategic consulting engagements, and transformative technology solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Featured Client Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped organizations across healthcare, finance, utilities, and more achieve their technology goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-white">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <Image
                        src={project.logoSrc}
                        alt={`${project.title} logo`}
                        width={200}
                        height={120}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs font-medium text-muted-foreground bg-gray-100 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you achieve your technology goals with proven project management expertise and industry-leading solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 hover:shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 