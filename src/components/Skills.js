import React from 'react'

// import skills 
import { skills } from '../data';

const Skills = () => {
  return (
    <>
    <section id='skills' className='bg-secondary py-20'>
        <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2  className="text-3xl lg:text-4xl
                        font-medium lg:font-extrabold mb-3">
            Skills
          </h2>
          <p className='subtitle'>
          </p>
        </div>
        <div className='grid grid-cols-8 md:grid-flow-row'>
            {skills.map((skill, index)=>{
                return(
                    <div className='flex items-center justify-center' key={index}>
                        <img src={skill.image}  alt='' />
                    </div>
                )
            })}
        </div>
        </div>
    </section>
    </>
  )
}

export default Skills;