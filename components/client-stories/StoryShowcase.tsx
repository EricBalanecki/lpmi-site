"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type StoryShowcaseProps = {
  title: string;
  description: string;
  showTeamsImage?: boolean;
};

export function StoryShowcase({ title, description, showTeamsImage = false }: StoryShowcaseProps) {
  return (
    <motion.div
      className={`mb-10 grid grid-cols-1 items-center gap-8 ${
        showTeamsImage ? "lg:grid-cols-2" : ""
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className={showTeamsImage ? "" : "max-w-3xl"}>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {showTeamsImage && (
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 20, y: -6 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Image
            src="/images/backgrounds/Microsoft-Teams-Devices.webp"
            alt="Microsoft Teams devices setup"
            width={520}
            height={320}
            className="h-auto w-full max-w-[520px] object-contain"
            priority
          />
        </motion.div>
      )}
    </motion.div>
  );
}
