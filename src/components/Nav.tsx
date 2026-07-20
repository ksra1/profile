
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'industries', label: 'Industries' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/70 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-bold tracking-tight transition-colors ${
            scrolled ? 'text-slate-900' : 'text-white'
          }`}
        >
          SK<span className="text-sky-500">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
              } ${active === id ? (scrolled ? '!text-slate-900' : '!text-white') : ''}`}
            >
              {label}
              {active === id && (
                <motion.span
                  layoutId="nav-active-pill"
                  className={`absolute inset-0 -z-10 rounded-full ${
                    scrolled ? 'bg-slate-100' : 'bg-white/15'
                  }`}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md shadow-sky-900/20 hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Get In Touch
        </button>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200/70 shadow-sm overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    active === id ? 'bg-slate-100 text-slate-900' : 'text-slate-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
