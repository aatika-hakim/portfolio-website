import React from 'react'

import { contact } from '../data'
import {location} from '../data'

import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_dxufc4k',
            'template_4rhmgev',
            form.current,
            'jKzG-rXWeUqEpfd2l',
        )
        alert("Message Sent");
        
        e.target.reset();
    }
    return (
        <section id="contact" className="section bg-primary">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title 
                before:content-contact relative 
                before:absolute before:opacity-40
                before:-top-7px before:-left-40 
                before:hidden before:lg:block"
                    >
                        Contact me
                    </h2>
                    <p className="subtitle"></p>
                </div>
                <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                    <div
                        className="flex flex-1 flex-col items-start
                        mb-10 lg:mb-0 lg:pt-2"
                    >
                        {contact.map((item, index) => {
                            const { icon, title, subtitle } = item

                            return (
                                <div
                                    className="flex flex-ROW lg:flex-row
                        gap-x-4"
                                    key={index}
                                >
                                    <div
                                        className="text-accent rounded-sm
                            w-14 h-14 flex items-start justify-center 
                            mb-0 lg:mb-0 text-2xl "
                                    >
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className="font-body text-xl mb-1">{title}</h4>
                                        <p className="mb-1 ">{subtitle}</p>
                                        <p className="mb-1 text-accent"> Email me at</p>
                                        <a
                                            className="text-accent mb-1"
                                            href="mailto:aatikahakim90@gmail.com"
                                        >
                                            aatikahakim90@gmail.com
                                        </a>                                       
                                    </div>
                                </div>
                            )
                        })}
                        <div className='mt-10'>
                        { location.map((items, index) => {
                            const { icon, title, subtitle, description } = items

                            return (
                                <div
                                    className="flex flex-row lg:flex-row  
                        gap-x-4"
                                    key={index}
                                >
                                    <div
                                        className="text-accent rounded-sm
                            w-14 h-14 flex items-start justify-center 
                            mb-0 lg:mb-0 text-2xl"
                                    >
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className="font-body text-xl mb-1">{title}</h4>
                                        <p className="mb-1 ">{subtitle}</p>
                                        <p className='mb-1 text-accent'>{description}</p>                                       
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-8 w-full max-w-[780px]"
                    >
                        <input
                            className="input"
                            type="text"
                            required name="name"
                            minLength="4"
                            placeholder="Enter Your Name"
                        />
                        <input
                            className="input"
                            type="email"
                            required name="email"
                            placeholder="Enter Your Email"
                        />
                        <input
                            type="text"
                            required name="message"
                            className="input"
                            placeholder="Subject"
                        />
                        <textarea
                            className="textarea"
                            required name= "message"
                            placeholder="Write Your Message"
                        ></textarea>
                        <button 
                            type="submit"
                            className="btn btn-lg bg-accent hover:bg-accent-hover"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacts
