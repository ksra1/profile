
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Users, Lightbulb, Bot } from 'lucide-react';
import { fadeUpContainer } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';

const smallHighlights = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Building & People Leadership",
    description: "Hiring, coaching, and performance management for engineering and architecture teams."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "AEM & Adobe Experience Cloud Depth",
    description: "9+ full-cycle AEMaaCS projects across Target, Analytics, AJO, CJA, and AEP."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Vendor & Stakeholder Management",
    description: "SLA/SLO ownership and incident response for Fortune 500 engagements."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Headless Commerce & Edge Strategy",
    description: "AEM + Shopify + React/Next.js, extended into edge delivery with Akamai."
  }
];

const credentials = [
  "Adobe Certified AEM Developer",
  "15+ Year AEM Consultant",
  "Adobe Rockstar Finalist",
  "9x Adobe Summit Attendee"
];

const CareerHighlights = () => {
  return (
    <section id="highlights" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.08),transparent_45%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 mb-3">
            Impact
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Highlights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Key achievements demonstrating exceptional engineering leadership and strategic technology management
          </p>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ perspective: 1200 }}
        >
          {/* Featured tile */}
          <div className="col-span-2 row-span-2">
            <TiltCard className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white p-8 flex flex-col justify-between shadow-xl shadow-indigo-950/30 overflow-hidden">
              <div className="absolute -bottom-20 -left-16 w-56 h-56 bg-indigo-600/25 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-4 shadow-lg shadow-indigo-900/40">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">AI Agent Factories &amp; Automation</h3>
                <p className="text-slate-300 leading-relaxed">
                  Architected AI agent factories that turn Jira tickets into working frontend, backend, analytics,
                  and test implementations — plus engines that generate AEM Content Fragment models, GraphQL
                  endpoints, and Edge Delivery Services building blocks from source designs.
                </p>
              </div>
            </TiltCard>
          </div>

          {smallHighlights.map((highlight, index) => (
            <TiltCard
              key={index}
              className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-center shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 hover:border-indigo-200 transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                {highlight.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1 leading-snug">{highlight.title}</h3>
              <p className="text-sm text-slate-600 leading-snug">{highlight.description}</p>
            </TiltCard>
          ))}

          {/* Footer credentials strip */}
          <TiltCard
            tilt={4}
            className="col-span-2 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-sm font-semibold text-slate-900 mr-2">22+ Years, Recognized Expertise:</span>
            {credentials.map((credential, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-indigo-100 bg-indigo-50/60 text-sm font-medium text-indigo-900 shadow-sm hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
              >
                {credential}
              </span>
            ))}
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerHighlights;
