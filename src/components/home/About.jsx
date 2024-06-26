import React, { useState } from 'react'
import about from "../../assets/illustrations/about.svg"
import { useInView } from 'react-intersection-observer'

const About = () => {

    const {ref: ref1, inView:inView1} = useInView()
    const {ref: ref2, inView:inView2} = useInView()

    const propsToRight = {left: inView1? "-0rem": "-6rem"}
    const propsToLeft = {right: inView2? "-0rem": "-6rem"}

    return (
        <div className='w-full flex p-4 py-20 lg:p-[10rem] justify-center'>
            <div className='w-full flex flex-col lg:flex-row lg:max-w-[90rem] gap-[4rem] lg:gap-[8rem] items-end'>
                <div ref={ref1} style={propsToRight} className='transition-all duration-1000 relative flex flex-col gap-10 w-full lg:w-[50%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">About Us</p>
                    <h2 className='text-3xl text-green-950 lg:text-6xl'>We do design, code & develop.</h2>
                    <div className="flex flex-col gap-6">
                        <p className="text-[0.82rem] lg:text-md">Our mission at Digit Xcellence is to empower businesses and individuals through cutting-edge digital solutions. We envision a world where every interaction is enhanced by technology, driving growth, and fostering connections.</p>
                        <p className='text-[0.82rem] lg:text-md'>Digit Xcellence is where innovation meets expertise!</p>
                    <button type='button' className={`hidden lg:block p-3 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Book a free consultation</button>
                    </div>
                </div>
                <div ref={ref2} style={propsToLeft} className='transition-all duration-1000 relative flex flex-col gap-10 p-8 lg:p-14 bg-white w-full lg:w-[50%] rounded-[2rem]'>
                   <img src={about} alt="mobile dev svg" className='lg:scale-[1.5] 2xl:scale-[1.2]' />
                   <button type='button' className={`block lg:hidden p-3 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Book a free consultation</button>
                </div>
            </div>
        </div>
    )
}

export default About