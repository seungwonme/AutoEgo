'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="container px-4 py-24 mx-auto"
    >
      {children}
    </motion.section>
  );
};

export default Section;
