import React, { useState } from 'react'

const About = () => {

    const [formData, fillForm] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleInputs = (e) => {
        fillForm({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='w-full flex p-4 py-20 lg:p-[10rem] bg-[#d8e6eb77] justify-center'>
            <div className='w-full flex flex-col lg:flex-row lg:max-w-[90rem] gap-[4rem] lg:gap-[8rem] items-center'>
                <div className='flex flex-col gap-10 w-full lg:w-[55%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">About Us</p>
                    <h2 className='text-3xl lg:text-6xl'>We do design, code & develop.</h2>
                    <div className="flex flex-col gap-6">
                        <p className="text-[0.85rem] lg:text-lg">Our mission at Digit Xcellence is to empower businesses and individuals through cutting-edge digital solutions. We envision a world where every interaction is enhanced by technology, driving growth, and fostering connections.</p>
                        <p className='text-[0.85rem] lg:text-lg'>Ready to elevate your digital presence? Partner with Digit Xcellence and unlock the limitless possibilities of the digital world. Get in touch with us today to embark on your journey to digital excellence!</p>
                    </div>
                </div>
                <div className='flex flex-col gap-10 p-8 lg:p-14 bg-white w-full lg:w-[45%] rounded-[2rem]'>
                    <h3 className='text-2xl lg:text-4xl'>Get a free Keystroke quote now</h3>
                    <div className="flex flex-col gap-4">
                        <>
                            <p className='font-semibold text-[0.85rem] lg:text-base'>Name</p>
                            <input type="text" onChange={handleInputs} name='name' className='w-full text-[0.85rem] lg:text-base rounded-[1rem] p-6 border border-[#d8e6eb77]' placeholder='John Smith' />
                        </>
                        <>
                            <p className='font-semibold text-[0.85rem] lg:text-base'>Email</p>
                            <input type="email" onChange={handleInputs} name='email' className='w-full text-[0.85rem] lg:text-base rounded-[1rem] p-6 border border-[#d8e6eb77]' placeholder='example@mail.com' />
                        </>
                        <>
                            <p className='font-semibold text-[0.85rem] lg:text-base'>Phone</p>
                            <input type="text" onChange={handleInputs} name='phone' className='w-full text-[0.85rem] lg:text-base rounded-[1rem] p-6 border border-[#d8e6eb77]' placeholder='+123456789' />
                        </>
                    </div>
                    <button className='p-[1.5rem] lg:p-[2rem] text-white font-semibold rounded-[2rem] bg-blue-500'>Get Free Quote</button>

                </div>
            </div>
        </div>
    )
}

export default About