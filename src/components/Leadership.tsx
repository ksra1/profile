
import { motion } from 'framer-motion';
import { UserCheck, Users2, AlertTriangle } from 'lucide-react';
import { fadeUpContainer } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';

const pillars = [
  {
    icon: <UserCheck className="w-7 h-7" />,
    title: "Hiring Bar",
    description:
      "I hire for ownership and adaptability over tool-specific experience: can this person take a problem from an ambiguous ticket to a shipped, monitored solution, not just execute a spec."
  },
  {
    icon: <Users2 className="w-7 h-7" />,
    title: "Team Structure",
    description:
      "Small, accountable pods with a clear technical owner per platform area, paired with regular 1:1 coaching and performance management so growth is explicit, not incidental."
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: "Incident Culture",
    description:
      "SLO- and SLA-driven reliability, blameless postmortems, and incident response built into the team's rhythm, not bolted on after an outage."
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(99,102,241,0.06),transparent_45%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 mb-3">
            Leadership
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How I Lead</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The operating principles behind how I hire, structure teams, and run reliability, whether the team is
            three people or thirty.
          </p>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6"
          style={{ perspective: 1200 }}
        >
          {pillars.map((pillar, index) => (
            <TiltCard
              key={index}
              glowColor="rgba(79,70,229,0.10)"
              className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 hover:border-indigo-200 transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
