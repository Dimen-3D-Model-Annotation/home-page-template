'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="About Us"
        textStyles="text-center text-[64px] font-bold" // Make sure font-bold is applied
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        At <span className="font-extrabold">Dimen</span>, we’re transforming the <span className="font-extrabold">3D model review process</span> with our innovative web-based platform. Our mission is to simplify and enhance collaboration by providing tools for real-time interaction with 3D models, enabling stakeholders to add annotations, provide feedback, and make decisions more efficiently. From interactive 3D visualization and early feedback on sketches to seamless communication and project management, our platform is designed to streamline workflows and improve project outcomes. <span className="font-extrabold">Join us to experience a smarter approach to 3D model design and review.</span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
