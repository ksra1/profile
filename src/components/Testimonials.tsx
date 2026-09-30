
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeUpContainer } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';

// Add real quotes here from managers, peers, or direct reports. Each entry renders as a card below;
// the section stays hidden from Index.tsx until this has at least one entry.
interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  // {
  //   quote: "Quote here.",
  //   name: "Full Name",
  //   title: "Title, Company"
  // }
];

const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 mb-3">
            Trusted By
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Colleagues Say</h2>
        </div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6"
          style={{ perspective: 1200 }}
        >
          {testimonials.map((t, index) => (
            <TiltCard
              key={index}
              glowColor="rgba(79,70,229,0.10)"
              className="rounded-3xl bg-slate-50 border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 hover:border-indigo-200 transition-shadow duration-300"
            >
              <Quote className="w-6 h-6 text-indigo-300 mb-3" />
              <p className="text-slate-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-500">{t.title}</p>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
