
export const fadeUpContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  }
};
