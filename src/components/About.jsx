import React from 'react'
import aboutImg from '../assets/about.jpg'

function About() {
  return (
    <section className="text-white max-w-[1200px] mx-auto my-12" id="about">

        <div className="md:grid md:grid-cols-2 sm:py-16">
            {/* about me text */}
            <div className="mt-4 md:mt-0 text-left flex">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">About me</h2>
                    <p className="text-base lg:text-lg">
                        As a proactive and self-driven graduate specializing in frontend web development, I bring a wealth of experience in HTML, CSS, Bootstrap, Tailwind CSS, and JavaScript. With a solid foundation in Software Engineering acquired during my Bachelor's degree, I bridge the gap between theoretical understanding and practical application. I am actively seeking a challenging position within a reputable organization where I can further enhance my skills, expand my knowledge, and contribute my expertise to meaningful projects.
                    </p>
                </div>
            </div>
            {/* image */}
            <img src={aboutImg} alt="" className="mx-auto rounded-3xl py-8 md:py-0" width={300} height={300} />
        </div>

        
    </section>
  )
}

export default About