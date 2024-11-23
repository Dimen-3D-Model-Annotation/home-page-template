'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import GetStarted from './GetStartedButton'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-6 relative shadow-lg`}
      style={{ backgroundColor: 'inherit' }}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 opacity-50" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
        <img src="/dimenlogo.svg" alt="Logo" className="w-[36px] h-[36px] object-contain" />

        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-white hover:text-gray-400 transition duration-300">About</a>
          <a href="#solutions" className="text-white hover:text-gray-400 transition duration-300">Solutions</a>
          <a href="#pricing" className="text-white hover:text-gray-400 transition duration-300">Pricing</a>
          <a href="#contact" className="text-white hover:text-gray-400 transition duration-300">Contact Us</a>
          <a href="#documentation" className="text-white hover:text-gray-400 transition duration-300">Documentation</a>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <button className="loginbutton text-white border border-white px-4 py-2 rounded transition duration-300 hover:bg-gray-200 hover:text-black" style={{ fontSize: '14px' }}>Login</button>
          <div className="ml-4">
            <GetStarted />
          </div>
        </div>
        
        <img
          src="/menu.svg"
          alt="Menu"
          className="w-[28px] h-[28px] object-contain md:hidden cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden md:hidden flex flex-col gap-4 mt-4 p-6 rounded-md shadow-lg"
        style={{ backgroundColor: 'inherit' }}
      >
        <a href="#about" className="text-white hover:text-gray-400 transition duration-300">About</a>
        <a href="#solutions" className="text-white hover:text-gray-400 transition duration-300">Solutions</a>
        <a href="#pricing" className="text-white hover:text-gray-400 transition duration-300">Pricing</a>
        <a href="#contact" className="text-white hover:text-gray-400 transition duration-300">Contact Us</a>
        <a href="#documentation" className="text-white hover:text-gray-400 transition duration-300">Documentation</a>
        <div className="flex justify-between items-center gap-4">
          <button className="loginbutton text-white border border-white px-4 py-2 rounded transition duration-300 hover:bg-gray-200 hover:text-black" style={{ fontSize: '14px' }}>Login</button>
          <GetStarted />
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
