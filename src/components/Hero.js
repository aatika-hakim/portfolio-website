import React from 'react';
import { motion } from 'framer-motion';
import img from "../assets/img/hero.png";

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
      className='lg:h-[85vh] flex bg-primary py-32 lg:py-0 overflow-hidden'
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
          <div className='flex flex-col items-center lg:items-start lg:w-1/2 pr-12'>
            <motion.p className='text-xl text-accent mb-[22px]' variants={fadeIn}>
              Hello, I am Aatika
            </motion.p>
            <motion.h1
              className='max-w-2xl text-3xl leading-[44px] md:text-5xl md:leading-[1.2] lg:text-5xl lg:leading-[1] font-bold md:tracking-[1px]'
              variants={fadeInUp}
            >
              I Build Dynamic and Engaging Websites
            </motion.h1>
            <motion.p
              className='max-w-xl pt-4 pb-8 text-sm md:pt-6 md:pb-12 lg:text-left'
              variants={fadeInUp}
            >
              Welcome to my corner of the web, where creativity meets functionality. With a passion for coding and a knack for problem-solving, I bring ideas to life through dynamic and engaging websites. Let's collaborate and turn your vision into reality.
            </motion.p>
            <button className='items-center justify-center text-center'>
              <motion.button
                className='transition-all btn btn-md bg-accent hover:bg-accent-hover md:btn-lg'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href='#contact'>Work with me</a>
              </motion.button>
            </button>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative flex-shrink-0 w-56 h-5 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:bg-cover lg:bg-center lg:bg-no-repeat lg:w-full lg:h-full" style={{ backgroundImage: `url(${img})` }}>
              <motion.div
                className="absolute bottom-0 left-0 z-10 -mb-3 -ml-3 rounded-full bg-primary shadow-solid"
                style={{ width: "52px", height:"52px"}}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
