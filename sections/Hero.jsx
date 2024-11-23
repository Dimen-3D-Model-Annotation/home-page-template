// components/Hero.js
'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import GetStarted from '../components/GetStartedButton';
import ThreeAnimation from '../components/ThreeAnimation';

const Hero = () => (
  <section className={`${styles.yPaddings} relative`}>
    <div className="absolute inset-0 z-0">
      <ThreeAnimation />
    </div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} relative z-10 mx-auto flex flex-col md:flex-row items-start`}
    >
      <div className="relative z-20 flex flex-col items-start justify-center md:w-1/2">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Make<span className="highlight"> 3D Model </span>Annotation Easier with <span className="highlight">Dimen</span>
        </motion.h1>
        <motion.div
          variants={slideIn('left', 'tween', 0.3, 1)}
          className="mt-4 w-full flex justify-start ml-6"
        >
          <GetStarted />
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.3, 1)}
        className="relative z-20 w-full md:w-1/2 mt-6 md:mt-0 flex justify-center"
      >
        <img
          src="/cover.svg"
          alt="cover"
          className="w-full md:w-auto h-auto max-w-[500px] max-h-[400px] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
