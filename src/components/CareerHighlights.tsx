
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
    <section id="highlights" className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
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
            <TiltCard className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 text-white p-8 flex flex-col justify-between shadow-xl shadow-slate-900/20">
              <div>
                <Bot className="w-9 h-9 text-sky-400 mb-4" />
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
              className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-center shadow-sm"
            >
              <div className="text-sky-600 mb-3">{highlight.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-1 leading-snug">{highlight.title}</h3>
              <p className="text-sm text-slate-600 leading-snug">{highlight.description}</p>
            </TiltCard>
          ))}

          {/* Footer credentials strip */}
          <TiltCard
            tilt={4}
            className="col-span-2 lg:col-span-4 rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-sm font-semibold text-slate-900 mr-2">22+ Years, Recognized Expertise:</span>
            {credentials.map((credential, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm"
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
