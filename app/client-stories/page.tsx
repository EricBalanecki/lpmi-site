"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CoreStoriesGrid } from "@/components/client-stories/CoreStoriesGrid";
import { storyStats, coreProjects, telecomProjects } from "@/components/client-stories/data";
import { StoryShowcase } from "@/components/client-stories/StoryShowcase";
import { StoryTabSwitcher } from "@/components/client-stories/StoryTabSwitcher";
import { TelecomStoriesGrid } from "@/components/client-stories/TelecomStoriesGrid";

export default function ClientStories() {
  const [activeTab, setActiveTab] = useState<"core" | "telecom">("core");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 min-h-[78vh] flex items-center pt-24">
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
        <div className="relative z-10 max-w-7xl mx-auto w-full">
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
              {storyStats.map((stat, index) => (
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
          <StoryTabSwitcher activeTab={activeTab} onChange={setActiveTab} />

          <StoryShowcase
            title={activeTab === "core" ? "Featured Client Stories" : "Telecom & Teams Voice Stories"}
            description={
              activeTab === "core"
                ? "Discover how we have helped organizations across healthcare, finance, utilities, and more achieve their technology goals."
                : "A focused look at telecom modernization, unified communications assessments, and Microsoft Teams Voice implementations delivered for public-sector organizations."
            }
            showTeamsImage={activeTab === "telecom"}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "core" ? (
                <CoreStoriesGrid projects={coreProjects} />
              ) : (
                <TelecomStoriesGrid projects={telecomProjects} />
              )}
            </motion.div>
          </AnimatePresence>
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