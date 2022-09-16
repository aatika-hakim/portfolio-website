import React from 'react'

// import services data
import { services } from '../data'

const Services = () => {
    return (
        <section id="services" className="section bg-tertiary">
            <div className="container mx-auto">
                {/* section title */}
                <div className="flex flex-col items-center text-center">
                    <h2
                        className="section-title 
                        before:content-services relative 
                        before:absolute before:opacity-40
                        before:-top-[2rem] before:-left-48
                        before:hidden before:lg:block"
                    >
                        Services
                    </h2>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                        earum dolorum quo consequatur rem nihilhic ducimus rerum soluta
                        neque harum velit molestiae dignissimos distinctio dolorum nisi
                        labore culpa nihil
                    </p>
                </div>
                
                {/* Items grid */}
                <div className="grid lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const {icon, name, description} = service;
                        return (
                            <div className="bg-secondary p-6 rounded-2xl" key={index}>
                                {/* Icons */}
                                <div
                                    className="text-accent rounded-sm w-12 h-12
                                flex justify-center items-center mb-24 text-[28px]"
                                >
                                    {icon}
                                </div>
                                <h4 className="text-xl font-medium mb-2">{name}</h4>
                                <p>{description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
