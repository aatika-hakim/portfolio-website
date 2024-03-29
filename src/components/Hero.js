import React from 'react';

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex
    items-center bg-primary lg:bg-cover lg:bg-center
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
    <image src="C:\Users\Amir\Downloads" alt="dev" />
        <div className='container mx-auto h-full'>
          <div className='flex items-center h-full pt-8'>
          {/* Text */}
            <div className='flex-1 flex-col 
            items-center lg:items-center'>
              <p className='text-lg text-accent mb-[22px]'>
                Hey, I am Aatika
              </p>
              <h1 className='text-4xl leading-[44px]
              md:text-5xl md:leading-tight lg:text-7xl
              lg:leading-[1.2] font-bold md:tracking-[-2px]'>I Build & Design Websites</h1>
              <p className='pt-4 pb-8 md:pt-6 md:pb-12
              max-w-[480px] lg:text-left text-lg'>

                </p>
              <button className='btn btn-md bg-accent
              hover:bg-accent-hover md:btn-lg
              transition-all'>
                <a href='#contact'>Work with me</a>
              </button>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Hero;