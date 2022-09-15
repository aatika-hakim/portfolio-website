import React from 'react'

// import component
import Projects from '../components/Projects';

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="section
    bg-tertiary min-h-[1400px]"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                        earum dolorum quo consequatur rem nihilhic ducimus rerum soluta
                        neque harum velit molestiae dignissimos distinctio dolorum nisi
                        labore culpa nihil
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
