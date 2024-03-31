import React from 'react'
import laptoppose from "../../assets/images/laptop-poses.png"
import { Link } from 'react-scroll'

const Intro = () => {
    return (
        <div className='w-full min-h-[30rem] max-h-[50rem] pt-[6rem] lg:pt-[10rem] pb-8 px-4 lg:px-[4rem] gap-10 lg:max-w-[90rem] flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10'>
                <h1 className='font-semibold text-4xl text-green-900 lg:text-7xl'>Welcome to Digit Xcellence</h1>
                <p className='text-lg'>We are your partners in success. <br /> With a team of seasoned professionals dedicated to crafting exceptional digital solutions, we offer a comprehensive suite of services tailored to meet your every need.</p>
                <div>
                    <Link to={'contact-component'} duration={500} smooth={true} className='p-4 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg'>
                        Get Started
                    </Link>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <img src={laptoppose} className='scale-90 lg:scale-1' alt="" />
            </div>
        </div>
    )
}

export default Intro