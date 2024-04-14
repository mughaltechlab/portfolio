import React from 'react'

function Contact() {
  return (
    <section className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id='contact'>

        <div className="text-center">
            <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
        </div>

        <div className="max-w-[800px] mx-auto">

            <div className="mt-6 bg-[#161616] rounded-xl">
                <div className="p-10">

                    {/* using getform.io website for free 25 submissions create your account and replace that link from action in form */}
                    <form action="https://getform.io/f/pboxovna" method='POST'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            {/*  name input  */}
                            <div>
                                <div className="mt-2.5 relative">
                                    <input 
                                        type="text"
                                        name='name'
                                        id=''
                                        placeholder='Your name'
                                        className='w-full px-4 py-4 
                                        bg-[#161616] border border-gray-700 focus:outline-none focus:border-pink-600 text-gray-400 placeholder-gray-400 
                                        rounded-md '
                                    />
                                </div>
                            </div>
                            {/*  email input  */}
                            <div>
                                <div className="mt-2.5 relative">
                                    <input 
                                        type="text"
                                        name='email'
                                        id=''
                                        placeholder='Your email'
                                        className='w-full px-4 py-4 
                                        bg-[#161616] border border-gray-700 focus:outline-none focus:border-pink-600 text-gray-400 placeholder-gray-400 
                                        rounded-md '
                                    />
                                </div>
                            </div>
                            {/*  message textarea  */}
                            <div className='sm:col-span-2'>
                                <div className="mt-2.5 relative">
                                    <textarea 
                                        placeholder='Your message'
                                        name='message'
                                        className='w-full px-4 py-4
                                        bg-[#161616] border border-gray-700 focus:outline-none focus:border-pink-600 text-gray-400 placeholder-gray-400 
                                        rounded-md '
                                        rows={4}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            {/* send btn */}
                            <div className="sm:col-span-2">
                                <button
                                    type='submit'
                                    className="text-white text-center text-lg font-semibold w-full bg-primary-color p-4 mt-2 rounded-md">Send</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default Contact