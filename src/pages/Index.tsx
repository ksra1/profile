
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import CareerHighlights from '@/components/CareerHighlights';
import Industries from '@/components/Industries';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <ProfessionalSummary />
      <CareerHighlights />
      <Industries />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
