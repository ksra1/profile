
import { Calendar, MapPin, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Engineering Manager",
      company: "Ford Motor Company",
      period: "May 2024 – Present",
      location: "Michigan, USA",
      description: "Lead enterprise-scale digital strategy and technology initiatives for Ford.com, leveraging Adobe Experience Manager (AEM) and AEM as a Cloud Service (AEMAACS) to architect next-generation web experiences that drive global business growth.",
      achievements: [
        "Spearhead migration to AEM as a Cloud Service (AEMAACS), improving system scalability by 40% and operational reliability",
        "Lead the implementation of Adobe Analytics and Adobe Target to drive data-driven personalization and customer journey optimization",
        "Pioneered the integration of Model Context Protocol (MCP) and autonomous agents to automate complex engineering workflows",
        "Optimize global content delivery strategies using AEM, resulting in enhanced user engagement across Ford.com",
        "Mentor team of 10+ engineers on modern front-end architectures and AI-driven development practices"
      ]
    },
    {
      title: "Senior Engineering Manager / Director of Engineering",
      company: "V2Soft Inc (Technology Consulting Firm)",
      period: "May 2016 – May 2024",
      location: "Michigan, USA",
      description: "Directed a team of 15 engineers to deliver scalable Adobe Experience Cloud solutions and enterprise eCommerce platforms, generating $45M+ in annual revenue through strategic technology implementations.",
      achievements: [
        "Implemented Adobe Workfront across global teams to streamline project management and resource allocation",
        "Developed and deployed custom AI agents to optimize P&L reporting and project metadata analysis",
        "Successfully delivered 20+ enterprise scale AEM implementations with 98% on-time delivery across automotive and retail sectors",
        "Drove 700% YOY growth in the digital services division through strategic Adobe and AI technology consulting",
        "Managed P&L for high-revenue platforms while overseeing $20M+ in project budgets and Adobe licensing strategies"
      ]
    },
    {
      title: "Web & Mobile App Development Lead",
      company: "American Public University System",
      period: "July 2013 – May 2016",
      location: "West Virginia, USA",
      description: "Led a team of 14 professionals to deliver innovative mobile and web applications, improving student enrollment by 15% through enhanced digital experiences and streamlined user interfaces.",
      achievements: [
        "Implemented targeted communication systems for enhanced student engagement",
        "Increased user adoption by 20% through personalized learning experiences and optimized workflows",
        "Designed offline learning platform for students with limited connectivity, expanding educational reach",
        "Established development standards and best practices that improved team efficiency by 35%"
      ]
    },
    {
      title: "Sr. Technical Consultant & Partner Consulting Lead",
      company: "Heiler (acquired by Informatica)",
      period: "December 2012 – June 2013",
      location: "Michigan, USA",
      description: "Delivered enterprise content management solutions and drove client digital transformation through strategic consulting and technical leadership expertise."
    },
    {
      title: "Associate Director of Technology",
      company: "MRM Worldwide",
      period: "May 2010 – December 2012",
      location: "Michigan, USA",
      description: "Led technology implementations for global marketing campaigns, delivering innovative digital solutions for enterprise clients across multiple industries and markets."
    },
    {
      title: "Software Engineering Manager",
      company: "Analysts International Corporation",
      period: "Oct 2008 – Apr 2010",
      location: "Michigan, USA",
      description: "Led technology teams and managed application sustainment projects."
    },
    {
      title: "Systems Analyst",
      company: "Tech Mahindra (formerly Satyam Computer Services Ltd) ",
      period: "Jun 2004 – Sep 2008",
      location: "Michigan, USA",
      description: "Implemented software management systems for portfolio management."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive journey through leadership roles in engineering management and technical innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-blue-200"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-grow bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                  
                  {exp.achievements && (
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
