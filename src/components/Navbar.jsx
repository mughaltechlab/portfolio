import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { TypeAnimation } from "react-type-animation";

function Navbar() {

    // declaring state variable
    const [nav, setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }
    
  return (
    <nav className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">

        {/* logo */}
        <h1 className='text-3xl font-bold primary-color ml-4'>
            <span className="primary-color">
                </span>
                <TypeAnimation
                sequence={[
                    "Saqib",
                    1000,
                    "Ahmed",
                    1000,
                    "Mughal",
                    1000,
                    "S.A.M",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={1}
                />
        </h1>
        {/* navigation */}
        <ul className="hidden md:flex">
            <li className="p-5"><a href="#about">About</a></li>
            <li className="p-5"><a href="#work">Work</a></li>
            <li className="p-5"><a href="#contact">Contact</a></li>
        </ul>


        {/* menu icon */}
        <div onClick={handleNav} className='block md:hidden mr-4'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        {/* mobile navigation */}
        <div className={nav ? 'z-10 fixed left-0 top-0 h-full w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            {/* logo */}
            <h1 className='text-3xl primary-color m-4'>SA.M</h1>
            {/* navigation */}
            <ul className="p-8 text-2xl">
                <li onClick={handleNav} className="p-5"><a href="#about">About</a></li>
                <li onClick={handleNav} className="p-5"><a href="#work">Work</a></li>
                <li onClick={handleNav} className="p-5"><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar