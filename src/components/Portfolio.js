import React from 'react'

// import component
import Projects from '../components/Projects';

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="bg-black section h-fit"
        >
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2
                        className="section-title 
                        before:content-portfolio relative 
                        before:absolute before:opacity-40
                        before:-top-[2rem] before:-left-3/4
                        before:hidden before:lg:block"
                    >
                        My Latest Work
                    </h2>
                    <p className="subtitle">
                    I have Developed web applications and designs using JavaScript, TypeScript, React, Next.js, Tailwind CSS.
                    </p>
                    <div>
                        <Projects />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
