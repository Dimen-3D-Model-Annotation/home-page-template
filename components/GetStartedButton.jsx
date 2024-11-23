'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

const GetStarted = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={styles.getStartedButton}
  >
    Get Started for free
  </motion.button>
);

export default GetStarted;
