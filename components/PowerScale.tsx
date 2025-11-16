"use client";

import { motion } from "framer-motion";

const battleMetrics = [
  { label: "Ki Surge", value: 92, accent: "bg-neon-cyan" },
  { label: "Impact Force", value: 88, accent: "bg-neon-magenta" },
  { label: "Combo Velocity", value: 94, accent: "bg-neon-yellow" },
  { label: "Focus Lock", value: 81, accent: "bg-white" }
];

export function PowerScale() {
  return (
    <section className="py-20 bg-gradient-to-b from-midnight/40 to-aurora/60">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="panel-frame rounded-3xl p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/10 pb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-neon-cyan">Battle Telemetry</p>
              <h2
                data-text="POWER STRATA"
                className="glitch-text font-action text-[clamp(2.5rem,6vw,4rem)] text-white tracking-[0.35em]"
              >
                POWER STRATA
              </h2>
            </div>
            <div className="text-sm uppercase tracking-[0.4em] text-slate-200/60">
              Data Stream ID: <span className="text-neon-magenta">ZEN-902XL</span>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {battleMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="relative bg-slate-900/40 border border-white/10 rounded-2xl p-6 overflow-hidden"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              >
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <div className="absolute -inset-10 bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
                </div>
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.4em] text-slate-300/80">{metric.label}</p>
                    <motion.span
                      className="font-action text-3xl text-neon-cyan tracking-[0.3em]"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: index * 0.3 }}
                    >
                      {metric.value}
                    </motion.span>
                  </div>
                  <div className="h-3 bg-slate-800/60 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${metric.accent}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="text-xs text-slate-300/70 uppercase tracking-[0.3em]">
                    Threshold breach in {Math.round((100 - metric.value) * 0.44)} sec
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
