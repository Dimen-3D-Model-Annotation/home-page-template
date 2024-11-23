'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        
        <TitleText
          title={(
            <>
              Create and collaborate in real-time
            </>
          )}
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[69px] flex w-full h-[550px]"
        >
          {isClient ? (
            <video
              src="/Dimen.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          ) : (
            <p>Loading video...</p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;