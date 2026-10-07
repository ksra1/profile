
import { motion } from 'framer-motion';
import { Github, FileDown, ArrowUpRight } from 'lucide-react';
import { fadeUpContainer, fadeUpItem } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';

const links = [
  {
    icon: <Github className="w-7 h-7" />,
    title: "GitHub",
    description: "Code, experiments, and projects.",
    cta: "View profile",
    href: "https://github.com/ksra1"
  },
  {
    icon: <FileDown className="w-7 h-7" />,
    title: "Resume",
    description: "Full work history as a downloadable document.",
    cta: "Download PDF",
    href: "/profile/resume/Sravan-Kollapudi-Resume.pdf",
    download: true
  }
];

const Work = () => {
  return (
    <section id="work" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 mb-3">
            Beyond the Resume
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Talks, Writing &amp; Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Where to see the work directly, with more to come.
          </p>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6"
          style={{ perspective: 1200 }}
        >
          {links.map((link) => (
            <TiltCard
              key={link.title}
              glowColor="rgba(79,70,229,0.10)"
              className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 hover:border-indigo-200 transition-shadow duration-300"
            >
              <a
                href={link.href}
                target={link.download ? undefined : '_blank'}
                rel={link.download ? undefined : 'noopener noreferrer'}
                download={link.download}
                className="flex h-full flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  {link.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{link.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{link.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                  {link.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </TiltCard>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 mt-8"
        >
          Talks and articles on AI agent factories and platform engineering coming soon.
        </motion.p>
      </div>
    </section>
  );
};

export default Work;
