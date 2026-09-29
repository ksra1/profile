import { useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  maxOffset?: number;
  className?: string;
}

const clamp = (value: number, max: number) => Math.max(-max, Math.min(max, value));

/** Pulls its content gently toward the cursor when hovered nearby, springs back on leave. */
const Magnetic = ({ children, strength = 0.25, maxOffset = 12, className }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(clamp((e.clientX - rect.left - rect.width / 2) * strength, maxOffset));
    y.set(clamp((e.clientY - rect.top - rect.height / 2) * strength, maxOffset));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
