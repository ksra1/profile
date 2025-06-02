
import { Calendar, MapPin, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Engineering Manager",
      company: "Ford Motor Company",
      period: "May 2024 – Present",
      location: "Michigan, USA",
      description: "Lead enterprise-scale digital strategy engagements for Ford.com, architecting and delivering next-generation solutions using Adobe Experience Manager (AEM), Adobe Analytics, Adobe Target, and Adobe Experience Platform.",
      achievements: [
        "Spearhead cloud migration of AEM infrastructure to Adobe Cloud Services, improving scalability by 40% and reliability by 30%",
        "Optimize AEM authoring workflows, reducing page deployment time by 25%",
        "Achieve 95% project success rate for Adobe Experience Cloud implementations"
      ]
    },
    {
      title: "Senior Engineering Manager / Director of Engineering",
      company: "V2Soft Inc",
      period: "May 2016 – May 2024",
      location: "Michigan, USA",
      description: "Directed a team of 15 engineers to deliver scalable eCommerce platforms using Adobe Experience Manager, Adobe Analytics, Adobe Target, and Adobe Campaign, generating $45M+ in annual revenue.",
      achievements: [
        "Achieved 98% on-time delivery and 700% YOY growth through strategic Adobe Experience Cloud implementations",
        "Developed standard methodologies for Adobe Experience Cloud implementations",
        "Achieved 90% team retention while meeting utilization and margin targets"
      ]
    },
    {
      title: "Web & Mobile App Development Lead",
      company: "American Public University System",
      period: "July 2013 – May 2016",
      location: "West Virginia, USA",
      description: "Led a team of 14 professionals to deliver mobile and web applications using Adobe Experience Manager and Adobe Analytics, improving student enrollment by 15%.",
      achievements: [
        "Implemented Adobe Campaign for targeted student communications",
        "Increased user adoption by 20% through personalized learning experiences",
        "Designed offline asynchronous learning platform for students with limited connectivity"
      ]
    },
    {
      title: "Sr. Technical Consultant & Partner Consulting Lead",
      company: "Heiler (acquired by Informatica)",
      period: "December 2012 – June 2013",
      location: "Michigan, USA",
      description: "Delivered Adobe-based content management solutions, driving client digital transformation through strategic consulting and technical expertise."
    },
    {
      title: "Associate Director of Technology",
      company: "MRM Worldwide",
      period: "May 2010 – December 2012",
      location: "Michigan, USA",
      description: "Led Adobe Experience Manager implementations for global marketing campaigns, delivering innovative digital marketing solutions for enterprise clients."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive journey through leadership roles in digital transformation and technical innovation
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
