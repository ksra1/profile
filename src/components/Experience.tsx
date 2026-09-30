
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { fadeUpContainer, fadeUpItem } from '@/lib/motion';

const featuredExperiences = [
  {
    title: "Sr.II Technical Manager, Edge Security & CMS Platforms",
    company: "Akamai Technologies",
    period: "May 2026 – Present",
    location: "Michigan, USA",
    description: "Lead edge security and content-delivery strategy for enterprise clients spanning food service, retail/commerce, transportation, and manufacturing, applying deep platform and headless architecture expertise, including AEM and Adobe Experience Cloud.",
    achievements: [
      "Design and develop edge compute applications using Akamai Functions to accelerate content delivery, enforce security policies, and optimize performance for CMS- and commerce-driven digital experiences",
      "Serve as the technical bridge between edge infrastructure and CMS/commerce platform teams, advising on caching strategy, API/webhook integrations, and reliability engineering (SLOs, monitoring, incident response)",
      "Apply platform and digital-experience depth, including AEM and Adobe Experience Cloud, to edge engagements, helping enterprise clients harden and scale headless and hybrid content architectures against performance and security risk",
      "Building an AI engine that automates content offloading to NetStorage by object type and duration, optimizing storage cost and cache efficiency for high-traffic edge-delivered properties"
    ]
  },
  {
    title: "Group Director, CMS & Adobe Experience Cloud",
    company: "DEPT Agency",
    period: "Feb 2026 – May 2026",
    location: "Michigan, USA",
    description: "Owned platform and digital-experience strategy across a portfolio of enterprise client engagements, spanning headless CMS and Adobe Experience Cloud (AEM, Edge Delivery Services, Workfront, AJO, CJA, Adobe Analytics).",
    achievements: [
      "Directed headless commerce delivery for global clients including PwC, Oracle, and OpenAI, connecting AEM content architecture with Shopify storefronts for rapid, multi-channel digital experiences",
      "Led cross-functional teams and agency-client stakeholder relationships to deliver Adobe Experience Cloud programs spanning content architecture, personalization (Target, AJO), and analytics (CJA)",
      "Established governance and best practices for headless CMS and commerce integrations across AEM and Shopify, accelerating platform delivery for enterprise marketing and commerce teams",
      "Extended the Jira-driven AI agent factory across client engagements, built an AI engine that reads Figma files or existing sites to generate Adobe Edge Delivery Services building blocks, and built a RAG-based chat experience using vectorized site content"
    ]
  },
  {
    title: "Sr. Engineering Manager",
    company: "Ford Motor Company",
    period: "May 2024 – Feb 2026",
    location: "Michigan, USA",
    description: "Led engineering for global marketing platforms, driving technical design, work planning, and delivery for an AEM as a Cloud Service implementation across Sites, Assets, Forms, and Edge Delivery Services.",
    achievements: [
      "Achieved 40% scalability improvement and 95% on-time MVP delivery across AEM as a Cloud Service rollouts",
      "Managed a team of engineers and architects, delivering solution design, platform selection, and thought leadership, serving as subject matter expert for the Adobe technology vertical",
      "Designed headless CMS solutions, including component development, template design, and workflows, with AEM as the platform and integrations across Adobe Target, AJO, and CJA for decoupled content delivery",
      "Built and managed CI/CD pipelines with Docker, Kubernetes, and Jenkins, implementing performance monitoring and alerting for high availability and reliability",
      "Mentored Solution Architects and technical leads, offering architectural tradeoffs to stakeholders and driving adoption of agile methodologies and continuous delivery",
      "Built a factory of AI agents (via Model Context Protocol) that read Jira tickets and implement the frontend, backend, analytics-tracking, and test coverage each calls for, including AI-generated test cases, self-healing scripts, and visual regression checks"
    ]
  },
  {
    title: "Senior Engineering Manager / AEM Lead Consultant",
    company: "V2Soft Inc",
    period: "May 2016 – May 2024",
    location: "Michigan, USA",
    description: "Directed engineering delivery for Fortune 500 retail and automotive clients in an agency/client-service environment, leading presales scoping, technical design, estimation, and delivery for full-cycle AEM as a Cloud Service projects.",
    achievements: [
      "Drove up to 700% YoY eCommerce growth through strategic technical delivery and presales leadership",
      "Enforced architectural standards while providing expert guidance on AEM architecture, headless capabilities (Java, OSGi, REST/GraphQL), content migration, and DAM workflows across enterprise engagements",
      "Developed CI/CD deployment pipelines and automation strategies using Kubernetes, Docker, Jenkins, and Maven, establishing performance monitoring, security, and alerting for reliable, compliant solutions",
      "Mentored teams of Solution Architects, aligning technology solutions with evolving business needs and promoting agile, rapid-iteration delivery"
    ]
  }
];

