import React from 'react';

// import component
import TestiSlider from './TestiSlider';

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
    <div className='container mx-auto'>

        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title 
                    before:content-testimonials relative 
                    before:absolute before:opacity-20
                    before:-top-[2rem] before:-left-64
                    before:hidden before:lg:block'> 
                    Reviews
                    </h2>
                    <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                    earum dolorum quo consequatur rem nihilhic ducimus rerum soluta
                    neque harum velit molestiae dignissimos distinctio dolorum nisi
                    labore culpa nihil
                </p>
        </div>
        <TestiSlider />
    </div>
</section>
  )
}

export default Testimonials;