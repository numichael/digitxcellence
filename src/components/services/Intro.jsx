import React from 'react'
import services from "../../assets/illustrations/services.svg"
import { useInView } from 'react-intersection-observer';

const Intro = () => {

    const { ref, inView } = useInView();
    const { ref:ref1, inView:inView1 } = useInView();
    const props = {top: inView? "0rem": "-5rem"}
    const props1 = {right: inView? "0rem": "-5rem"}

    return (
        <div className='w-full min-h-[30rem] max-h-[50rem] pt-[6rem] lg:pt-[10rem] pb-8 px-4 lg:px-[4rem] gap-10 lg:max-w-[90rem] flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 '>
                <h1 ref={ref} style={props} className='relative transition-all duration-1000 font-semibold text-4xl lg:text-6xl text-green-900'>Best solutions for your business.</h1>
                <p className='text-lg'>Unlock unparalleled business success with our meticulously crafted, top-tier solutions, custom-tailored to propel your enterprise to unprecedented heights of excellence.</p>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center h-full relative'>
                <img ref={ref1} src={services} style={props1} className='relative transition-all duration-1000' alt="" />
            </div>
        </div>
    )
}

export default Intro