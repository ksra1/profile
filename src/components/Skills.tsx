
import { Code, Users, Shield, Cloud, Database, Zap, Bot, ShoppingCart, Briefcase } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "AEM & Headless CMS",
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
      icon: <Shield className="w-8 h-8" />,
      title: "Adobe Experience Cloud",
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
      icon: <Bot className="w-8 h-8" />,
      title: "AI & Agentic Systems",
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
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Headless Commerce Integration",
      skills: [
        "Shopify (Headless Commerce)",
        "Content Modeling",
        "Taxonomies & Segmentation",
        "REST/GraphQL APIs",
        "Webhooks"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web & Frontend Architecture",
      skills: [
        "React/Next.js Integration",
        "Micro-Frontends",
        "RESTful/GraphQL APIs & Microservices",
        "Core Web Vitals & Performance",
        "Security Best Practices & SEO"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Backend, DevOps & Cloud",
      skills: [
        "Java/J2EE, Spring Boot",
        "Apache Sling, OSGi",
        "CI/CD (Jenkins, Maven, Docker, Kubernetes)",
        "AWS, Google Cloud",
        "Observability & Monitoring"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Edge & Platform Reliability",
      skills: [
        "Akamai Edge Functions",
        "Spin (WebAssembly)",
        "CDN & Caching Strategy",
        "Edge Security",
        "SLO/SLA Ownership & Incident Response"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "People & Vendor Leadership",
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
      icon: <Briefcase className="w-8 h-8" />,
      title: "Platform Strategy & MarTech",
      skills: [
        "Roadmap Ownership",
        "Presale Scoping & Estimation",
        "Technical Design",
        "eCommerce Integrations",
        "Content Supply Chain",
        "Personalization"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical and leadership capabilities developed through two decades of enterprise experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white rounded-full px-3 py-1 text-sm text-gray-700 inline-block mr-2 mb-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
