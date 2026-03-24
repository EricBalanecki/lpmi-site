"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CoreProject } from "@/components/client-stories/data";

type CoreStoriesGridProps = {
  projects: CoreProject[];
};

export function CoreStoriesGrid({ projects }: CoreStoriesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={`${project.title}-${project.year}`}
          className="group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
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

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
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
  );
}
