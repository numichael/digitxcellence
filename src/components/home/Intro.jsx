import React from 'react';
import laptoppose from "../../assets/images/laptop-poses.png";
import { Link } from 'react-scroll';
import { useSpring, animated } from "react-spring";
import { useInView } from 'react-intersection-observer';

const Intro = () => {
    const { ref, inView } = useInView();
    const { ref:ref1, inView:inView1 } = useInView();
    const props = {top: inView? "0rem": "-5rem"}
    const props1 = {left: inView? "0rem": "-5rem"}

    return (
        <div className='w-full min-h-[30rem] max-h-[50rem] pt-[6rem] lg:pt-[10rem] pb-8 px-4 lg:px-[4rem] gap-10 lg:max-w-[90rem] flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10'>
                <div ref={ref} style={props} className='relative transition-all duration-1000 font-semibold text-4xl text-green-900 lg:text-7xl'>
                    Welcome to Digit Xcellence
                </div>
                <p className='text-lg'>
                    We're here to help you succeed. With a team of experienced professionals who focus on creating great digital solutions, we provide a wide range of services designed just for you.
                </p>
                <div ref={ref1} style={props1} className='relative transition-all duration-1000'>
                    <Link to={'contact-component'} duration={500} smooth={true} className='p-4 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg'>
                        Get Started
                    </Link>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
                <img src={laptoppose} className='scale-90 lg:scale-1' alt="" />
            </div>
        </div>
    );
};

export default Intro;
