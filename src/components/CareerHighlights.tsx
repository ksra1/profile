
import { TrendingUp, Shield, Users, Award, Lightbulb, Globe } from 'lucide-react';

const CareerHighlights = () => {
  const highlights = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI-Driven Marketing Innovation",
      description: "Leveraged AI to develop advanced marketing solutions, fostering an AI mindset across teams to implement automated content strategies using Adobe Experience Cloud, enhancing personalization and operational efficiency."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strategic P&L Management",
      description: "At V2Soft, managed P&L for a high-revenue eCommerce platform, driving 700% YOY growth through strategic Adobe Experience Cloud implementations, while overseeing $20M+ in project budgets."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Adobe Experience Cloud Expertise",
      description: "Led enterprise-scale digital transformations using Adobe Experience Manager, Adobe Analytics, Adobe Target, Adobe Campaign, and Adobe Experience Platform, optimizing customer experience and multi-solution use cases."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Executive Team Leadership",
      description: "Built and mentored global development and operations teams, fostering executive leadership and enabling high-performance delivery through Agile methodologies, DevOps, and SRE practices."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "High-Impact E-Commerce Solutions",
      description: "Spearheaded scalable commerce platforms for Ford Motor Company, exceeding SLAs/SLOs and supporting significant traffic surges during major product launches without additional capacity requirements."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Process Automation & Cost Efficiency",
      description: "Automated 90% of platform support and operations at Ford and APUS, reducing costs by 50% and increasing productivity by 80%, while developing systems that decreased content management costs by 60%."
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Highlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key achievements and innovations that demonstrate exceptional leadership and technical expertise
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
