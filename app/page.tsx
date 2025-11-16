"use client";

import { HeroSection } from "@/components/HeroSection";
import { CharacterRoster } from "@/components/CharacterRoster";
import { PowerScale } from "@/components/PowerScale";
import { BattleTimeline } from "@/components/BattleTimeline";
import { EnergyTicker } from "@/components/EnergyTicker";
import { motion } from "framer-motion";

const soundboard = [
  { id: "spirit", label: "SPIRIT NOVA", color: "from-neon-cyan to-neon-magenta" },
  { id: "galaxy", label: "GALAXY DRIVER", color: "from-purple-500 to-neon-yellow" },
  { id: "thunder", label: "THUNDER BREAK", color: "from-orange-500 to-neon-cyan" },
  { id: "limit", label: "LIMIT BREAK", color: "from-red-500 to-neon-magenta" }
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <EnergyTicker />
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="panel-frame rounded-3xl p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-neon-cyan/90">Holo Replay HUD</p>
                <h2 data-text="STAGE OVERLAY" className="glitch-text font-action text-4xl tracking-[0.35em] text-white">
                  STAGE OVERLAY
                </h2>
              </div>
              <p className="max-w-md text-slate-200/80 leading-relaxed">
                Set your audio to max, widen the frame, and lock focus. This arena pulses with the kinetic swagger of
                vintage battle anime intros captured on grainy VHS.
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {soundboard.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="relative overflow-hidden rounded-2xl border border-white/8 bg-slate-950/60 px-8 py-12 text-left uppercase tracking-[0.5em]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, rotate: 0.5 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`}
                    animate={{ opacity: [0.2, 0.45, 0.2] }}
                    transition={{ repeat: Infinity, duration: 6, delay: index * 0.2 }}
                  />
                  <motion.div
                    className="absolute -inset-24 bg-gradient-to-r from-white/10 to-transparent blur-3xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                  />
                  <div className="relative">
                    <span className="text-xs text-neon-yellow">SFX MODULE</span>
                    <p className="font-action text-3xl md:text-4xl mt-6">{item.label}</p>
                    <span className="text-xs text-slate-300/70 block mt-4">Tap + hold to unleash retro roar</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CharacterRoster />
      <PowerScale />
      <BattleTimeline />

      <footer className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm uppercase tracking-[0.4em] text-slate-300/60">
          Broadcast courtesy of HyperNova Studios // Restoring the energy of 90s battle anime through modern neon
          mythmaking.
        </div>
      </footer>
    </main>
  );
}
