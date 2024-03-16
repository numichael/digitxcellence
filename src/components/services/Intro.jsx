import React from 'react'
import stackboxes from "../../assets/images/stackboxes.png"

const Intro = () => {
    return (
        <div className='w-full min-h-[30rem] max-h-[50rem] lg:pt-[10rem] pb-8 px-4 gap-10 lg:max-w-[90rem] flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 lg:pt-[8rem]'>
                <h1 className='font-semibold text-4xl lg:text-6xl'>Best solutions for your business.</h1>
                <p className='text-lg'>Give your business a unique logo to stand out from crowd. We’ll create logo specifically for your company.</p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center h-full relative'>
                <img src={stackboxes} className='absolute top-10 scale-[1.3]' alt="" />
            </div>
        </div>
    )
}

export default Intro