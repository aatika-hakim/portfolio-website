import React from 'react'

// import image
import Image from '../assets/img/about.webp'

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="conainer mx-auto">
        <div className="flex flex-col xl:flex-row gap-10">
          <img
            className="object-cover h-[400px] md:mx-auto 
                w-[566px] lg:ml-20 rounded-2xl"
            src={Image}
            alt=""
          />

          <div
            className="flex flex-col items-center
                text-center mr-20 lg:items-start lg:text-left"
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
                className="mb-2
                text-accent"
              >
                Web Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p style={{ whiteSpace: 'pre-line', marginBottom: '32px' }}>
                Hello! I'm Aatika Hakim, a passionate web developer with 1 year of experience in creating dynamic websites. I specialize in front-end development and learning backend as well, with expertise in React.js, Next.js, HTML, CSS, JavaScript, and Tailwind CSS.
                {'\n\n'}

                In my impactful career, I've worked on diverse projects. I'm committed to staying current with web development trends and continuously improving my skills.
                {'\n\n'}

                I'm passionate about creating exceptional web experiences and am eager to tackle new challenges in web development. My goal is to contribute my expertise to projects that push boundaries and make a positive impact.
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
