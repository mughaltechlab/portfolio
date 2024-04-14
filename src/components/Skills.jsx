import React from 'react'
import htmlIc from '../assets/html.png'
import cssIc from '../assets/css.png'
import jsIc from '../assets/javascript.png'
import tailwindIc from '../assets/tailwind.png'
import bootIc from '../assets/boot.png'
import reactIc from '../assets/react.png'
import jqIc from '../assets/jq.webp'

function Skills() {
  return (
    <section id='skills' className="overflow-hidden overflow-x-auto scroll-smooth  border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center">

        <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
            My <br/> Tech <br/> Stack
        </h2>

        {/* tech images */}
        <div className="flex flex-shrink-0 flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={htmlIc} alt="" width={100} height={100} />
            <p className="mt-2">HTML</p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={cssIc} alt="" width={100} height={100} />
            <p className="mt-2">CSS</p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={bootIc} alt="" width={100} height={100} />
            <p className="mt-2">Bootstrap</p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={jsIc} alt="" width={100} height={100} />
            <p className="mt-2">JavaScript</p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={jqIc} alt="" width={100} height={100} />
            <p className="mt-2">JQuery</p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={tailwindIc} alt="" width={100} height={100} />
            <p className="mt-2">Tailwind</p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
            <img src={reactIc} alt="" width={100} height={100} />
            <p className="mt-2">React</p>
        </div>
        
    </section>
  )
}

export default Skills