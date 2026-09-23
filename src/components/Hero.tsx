
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeUpContainer, fadeUpItem } from '@/lib/motion';
import Aurora from '@/components/motion/Aurora';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center relative overflow-hidden bg-grain">
      <Aurora />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div variants={fadeUpContainer} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm font-medium text-indigo-200"
          >
            <Sparkles className="w-4 h-4 text-violet-300" />
            Open to Engineering Leadership Opportunities
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-transparent">
              Sravan Kumar
            </span>
            <br />
            <span className="text-gradient-brand">Kollapudi</span>
          </motion.h1>

          <motion.h2 variants={fadeUpItem} className="text-xl md:text-2xl font-light mb-8 text-slate-300">
            Engineering Manager <span className="text-slate-600 mx-1">·</span> AEM &amp; Headless CMS
            <span className="text-slate-600 mx-1">·</span> Adobe Experience Cloud
            <span className="text-slate-600 mx-1">·</span> AI Agents &amp; Automation
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            22+ years building and leading engineering and architecture teams — hiring, coaching, and owning
            delivery — while staying hands-on across AEM/CMS platforms, headless commerce, Adobe Experience Cloud,
            and AI agent automation.
          </motion.p>

          <motion.div variants={fadeUpItem} className="flex flex-wrap justify-center items-center gap-3 mb-12">
            {[
              { icon: Mail, label: 'sravan.kollapudi@gmail.com' },
              { icon: Phone, label: '586-202-4673' },
              { icon: MapPin, label: 'Michigan, USA' }
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-slate-200"
              >
                <Icon className="w-4 h-4 text-violet-300" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUpItem} className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              onClick={() => scrollToSection('experience')}
              className="relative bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-3 text-lg shadow-lg shadow-indigo-900/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-800/50"
            >
              View Experience
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="bg-white/5 backdrop-blur-sm border-white/20 text-slate-100 hover:bg-white hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection('summary')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-white transition-colors"
          aria-label="Scroll to content"
        >
          <ArrowDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
