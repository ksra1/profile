
import { TrendingUp, Shield, Users, Award, Lightbulb, Globe, Bot } from 'lucide-react';

const CareerHighlights = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Building & People Leadership",
      description: "Built and led engineering and architecture teams across agency and enterprise environments — owning hiring, coaching, and performance management — while staying accountable for end-to-end technical delivery."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Agent Factories & Automation",
      description: "Architected AI agent factories that turn Jira tickets into working frontend, backend, analytics, and test implementations, plus engines that generate AEM Content Fragment models, GraphQL endpoints, and Edge Delivery Services building blocks from source designs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AEM & Adobe Experience Cloud Depth",
      description: "Hands-on architecture and delivery across AEM as a Cloud Service, Edge Delivery Services, and Adobe Experience Cloud (Target, Analytics, AJO, CJA, AEP) for Fortune 500 and global brands, including 9+ full-cycle AEMaaCS projects."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Vendor & Stakeholder Management",
      description: "Trusted vendor and agency relationship manager with a strong record of SLA/SLO ownership and incident response, translating business goals into scalable technical solutions and driving up to 700% YoY eCommerce growth."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Headless Commerce & Edge Strategy",
      description: "Directed headless commerce integrations connecting AEM with Shopify storefronts and React/Next.js front ends, extending most recently into edge delivery, caching, and security strategy with Akamai."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "22+ Years, Recognized Expertise",
      description: "Adobe Certified AEM Developer and 15+ year AEM consultant; Adobe Rockstar finalist and 9-time Adobe Summit attendee, with a track record spanning automotive, retail, education, and technology sectors."
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key achievements demonstrating exceptional engineering leadership and strategic technology management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerHighlights;
