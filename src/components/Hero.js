import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
      style={{ backgroundImage: 'url("")' }}
    >
      <div className='container h-full mx-auto'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className='flex items-center h-full pt-8'
        >
          {/* Text */}
          <div className='flex-col items-center flex-1 lg:items-center'>
            <motion.p className='text-2xl text-accent mb-[22px]' variants={fadeIn}>
              Hello, I am Aatika
            </motion.p>
            <motion.h1
              className='text-3xl leading-[44px] md:text-5xl md:leading-[1.2] lg:text-5xl lg:leading-[1.5] font-bold md:tracking-[1px] max-w-3xl'
              variants={fadeInUp}
            >
              I Build Dynamic and engaging Websites
            </motion.h1>
            <motion.p
              className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] lg:text-left text-lg'
              variants={fadeInUp}
            >
              Welcome to my corner of the web, where creativity meets functionality. With a passion for coding and a knack for problem-solving, I bring ideas to life through dynamic and engaging websites. Let's collaborate and turn your vision into reality.
            </motion.p>
            <motion.button
              className='transition-all btn btn-md bg-accent hover:bg-accent-hover md:btn-lg'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href='#contact'>Work with me</a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
