import React, { useState } from 'react'
import mobiledev from "../../assets/illustrations/mobiledev.svg"

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
        <div className='w-full flex p-4 py-20 lg:p-[10rem] justify-center'>
            <div className='w-full flex flex-col lg:flex-row lg:max-w-[90rem] gap-[4rem] lg:gap-[8rem] items-center'>
                <div className='flex flex-col gap-10 w-full lg:w-[55%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">About Us</p>
                    <h2 className='text-3xl text-green-950 lg:text-6xl'>We do design, code & develop.</h2>
                    <div className="flex flex-col gap-6">
                        <p className="text-[0.85rem] lg:text-md">Our mission at Digit Xcellence is to empower businesses and individuals through cutting-edge digital solutions. We envision a world where every interaction is enhanced by technology, driving growth, and fostering connections.</p>
                        <p className='text-[0.85rem] lg:text-md'>Digit Xcellence is where innovation meets expertise!</p>
                    <button type='button' className={`hidden lg:block p-3 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Book a free consultation</button>
                    </div>
                </div>
                <div className='flex flex-col gap-10 p-8 lg:p-14 bg-white w-full lg:w-[45%] rounded-[2rem]'>
                   <img src={mobiledev} alt="mobile dev svg" className='lg:scale-[2]' />
                   <button type='button' className={`block lg:hidden p-3 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Book a free consultation</button>
                </div>
            </div>
        </div>
    )
}

export default About