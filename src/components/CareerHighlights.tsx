
import { TrendingUp, Shield, Users, Award, Lightbulb, Globe } from 'lucide-react';

const CareerHighlights = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Team Leadership",
      description: "Built and mentored global development teams of 15+ engineers across multiple time zones, fostering technical excellence and achieving 98% on-time project delivery while maintaining 90% team retention rates."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strategic P&L Management",
      description: "Managed P&L for high-revenue eCommerce platforms, driving 700% YOY growth through strategic technology implementations while overseeing $20M+ in project budgets and achieving exceptional business outcomes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Digital Transformation",
      description: "Led enterprise-scale digital transformation initiatives for Fortune 500 companies, architecting scalable solutions that optimize customer experience and drive measurable business value across multiple technology platforms."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Technical Innovation Leadership",
      description: "Spearheaded the adoption of cutting-edge technologies including cloud-native architectures, microservices, and AI-driven solutions, improving system performance by 40% and operational efficiency by 80%."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "High-Impact Project Delivery",
      description: "Successfully delivered complex enterprise projects for major automotive and educational institutions, exceeding SLAs/SLOs and supporting significant traffic surges during critical business events without service disruption."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Process Automation & Efficiency",
      description: "Automated 90% of platform operations and support processes, reducing operational costs by 50% while increasing team productivity by 80%, and implementing systems that decreased overall management overhead by 60%."
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
