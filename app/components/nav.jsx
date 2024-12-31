'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.main
      className='fixed z-50 w-full flex items-center justify-center'
      initial={{ y: '-500px' }}
      animate={{ y: showNav ? '0%' : '-500px' }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <nav className='py-3 lg:py-6 border flex justify-center items-center rounded-full fondo backdrop-blur-md border-[rgb(31_37_14)] w-[85%]'>
        <img
          src='https://framerusercontent.com/images/zmqLodalWdgr1I625armPSY7sw.png'
          alt='Unleash The Wolf Within'
          width='100'
          height='50'
          className='h-4 lg:h-7 w-auto'
        />
      </nav>
    </motion.main>
  );
};

export default Nav;
