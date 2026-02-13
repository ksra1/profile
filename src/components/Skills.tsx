
import { Code, Users, Shield, Cloud, Database, Zap, Bot } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI & Agentic Systems",
      skills: [
        "Model Context Protocol (MCP)",
        "Agentic Workflows & Multi-Agent Systems",
        "Large Language Models (LLMs)",
        "Prompt Engineering",
        "RAG (Retrieval-Augmented Generation)",
        "LangChain & AutoGen",
        "AI-Driven Automation"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Management",
      skills: [
        "Program Management",
        "Technical Pre-Sales",
        "Account Strategy",
        "Global Team Leadership",
        "Client Relationship Management",
        "Cross-Functional Collaboration",
        "Agile Methodologies"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Akamai & Performance",
      skills: [
        "API Security (WAF, API Gateways)",
        "Web Performance (DNS, HTTP/HTTPS)",
        "SSL/TLS Configuration",
        "CDN Optimization",
        "RESTful APIs",
        "GraphQL",
        "API Management"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Adobe Experience Cloud",
      skills: [
        "Adobe Experience Manager (AEM)",
        "Edge Delivery Services",
        "Adobe GenStudio & Firefly",
        "Adobe Workfront",
        "Adobe Experience Platform (AEP)",
        "Adobe Journey Optimizer (AJO)",
        "Adobe Analytics & Target",
        "Adobe Audience Manager",
        "Adobe Marketo Engage"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & Infrastructure",
      skills: [
        "AWS, Azure, GCP",
        "Kubernetes & Docker",
        "DevOps (CI/CD, Terraform)",
        "Jenkins & Git",
        "Serverless Architecture",
        "Microservices",
        "Infrastructure as Code"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Expertise",
      skills: [
        "Java & Spring Boot",
        "Python & JavaScript",
        "Bash Scripting",
        "Apache & Nginx",
        "Maven & Gradle",
        "JMeter & Selenium",
        "Postman & API Testing"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Analytics & Monitoring",
      skills: [
        "Splunk",
        "Dynatrace",
        "New Relic",
        "Grafana",
        "Application Performance Monitoring",
        "Log Analysis",
        "Performance Tuning"
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
