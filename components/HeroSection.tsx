"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="parallax">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center gap-6 text-center py-24 md:py-32"
        >
          <motion.div
            className="burst-lines absolute -inset-60 opacity-35"
            animate={{
              rotate: [0, 3, -3, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative"
            animate={{ rotate: [0, -0.5, 0.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-neon-cyan/60 to-neon-magenta/50 opacity-70 energy-ring" />
            <motion.div
              className="absolute -inset-16 rounded-full border border-neon-cyan/40"
              animate={{
                borderColor: ["rgba(73,245,247,0.4)", "rgba(247,73,245,0.45)", "rgba(73,245,247,0.4)"],
                scale: [1, 1.05, 1]
              }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <motion.span
              className="uppercase text-sm tracking-[1.2em] text-neon-cyan/70"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Hyper Combat Chronicle
            </motion.span>
          </motion.div>

          <motion.h1
            data-text="NEO ZENITH SHOWDOWN"
            className="glitch-text font-action text-[clamp(3.5rem,7vw,6rem)] text-white drop-shadow-[0_0_40px_rgba(73,245,247,0.55)] leading-none"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            NEO ZENITH SHOWDOWN
          </motion.h1>

          <motion.p
            className="max-w-3xl text-lg md:text-xl text-slate-200/90 tracking-wide"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            Dimension-shattering warriors collide in a kinetic storm of ki. Every punch bends light, every shout rips
            open the skyline. Feel the raw charge of 90s battle anime reborn for the neon age.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          >
            <button className="relative px-8 py-3 font-action text-xl tracking-widest uppercase text-black bg-neon-yellow shadow-aura hover:shadow-[0_0_40px_rgba(245,247,73,0.65)] transition-all duration-300 before:absolute before:inset-0 before:border before:border-black/20 before:animate-glitch">
              Enter the Arena
            </button>
            <button className="px-8 py-3 font-action text-xl tracking-[0.4em] uppercase text-neon-cyan border border-neon-cyan/60 hover:border-neon-magenta/70 transition-colors duration-300">
              Tactical Replay
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
