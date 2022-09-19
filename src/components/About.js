import React from 'react'

// import image
import Image from '../assets/img/about.webp'

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="conainer mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full md:mx-auto 
                w-[566px] lg:ml-20 rounded-2xl"
            src={Image}
            alt=""
          />

          <div
            className="flex flex-col items-center
                text-center mr-20 ml-20 lg:items-start lg:text-left"
          >
            <div className="flex flex-col">
              <h2
                className="text-3xl lg:text-4xl
                        font-medium lg:font-extrabold mb-3
                        before:content-about relative 
                        before:absolute before:opacity-40
                        before:-top-[2rem] before:hidden
                        before:lg:block"
              >
                Aatika Hakim
              </h2>

              <p
                className="mb-4
                text-accent"
              >
                MERN Stack Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              I am  a MERN  Stack developer with solid understanding of 
              font-end and back-end technologies, Restful web services and 
              Data Base designing.               
              </p>
            </div>
            <button
              className="btn btn-md bg-accent
              hover:bg-accent-hover md:btn-lg
              transition-all"
            >
            <a href='#contact'>Contact me</a> 
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
