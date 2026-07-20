
import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { fadeUpItem } from '@/lib/motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tilt?: number;
}

const TiltCard = ({ children, className, tilt = 10 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [tilt, -tilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-tilt, tilt]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUpItem}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      className={`h-full ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
