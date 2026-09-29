
import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useMotionTemplate, useTransform } from 'framer-motion';
import { fadeUpItem } from '@/lib/motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tilt?: number;
  spotlight?: boolean;
  glowColor?: string;
}

const TiltCard = ({ children, className, tilt = 10, spotlight = true, glowColor = 'rgba(255,255,255,0.14)' }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowOpacity = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [tilt, -tilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-tilt, tilt]);
  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);
  const glowBackground = useMotionTemplate`radial-gradient(280px circle at ${glowX} ${glowY}, ${glowColor}, transparent 70%)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => glowOpacity.set(1);

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glowOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUpItem}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      className={`relative h-full overflow-hidden ${className ?? ''}`}
    >
      {spotlight && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ opacity: glowOpacity, background: glowBackground }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default TiltCard;
