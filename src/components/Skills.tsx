
import { motion } from 'framer-motion';
import { Code, Users, Shield, Cloud, Database, Zap, Bot, ShoppingCart, Briefcase } from 'lucide-react';
import { fadeUpContainer } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';

const skillCategories = [
  {
    icon: <Database className="w-7 h-7" />,
    title: "AEM & Headless CMS",
    tone: "light",
    skills: [
      "Architecture & Component Development",
      "Template Design & Workflows",
      "Permissions & Publishing Models",
      "AEM as a Cloud Service",
      "Sites, Assets, Forms",
      "Edge Delivery Services",
      "AEM Headless / GraphQL"
    ]
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Adobe Experience Cloud",
    tone: "dark",
    skills: [
      "Adobe Target & Analytics",
      "Adobe Journey Optimizer (AJO)",
      "Customer Journey Analytics (CJA)",
      "Adobe Experience Platform (AEP)",
      "Launch / Tags",
      "Adobe Campaign & Workfront"
    ]
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: "AI & Agentic Systems",
    tone: "accent",
    skills: [
      "LLM Agent Development & Orchestration",
      "Ticket-to-Implementation Automation",
      "AI-Driven Automated Testing",
      "Retrieval-Augmented Generation (RAG)",
      "Model Context Protocol (MCP)",
      "AI-Driven Code & Content-Model Generation"
    ]
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "Headless Commerce Integration",
    tone: "light",
    skills: ["Shopify (Headless Commerce)", "Content Modeling", "Taxonomies & Segmentation", "REST/GraphQL APIs", "Webhooks"]
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "Web & Frontend Architecture",
    tone: "light",
    skills: [
      "React/Next.js Integration",
      "Micro-Frontends",
      "RESTful/GraphQL APIs & Microservices",
      "Core Web Vitals & Performance",
      "Security Best Practices & SEO"
    ]
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "Backend, DevOps & Cloud",
    tone: "light",
    skills: [
      "Java/J2EE, Spring Boot",
      "Apache Sling, OSGi",
      "CI/CD (Jenkins, Maven, Docker, Kubernetes)",
      "AWS, Google Cloud",
      "Observability & Monitoring"
    ]
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Edge & Platform Reliability",
    tone: "light",
    skills: ["Akamai Edge Functions", "Spin (WebAssembly)", "CDN & Caching Strategy", "Edge Security", "SLO/SLA Ownership & Incident Response"]
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "People & Vendor Leadership",
    tone: "light",
    skills: [
      "Team Building & Hiring",
      "Coaching & Performance Management",
      "Vendor/Agency Management",
      "Agile/Scrum",
      "Discovery & Design Workshops",
      "Stakeholder Communication"
    ]
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Platform Strategy & MarTech",
    tone: "light",
    skills: ["Roadmap Ownership", "Presale Scoping & Estimation", "Technical Design", "eCommerce Integrations", "Content Supply Chain", "Personalization"]
  }
];

const toneClasses: Record<string, string> = {
  light: "bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 hover:border-indigo-200",
  dark: "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white shadow-xl shadow-indigo-950/30",
  accent: "bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-xl shadow-indigo-900/30"
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 mb-3">
            Toolkit
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technical and leadership capabilities developed through two decades of enterprise experience
          </p>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1200 }}
        >
          {skillCategories.map((category, index) => {
            const isLight = category.tone === 'light';
            return (
              <TiltCard key={index} tilt={6} className={`rounded-3xl p-6 transition-shadow duration-300 ${toneClasses[category.tone]}`}>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                    isLight ? 'bg-indigo-50 text-indigo-600' : 'bg-white/15 text-white'
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={
                        isLight
                          ? 'bg-slate-50 border border-slate-200 rounded-full px-3 py-1 text-sm text-slate-700'
                          : 'bg-white/10 border border-white/20 rounded-full px-3 py-1 text-sm text-white/90'
                      }
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
