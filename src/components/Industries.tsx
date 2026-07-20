
import { motion } from 'framer-motion';
import { Car, Factory, Cpu, ShoppingBag, Briefcase, Bot, Shield, GraduationCap } from 'lucide-react';
import { fadeUpContainer, fadeUpItem } from '@/lib/motion';

const industries = [
  { icon: <Car className="w-6 h-6" />, label: 'Automotive' },
  { icon: <Factory className="w-6 h-6" />, label: 'Manufacturing' },
  { icon: <Cpu className="w-6 h-6" />, label: 'Technology' },
  { icon: <ShoppingBag className="w-6 h-6" />, label: 'Retail' },
  { icon: <Briefcase className="w-6 h-6" />, label: 'Consulting' },
  { icon: <Bot className="w-6 h-6" />, label: 'AI' },
  { icon: <Shield className="w-6 h-6" />, label: 'Insurance' },
  { icon: <GraduationCap className="w-6 h-6" />, label: 'Education' }
];

const Industries = () => {
  return (
    <section id="industries" className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Enterprise engagements spanning automotive, retail, technology, insurance, and higher education —
            delivering for Fortune 500 brands and global consultancies.
          </p>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {industries.map(({ icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUpItem}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-8 flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-sky-600">{icon}</span>
              <span className="font-semibold text-slate-800">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
