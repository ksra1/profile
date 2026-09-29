import { useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface CursorGlowProps {
  children: ReactNode;
  className?: string;
}

/** Wraps a section and renders a soft brand-colored glow that trails the cursor. */
const CursorGlow = ({ children, className }: CursorGlowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);
  const x = useSpring(rawX, { stiffness: 120, damping: 25, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 120, damping: 25, mass: 0.5 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(500px circle at ${x}px ${y}px, rgba(139,92,246,0.16), transparent 70%)`;

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`relative ${className ?? ''}`}>
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background }} />
      {children}
    </div>
  );
};

export default CursorGlow;
