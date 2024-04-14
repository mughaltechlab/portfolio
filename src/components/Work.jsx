import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'

function Work() {
  return (
    <section className="max-w-[1200px] mx-auto p-5" id='work'>
        <div className="pb-8">
            <p className="primary-color text-4xl font-bold mb-3">Work</p>
            <p className="text-gray-400">Check out some of my recent work</p>
        </div>

        {/* projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* proj1 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj1} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">NFT marketplace</span>
                    <div className="pt-8 text-center">
                        <a href="https://mughaltechlab.github.io/nft_marketplace_website_landing_page/" target='_blank'>
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj2 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj2} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider text-center">AirBnb experience Clone <br /> in React js </span>
                    <div className="pt-8 text-center">
                        <a href="https://github.com/mughaltechlab/react-practice/tree/main/react_2024/second_project_airbnb_exp_clone">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj3 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img className='object-cover h-full' src={proj3} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider text-center">Card Component with animations <br /> in React</span>
                    <div className="pt-8 text-center">
                        <a href="https://www.linkedin.com/posts/saqib-ahmed-89b89826b_reactjs-frontenddevelopment-webanimations-activity-7183525215652495360-3lxz?utm_source=share&utm_medium=member_desktop">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj4 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img className='object-cover h-full' src={proj4} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Parallax Scrollling Effect</span>
                    <div className="pt-8 text-center">
                        <a href="https://mughaltechlab.github.io/parallax_scrolling_design/">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj5 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj5} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">JS projects Bundle</span>
                    <div className="pt-8 text-center">
                        <a href="https://mughaltechlab.github.io/js_projects/">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* proj6 */}
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                                h-[200px] bg-cover relative">
                {/* img */}
                <img src={proj6} alt="" />
                {/* live links */}
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">CHAT AI UI with Tailwind CSS</span>
                    <div className="pt-8 text-center">
                        <a href="https://mughaltechlab-chat-clone.netlify.app/">
                            <button className="text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default Work