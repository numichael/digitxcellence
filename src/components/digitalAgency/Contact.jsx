import React from 'react'

const Contact = () => {

    const profiles = [
        "fa-brands fa-linkedin",
        "fa-brands fa-linkedin",
        "fa-brands fa-linkedin",
        "fa-brands fa-linkedin",
        "fa-brands fa-linkedin",
        "fa-brands fa-linkedin",
        "fa-brands fa-linkedin",
        "fa-brands fa-linkedin",
    ]
    return (
        <div className='w-full flex flex-col gap-[4rem] lg:gap-[8rem] items-center p-4 lg:py-[3rem]'>
            <div className='w-full flex justify-evenly lg:justify-between max-w-[90rem] lg:gap-[6rem]'>
                {
                    profiles.map((profile, index) => (
                        <i key={index} className={profile + " text-[#3c424577] text-lg lg:text-3xl"} ></i>
                    ))
                }
            </div>
            <div className="w-full flex flex-col lg:flex-row max-w-[90rem] gap-10">
                <div className="flex flex-col w-full lg:w-[45%] gap-6 lg:gap-10 pr-16 relative">
                    <h3 className='text-3xl lg:text-6xl'>Get in touch!</h3>
                    <p className='text-[0.85rem] lg:text-lg'>Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus</p>
                    <div className="relative  flex flex-col gap-4">
                        <i className='fa-solid fa-envelope hidden lg:block transform top-1/2 -translate-y-1/2 absolute left-4 text-lg z-10' />
                        <input type="email" className=' rounded-[1rem] p-2 py-4 lg:p-6 lg:px-14 text-[0.85rem] lg:text-lg border-b w-full focus:outline-none' placeholder='Email Address' />
                        <button type="button" className='w-[7rem] lg:w-[10rem] text-[0.85rem] lg:text-lg p-3 lg:h-[80%] lg:transform top-1/2 lg:-translate-y-1/2 lg:absolute right-2 bg-blue-700 hover:bg-blue-800 transition-all duration-500 rounded-[1rem] text-white'>Suscribe</button>
                    </div>
                    <div className='border-r absolute h-full right-0 top-0 border-[#9a9d9e77]' />
                </div>
                <div className="w-full lg:w-[55%] p-2 lg:pl-16 flex flex-col gap-16 lg:flex-row">
                    <div className="w-1/2">
                        <h4 className='text-xl font-semibold mb-10'>Services</h4>
                        <div className='flex flex-col gap-6 text-[0.85rem] lg:text-lg'>
                            <p>Online Marketing</p>
                            <p>Online Marketing</p>
                            <p>Online Marketing</p>
                            <p>Online Marketing</p>
                            <p>Online Marketing</p>
                            <p>Online Marketing</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col lg:flex-row gap-16 justify-between">
                        <div>
                            <h4 className='text-xl font-semibold mb-10'>Resources</h4>
                            <div className='flex flex-col gap-6 text-[0.85rem] lg:text-lg'>
                                <p>Case Studies</p>
                                <p>Case Studies</p>
                                <p>Case Studies</p>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold mb-10'>Support</h4>
                            <div className='flex flex-col gap-6 text-[0.85rem] lg:text-lg'>
                                <p>Privacy Policy</p>
                                <p>Privacy Policy</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full max-w-[90rem] gap-8'>
                <div className="w-full border-t border-[#9a9d9e77]" />
                <div className="flex flex-col lg:flex-row w-full items-center lg:justify-between text-[#333] text-[0.85rem] lg:text-lg pb-8">
                    <p>© 2024. All rights reserved by Axilthemes.</p>
                    <div className='flex gap-4 items-center'>
                        <p className="hover:text-blue-500 cursor-pointer">Privacy Policy</p>
                        <p className='font-semibold'>.</p>
                        <p className="hover:text-blue-500 cursor-pointer">Terms of Use</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact