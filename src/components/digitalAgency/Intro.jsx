import React from 'react'
import laptoppose from "../../assets/images/laptop-poses.png"

const Intro = () => {
    return (
        <div className='w-full min-h-[30rem] max-h-[50rem] pt-[10rem] pb-8 px-4 gap-10 lg:max-w-[90rem] flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10'>
                <h1 className='font-semibold text-4xl lg:text-7xl'>Welcome to Digit Xcellence</h1>
                <p className='text-lg'> where innovation meets expertise!</p>
                <div>
                    <button className='bg-blue-600 rounded-[1rem] p-6 text-white'>
                        Get Started
                    </button>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <img src={laptoppose} className='scale-90 lg:scale-1' alt="" />
            </div>
        </div>
    )
}

export default Intro