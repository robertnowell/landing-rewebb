"use client";

import Safari from "@/components/safari";
import Section from "@/components/section";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <Section
      title={siteConfig.solution.title}
      subtitle={siteConfig.solution.description}
      className="bg-background"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-muted-foreground md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {siteConfig.solution.features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "group relative items-start overflow-hidden bg-card p-6 rounded-2xl",
              feature.className
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <feature.icon className="h-6 w-6 text-primary" />
              <h3 className="font-semibold text-primary">{feature.title}</h3>
            </div>
            <p className="text-foreground mb-4">{feature.description}</p>
            <Safari
              src={feature.imageSrc}
              url={feature.url}
              className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-card pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