const earlierCareer = [
  {
    title: "Web & Mobile App Development Lead",
    company: "American Public University System",
    period: "July 2013 – May 2016",
    description: "Led AEM Sites and Forms architecture and integrations with Adobe Analytics for personalized content delivery to 100,000+ users, enhancing engagement by 15%."
  },
  {
    title: "Senior Technical Consultant",
    company: "Heiler (acquired by Informatica)",
    period: "December 2012 – June 2013",
    description: "Delivered Java/REST-based AEM consulting, leading stakeholder workshops for marketing transformation solutions."
  },
  {
    title: "Associate Director of Technology",
    company: "MRM Worldwide",
    period: "May 2010 – December 2012",
    description: "Directed AEM Sites and Java-based projects for marketing clients, managing agile teams and integrations with Analytics/Target for personalized experiences."
  },
  {
    title: "Software Engineering Manager",
    company: "Analysts International Corporation",
    period: "Oct 2008 – Apr 2010",
    description: "Managed Java/AEM sustainment projects, improving reliability by 20% and supporting marketing content operations with agile methodologies."
  },
  {
    title: "Systems Analyst",
    company: "Tech Mahindra (formerly Satyam Computer Services Ltd)",
    period: "Jun 2004 – Sep 2008",
    description: "Provided technical expertise for early AEM and Java implementations, aligning solutions with client marketing transformation goals."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 mb-3">
            Career
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive journey through leadership roles in engineering management and technical innovation
          </p>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {featuredExperiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              className="relative rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-300 p-6 md:p-8"
            >
              {index === 0 && (
                <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-semibold shadow-md shadow-indigo-900/30">
                  Current
                </span>
              )}
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                  <h4 className="text-xl text-indigo-600 font-semibold">{exp.company}</h4>
                </div>
                <div className="text-sm shrink-0">
                  <div className="flex items-center text-slate-600 mb-1 justify-end">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-slate-600 justify-end">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 text-sm md:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Earlier career - collapsed by default */}
          <motion.div
            variants={fadeUpItem}
            className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden"
          >
            <Accordion type="single" collapsible>
              <AccordionItem value="earlier-career" className="border-none">
                <AccordionTrigger className="px-6 md:px-8 py-5 hover:no-underline [&>svg]:w-5 [&>svg]:h-5">
                  <div className="text-left">
                    <span className="text-lg font-semibold text-slate-900">Earlier Career</span>
                    <span className="block text-sm text-slate-500 mt-1">
                      2004 – 2016 · American Public University System, Heiler, MRM Worldwide, Analysts International,
                      Tech Mahindra
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8">
                  <div className="space-y-5 pt-2">
                    {earlierCareer.map((exp, index) => (
                      <div key={index} className={index !== 0 ? 'pt-5 border-t border-slate-100' : ''}>
                        <div className="flex flex-wrap justify-between items-baseline gap-x-3 gap-y-1 mb-1">
                          <h4 className="font-semibold text-slate-900">
                            {exp.title} · <span className="text-indigo-600">{exp.company}</span>
                          </h4>
                          <span className="text-sm text-slate-500 shrink-0">{exp.period}</span>
                        </div>
                        <p className="text-sm text-slate-600">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
