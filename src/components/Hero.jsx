import React from 'react'
import heroImg from '../assets/profile.png'
import { TypeAnimation } from "react-type-animation"
import myCv from '../assets/saqib_mughal_frontend_dev.pdf'

function Hero() {
  return (
    <section className="max-w-[1200px] md:h-[70vh] grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 mx-auto bg-black">

        {/* profile image */}
        <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
                <img src={heroImg} alt="hero image" />
        </div>

        {/* others columns */}
        <div className="col-span-2 px-5 my-auto">
            {/* type writer animation */}
            <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                <span className="primary-color">
                    I'm a
                </span> <br/>
                <TypeAnimation
                sequence={[
                    "Frontend Dev",
                    1000,
                    "WebDesigner",
                    1000,
                    "Consultant",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>

            {/* tag line */}
            <p className="text-white sm:text-lg lg:text-xl my-6">
                My name is Saqib Ahmed and I have 3+ years experience in web development.
            </p>
            {/* action btn */}
            <div className="my-8">
                <a href={myCv} className="px-6 py-3 w-full rounded-xl mr-4
                        bg-gradient-to-br from-orange-500 to-pink-500 text-white" download>
                    Download CV
                </a>
                <a href="#contact" className="px-6 py-3 w-full rounded-xl
                        border border-gray-400 hover:border-none hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                    Contact
                </a>
            </div>
                        
        </div>
        
    </section>
  )
}

export default Hero