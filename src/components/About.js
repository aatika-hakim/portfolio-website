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
                Full Stack Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am web developer. Lorem ipsum dolor sit amet consectetur
                adipisicing elit tempore earum dolorum quo consequatur rem
                nihilhic ducimus rerum soluta neque harum velit molestiae
                dignissimos distinctio dolorum nisi labore culpa nihil
                <br />
                Lorem ipsum dolor sit amet consectetu adipisicing elit tempore
                earum dolorum quo consequatur rem nihil
              </p>
            </div>
            <button
              className="btn btn-md bg-accent
              hover:bg-accent-hover md:btn-lg
              transition-all"
            >
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
