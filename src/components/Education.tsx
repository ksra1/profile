
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      field: "Information Systems, IT Privacy, and Operations Management",
      school: "Oakland University",
      location: "Rochester, Michigan",
      period: "2011 – 2013",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Bachelor of Technology",
      field: "Mechanical Engineering",
      school: "Acharya Nagarjuna University",
      location: "India",
      period: "2000 – 2004",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation combining technical engineering expertise with strategic business management
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  {edu.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">{edu.field}</p>
                  <p className="text-gray-700 font-medium mb-1">{edu.school}</p>
                  <p className="text-gray-600 mb-2">{edu.location}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning & Professional Development</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Throughout my career, I have maintained a commitment to continuous learning, staying current with 
              emerging technologies, industry best practices, and leadership methodologies. This includes regular 
              certification in Adobe Experience Cloud solutions, Akamai technologies, cloud platforms, and 
              executive leadership programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
