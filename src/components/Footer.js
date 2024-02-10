import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from "../assets/img/namelogo-gr-bg.png";

const Footer = () => {
    return (
        <footer className='py-8 bg-tertiary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0'>
                    <div className='flex items-center justify-center space-x-6'>
                        {social.map((item, index) => {
                            const { href, icon } = item;
                            return (
                                <a className='w-10 h-10 p-3 text-center text-white bg-accent rounded-sm hover:bg-black' href={href} key={index}>
                                    {icon}
                                </a>
                            );
                        })}
                    </div>
                    <div>
                        <img src={Logo} alt='' />
                    </div>
                    <p className='text-paragraph opacity-80 text-[15px]'>
                        &copy; 2024 Aatika Hakim. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;