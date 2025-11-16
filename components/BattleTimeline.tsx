"use client";

import { motion } from "framer-motion";

const events = [
  {
    time: "00:07",
    tag: "INITIATE",
    title: "Aurora gate fractures",
    description: "Temporal rift blossoms above Nova City coastline. Combatants anchor reality with ki tethers."
  },
  {
    time: "00:29",
    tag: "SURGE",
    title: "Kairos counter-rotates timeline",
    description: "Chrono Saber rewinds microseconds, nullifying Axiom's plasma volley mid-flight."
  },
  {
    time: "00:54",
    tag: "OVERDRIVE",
    title: "Nyx ignites Valkyrie Array",
    description: "Aurora Valkyrie channels six spectral wings, amplifying Tsukiko's gravitational resonance."
  },
  {
    time: "01:12",
    tag: "CRITICAL",
    title: "Plasma Titan detonates starcore gauntlet",
    description: "Shockwave splinters moonlight, carving a vortex that drags the arena into subspace."
  }
];

export function BattleTimeline() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-4 mb-12">
          <p className="text-xs uppercase tracking-[0.6em] text-neon-yellow">Combat Log</p>
          <h2 data-text="HYPER ARC" className="glitch-text font-action text-[clamp(2.5rem,5vw,3.6rem)] text-white">
            HYPER ARC
          </h2>
          <p className="max-w-2xl text-slate-200/80">
            Recorded feed from the Zenith Showdown broadcast. Each spike captures the high-energy cadence of classic 90s
            anime battle escalation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-6 md:left-1/2 border-l border-dashed border-white/10" />
          <div className="space-y-10">
            {events.map((event, index) => {
              const isRight = index % 2 === 0;
              return (
                <motion.div
                  key={event.time}
                  className={`relative flex flex-col md:flex-row ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div
                    className={`md:w-1/2 px-8 md:px-12 ${isRight ? "md:pl-20 md:pr-0" : "md:pr-20 md:pl-0"} relative`}
                  >
                    <div className="absolute left-2 md:left-auto md:right-20 top-6 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_20px_rgba(73,245,247,0.9)]" />
                    <div className="panel-frame rounded-3xl p-8 bg-slate-900/60">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.5em] text-slate-300/70">
                        <span>{event.tag}</span>
                        <span className="text-neon-magenta">{event.time}</span>
                      </div>
                      <h3 className="font-action text-3xl tracking-[0.3em] text-white mt-4 uppercase">
                        {event.title}
                      </h3>
                      <p className="text-slate-200/80 mt-4 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
