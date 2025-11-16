"use client";

import { motion } from "framer-motion";

const fighters = [
  {
    name: "Kairos Vega",
    epithet: "Chrono Saber",
    power: 92000,
    description: "Slices through time to counter every strike before it lands.",
    aura: ["from-neon-magenta/70", "to-neon-cyan/60"]
  },
  {
    name: "Tsukiko Raine",
    epithet: "Void Siren",
    power: 88000,
    description: "Harnesses lunar gravity wells to trap foes in lucid nightmares.",
    aura: ["from-indigo-500/70", "to-neon-yellow/60"]
  },
  {
    name: "Axiom Dray",
    epithet: "Plasma Titan",
    power: 101000,
    description: "Condenses stellar cores into seismic gauntlets that ignite the horizon.",
    aura: ["from-orange-500/80", "to-neon-magenta/60"]
  },
  {
    name: "Nyx Solari",
    epithet: "Aurora Valkyrie",
    power: 96000,
    description: "Rides prismatic shockwaves, striking faster than light can react.",
    aura: ["from-neon-cyan/70", "to-purple-500/70"]
  }
];

export function CharacterRoster() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2
              data-text="IMPACT ROSTER"
              className="glitch-text font-action text-[clamp(2.5rem,6vw,4rem)] text-neon-cyan tracking-[0.35em] uppercase"
            >
              IMPACT ROSTER
            </h2>
            <p className="text-slate-200/80 max-w-xl mt-3">
              Legendary combatants drawn from fractured multiverses. Scan combat dossiers encoded in holo-ink and feel
              the kinetic tension of rivals poised to clash.
            </p>
          </div>
          <div className="flex gap-6 text-sm uppercase tracking-[0.4em] text-slate-300/70">
            <span className="flex items-center gap-2">
              <span className="h-3 w-12 bg-neon-cyan" /> Heroes
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-12 bg-neon-magenta" /> Nemeses
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {fighters.map((fighter, index) => (
            <motion.article
              key={fighter.name}
              className="panel-frame rounded-3xl overflow-hidden relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute -inset-20 blur-3xl bg-gradient-to-br ${fighter.aura.join(" ")} opacity-60`} />
              </div>

              <div className="relative p-10 flex flex-col gap-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="font-action text-4xl tracking-[0.2em] text-white leading-none">{fighter.name}</h3>
                    <p className="text-xs uppercase tracking-[0.6em] text-neon-yellow mt-2">{fighter.epithet}</p>
                  </div>
                  <motion.div
                    className="text-right"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p className="text-xs uppercase tracking-[0.5em] text-slate-200/60">Ki Output</p>
                    <p className="font-action text-3xl text-neon-cyan tracking-[0.45em]">{fighter.power.toLocaleString()}</p>
                  </motion.div>
                </div>

                <p className="text-slate-200/85 leading-relaxed">{fighter.description}</p>

                <div className="grid grid-cols-4 text-center gap-4 text-xs uppercase tracking-[0.4em] text-slate-300/60">
                  <div className="flex flex-col gap-2">
                    <span>Speed</span>
                    <div className="h-1 bg-slate-800">
                      <motion.div
                        className="h-full bg-neon-cyan"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + index * 6}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span>Force</span>
                    <div className="h-1 bg-slate-800">
                      <motion.div
                        className="h-full bg-neon-magenta"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${80 + index * 4}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span>Focus</span>
                    <div className="h-1 bg-slate-800">
                      <motion.div
                        className="h-full bg-neon-yellow"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${60 + index * 5}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span>Ki</span>
                    <div className="h-1 bg-slate-800">
                      <motion.div
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + index * 3}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
