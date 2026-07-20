
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeUpContainer, fadeUpItem } from '@/lib/motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 text-white flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div variants={fadeUpContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUpItem} className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Sravan Kumar Kollapudi
          </motion.h1>
          <motion.h2 variants={fadeUpItem} className="text-2xl md:text-3xl font-light mb-8 text-slate-300">
            Engineering Manager | AEM & Headless CMS | Adobe Experience Cloud | AI Agents & Automation
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            22+ years building and leading engineering and architecture teams — hiring, coaching, and owning
            delivery — while staying hands-on across AEM/CMS platforms, headless commerce, Adobe Experience Cloud,
            and AI agent automation.
          </motion.p>

          <motion.div variants={fadeUpItem} className="flex flex-wrap justify-center items-center gap-6 mb-12 text-lg">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-slate-400" />
              <span>sravan.kollapudi@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-slate-400" />
              <span>586-202-4673</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-slate-400" />
              <span>Michigan, USA</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUpItem} className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              onClick={() => scrollToSection('experience')}
              className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-3 text-lg shadow-lg shadow-sky-900/30 transition-all duration-300 hover:scale-105"
            >
              View Experience
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-slate-500 text-slate-200 hover:bg-white hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
