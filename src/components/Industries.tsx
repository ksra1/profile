
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
    <section id="industries" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 mb-3">
            Reach
          </span>
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
              className="group rounded-2xl border border-slate-200 bg-white px-4 py-8 flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600 flex items-center justify-center group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:text-white transition-colors duration-300">
                {icon}
              </span>
              <span className="font-semibold text-slate-800">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
