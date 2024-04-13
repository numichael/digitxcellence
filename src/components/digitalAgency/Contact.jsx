import React from 'react'

const Contact = () => {

    const profiles = [
        { style: "fa-brands fa-linkedin-in text-blue-500 border-blue-400", link: "https://www.linkedin.com/company/digitxcellence/" },
        { style: "fa-solid fa-phone text-red-500 border-red-400", link: "tel:+2348188680159" },
        { style: "fa-brands fa-whatsapp text-green-500 border-green-400", link: "https://wa.me/+2348188680159" },
        { style: "fa-brands fa-instagram text-red-500 border-red-400", link: "https://www.instagram.com/digit_xcellence24?igsh=bXUwNGhnemt1ZzA=" },
        { style: "fa-brands fa-facebook-f text-blue-500 border-blue-400", link: "https://www.facebook.com/digitxcellence?mibextid=ZbWKwL" },
    ]

    return (
        <div className='w-full flex flex-col gap-[4rem] lg:gap-[8rem] items-center p-4 lg:p-[3rem] bg-[#eeffe2]'>
            <div className='w-full flex justify-evenly lg:justify-between max-w-[30rem]'>
                {
                    profiles.map((profile, index) => (
                        <a href={profile.link} target='_blank'>
                            <i key={index} className={profile.style + " text-[#3c424577] text-lg lg:text-2xl cursor-pointer border-b-2 medialinks px-3 py-1 rounded-md"} ></i>
                        </a>
                    ))
                }
            </div>
            <div className="w-full flex flex-col lg:flex-row max-w-[90rem] gap-10">
                <div className="flex flex-col w-full lg:w-[45%] gap-6 lg:gap-10 pr-16 relative">
                    <h3 className='text-3xl lg:text-6xl text-green-950'>Get in touch!</h3>
                    <p className='5rem] lg:text-base'>Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus</p>
                    <div className="relative  flex flex-col gap-4">
                        <i className='fa-solid fa-envelope hidden lg:block transform top-1/2 -translate-y-1/2 absolute left-4 text-lg z-10' />
                        <input type="email" className='rounded-[1rem] p-2 py-4 lg:p-6 lg:px-14 text-[0.82rem] lg:text-base border-b w-full focus:outline-none' placeholder='Email Address' />
                        <button type="button" className='w-[7rem] lg:w-[10rem] text-[0.82rem] lg:text-base p-3 lg:h-[80%] lg:transform top-1/2 lg:-translate-y-1/2 lg:absolute right-2 bg-green-700 hover:bg-green-800 transition-all duration-500 rounded-[1rem] text-white'>Suscribe</button>
                    </div>
                    <div className='border-r absolute h-full right-0 top-0 border-[#9a9d9e77]' />
                </div>
                <div className="w-full lg:w-[55%] p-2 lg:pl-16 flex flex-col gap-16 lg:flex-row">
                    <div className="w-1/2">
                        <h4 className='text-xl font-semibold mb-10 text-green-800'>Services</h4>
                        <div className='flex flex-col gap-6 text-[0.82rem]'>
                            <p className='cursor-pointer hover:text-green-500'>Online Marketing</p>
                            <p className='cursor-pointer hover:text-green-500'>Online Marketing</p>
                            <p className='cursor-pointer hover:text-green-500'>Online Marketing</p>
                            <p className='cursor-pointer hover:text-green-500'>Online Marketing</p>
                            <p className='cursor-pointer hover:text-green-500'>Online Marketing</p>
                            <p className='cursor-pointer hover:text-green-500'>Online Marketing</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-16 justify-between">
                        <div>
                            <h4 className='text-xl font-semibold mb-10 text-green-800'>Resources</h4>
                            <div className='flex flex-col gap-6 text-[0.82rem]'>
                                <p className='cursor-pointer hover:text-green-500'>Case Studies</p>
                                <p className='cursor-pointer hover:text-green-500'>Case Studies</p>
                                <p className='cursor-pointer hover:text-green-500'>Case Studies</p>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold mb-10 text-green-800'>Support</h4>
                            <div className='flex flex-col gap-6 text-[0.82rem]'>
                                <p className='cursor-pointer hover:text-green-500'>Privacy Policy</p>
                                <p className='cursor-pointer hover:text-green-500'>Privacy Policy</p>
                                <p className='cursor-pointer hover:text-green-500'>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full max-w-[90rem] gap-8'>
                <div className="w-full border-t border-[#9a9d9e77]" />
                <div className="flex flex-col lg:flex-row w-full items-center lg:justify-between text-[#333] text-[0.82rem] lg:text-base">
                    <p className='cursor-pointer hover:text-green-500'>© 2024. All rights reserved by Axilthemes.</p>
                    <div className='flex gap-4 items-center'>
                        <p className="hover:text-green-700 cursor-pointer">Privacy Policy</p>
                        <p className='font-semibold'>.</p>
                        <p className="hover:text-green-700 cursor-pointer">Terms of Use</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact