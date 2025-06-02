
import Hero from '@/components/Hero';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import CareerHighlights from '@/components/CareerHighlights';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProfessionalSummary />
      <CareerHighlights />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
