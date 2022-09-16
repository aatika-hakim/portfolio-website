import React from 'react';

// import testimonials 
import { testimonials } from '../data';

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-tertiary'>
    <div className='container mx-auto'>
        {/* section title */}
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title 
                    before:content-testimonials relative 
                    before:absolute before:opacity-20
                    before:-top-[2rem] before:-left-48
                    before:hidden before:lg:block'> 
                    Services
                    </h2>
                    <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                    earum dolorum quo consequatur rem nihilhic ducimus rerum soluta
                    neque harum velit molestiae dignissimos distinctio dolorum nisi
                    labore culpa nihil
                </p>
                {/* Items grid */}
                <div className='grid lg:grid-cols-4 gap-8'>
                    {/* {
                        services.map(()=>{
                            
                        }) */}
                    {/* }  */}
                </div>
        </div>
    </div>
</section>
  )
}

export default Testimonials;