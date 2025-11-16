"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const tickerItems = [
  "⚡ KI LEVEL SPIKES BEYOND 90K UNITS",
  "🔥 IMPACT FISSURE DETECTED",
  "💥 PLANETARY DEFENSE GRID OVERLOAD",
  "🌌 DIMENSIONAL RIFT STABILIZING",
  "🎚 AUDIO DUB: HYPER REVERB ENGAGED",
  "🚨 HYPER COMBO MAXIMUM LIMIT BREAK"
];

export function EnergyTicker() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 18
      }
    });
  }, [controls]);

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-slate-950/80">
      <motion.div className="flex gap-16 py-4 px-8" animate={controls}>
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-action tracking-[0.6em] uppercase text-sm text-neon-yellow whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/95 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/95 to-transparent pointer-events-none" />
    </div>
  );
}
