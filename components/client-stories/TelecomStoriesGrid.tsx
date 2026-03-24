"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, Phone } from "lucide-react";
import type { TelecomProject } from "@/components/client-stories/data";

type TelecomStoriesGridProps = {
  projects: TelecomProject[];
};

export function TelecomStoriesGrid({ projects }: TelecomStoriesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.organization}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center">
              <Building2 className="w-5 h-5 text-primary mr-2 mt-0.5" />
              <h3 className="text-xl font-semibold text-foreground">{project.organization}</h3>
            </div>
            {project.year && (
              <div className="inline-flex items-center text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 mr-1" />
                {project.year}
              </div>
            )}
          </div>

          <ul className="space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex text-muted-foreground leading-relaxed">
                <Phone className="w-4 h-4 text-primary mt-1 mr-2 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
