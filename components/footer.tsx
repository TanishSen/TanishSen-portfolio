"use client";

import { motion } from "motion/react";
import { TextLoop } from "@/components/ui/text-loop";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="mt-24 border-t border-zinc-100 px-4 py-8 dark:border-zinc-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-gradient text-lg font-bold">Tanish Sen</span>
            <div className="ml-2 flex h-4 items-end">
              <div className="music-bar"></div>
              <div className="music-bar"></div>
              <div className="music-bar"></div>
              <div className="music-bar"></div>
            </div>
          </div>

          <div className="text-center text-sm text-zinc-500 md:text-right dark:text-zinc-400">
            <TextLoop className="inline-block">
              <span>© {currentYear}tanishsen</span>
              <span>Where code meets canvas.</span>
              <span>Crafting digital symphonies.</span>
            </TextLoop>
          </div>
        </div>

        <motion.div
          className="mt-6 text-center text-xs text-zinc-400 dark:text-zinc-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Made with love{" "}
          <motion.span
            className="inline-block text-red-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <Heart size={12} fill="currentColor" />
          </motion.span>
          <br />
          Built using Next.js, Framer Motion, and a deep passion for code and
          design.
        </motion.div>
      </div>
    </motion.footer>
  );
}
