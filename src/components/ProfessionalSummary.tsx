
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import { fadeUpContainer } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';

const ProfessionalSummary = () => {
  return (
    <section id="summary" className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Professional Summary</h2>

          <motion.div
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ perspective: 1200 }}
          >
            {/* Headline tile */}
            <div className="col-span-2 row-span-2">
              <TiltCard className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 text-white p-8 flex flex-col justify-between shadow-xl shadow-slate-900/20">
                <p className="text-2xl md:text-3xl font-bold leading-snug">
                  Engineering leader who pairs deep AEM &amp; Adobe technical depth with proven team-building and
                  delivery leadership - for Fortune 500 and global brands.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-slate-200">
                    Adobe Certified
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-slate-200">
                    AI Agents (MCP · RAG)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-slate-200">
                    Rockstar Finalist
                  </span>
                </div>
              </TiltCard>
            </div>

            {/* Years */}
            <TiltCard className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-center shadow-sm">
              <div className="text-4xl font-extrabold text-slate-900">22+</div>
              <div className="text-sm text-slate-500 mt-1">Years in AEM &amp; Digital Leadership</div>
            </TiltCard>

            {/* Growth */}
            <TiltCard className="rounded-3xl bg-sky-600 text-white p-6 flex flex-col justify-center shadow-xl shadow-sky-900/20">
              <div className="text-4xl font-extrabold">700%</div>
              <div className="text-sm text-sky-100 mt-1">YoY eCommerce Growth Driven</div>
            </TiltCard>

            {/* Projects */}
            <TiltCard className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-center shadow-sm">
              <div className="text-4xl font-extrabold text-slate-900">9+</div>
              <div className="text-sm text-slate-500 mt-1">Full-Cycle AEMaaCS Projects</div>
            </TiltCard>

            {/* AI-first delivery */}
            <TiltCard className="rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-center shadow-sm">
              <Bot className="w-7 h-7 text-sky-600 mb-2" />
              <div className="font-semibold text-slate-900 leading-snug">AI-First Delivery</div>
              <div className="text-sm text-slate-600 mt-1">Agents from Jira ticket to shipped code</div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
