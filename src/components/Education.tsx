
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { fadeUpContainer } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';

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

const Education = () => {
  return (
    <section id="education" className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic foundation combining technical engineering expertise with strategic business management
          </p>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
          style={{ perspective: 1200 }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {education.map((edu, index) => (
              <TiltCard key={index} className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white">
                    {edu.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-sky-600 font-semibold mb-2">{edu.field}</p>
                    <p className="text-slate-700 font-medium mb-1">{edu.school}</p>
                    <p className="text-slate-600 mb-2">{edu.location}</p>
                    <p className="text-slate-500 text-sm">{edu.period}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <TiltCard
            tilt={4}
            className="rounded-3xl bg-sky-600 text-white p-6 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
          >
            <span className="font-semibold whitespace-nowrap">Continuous Learning:</span>
            <p className="text-sky-100 leading-snug">
              Regular certification in Adobe Experience Cloud, Akamai technologies, cloud platforms, and executive
              leadership programs.
            </p>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
