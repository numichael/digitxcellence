import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';
import Contact from '../home/Contact';

const ProgramDetails = () => {
    const [details, setDetails] = useState({})
    const programDetails = sessionStorage.getItem('programDetails')
    const navigate = useNavigate()
    useEffect(() => {
        if (programDetails) {
            setDetails(JSON.parse(programDetails))
        } else {
            navigate("/academy")
        }
    }, [])

    const resize = (payload) => {
        setDetails((prevTab) => {
            const updatedCourseDetails = prevTab?.courseDetails?.map((detail) => {
                if (detail?.name === payload) {
                    return { ...detail, clicked: !detail.clicked };
                }
                else {
                    return { ...detail, clicked: false };
                }
            });

            return { ...prevTab, courseDetails: updatedCourseDetails };
        });
    };


    return (
        <div className='w-full flex flex-col items-center lg:p-0'>
            <Element className='w-full flex flex-col justify-center' name='home'>
                <div className='w-full flex p-4 py-20 lg:p-[8rem] justify-center text-[0.85rem]'>
                    <div className='w-full flex flex-col lg:flex-row lg:max-w-[90rem] gap-[4rem] lg:gap-[8rem] items-center'>
                        <div className='flex flex-col gap-6 w-full lg:w-[45%]'>
                            <div className='flex gap-3'>
                                {details?.location?.map((entity, index) => (
                                    <div key={index} className=' rounded-md font-medium text-[0.85rem] p-2 border-4 border-green-700'>
                                        {entity}
                                    </div>
                                ))}
                            </div>
                            <h2 className='text-3xl text-green-950 lg:text-4xl'>{details?.name}</h2>
                            <div className="flex flex-col gap-6">
                                <p className="text-[0.82rem] lg:text-md">{details?.text}</p>
                                <div className="flex gap-6">
                                    <button type='button' className={`hidden lg:block p-3 px-6 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Apply Now</button>
                                    <button type='button' className={`hidden lg:block p-3 px-6 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Download Syllabus</button>
                                </div>
                                <p className='font-medium text-red-700'>Applications are currently {details?.applicationStatus ? "ongoing" : "closed"}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10 p-8 lg:p-0 bg-white w-full h-full lg:w-[55%] rounded-[2rem]'>
                            <img src={details?.image} alt="mobile dev svg" className='h-full w-full scale-105 rounded-md' />
                            <div className="flex flex-col gap-6 lg:hidden">
                                <button type='button' className={`block lg:hidden p-3 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Apply Now</button>
                                <button type='button' className={`block lg:hidden p-3 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg`}>Download Syllabus</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex p-4 py-20 lg:p-[4rem] justify-center text-[0.85rem] bg-green-900 text-white">
                    <div className='w-full grid grid-cols-2 lg:flex lg:flex-row lg:max-w-[90rem] gap-[4rem] justify-evenly items-center max-w-[90rem]'>
                        <div className="flex flex-col gap-4 items-center">
                            <i className="fa-regular text-gray-200 fa-hourglass-half text-[2rem]"></i>
                            <p>Duration</p>
                            <p className='text-base text-center'>{details?.duration}</p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <i className="fa-solid text-gray-200 fa-calendar-day text-[2rem]"></i>
                            <p>Start Date</p>
                            <p className='text-base text-center'>{details?.startDate}</p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <i className="fa-solid text-gray-200 fa-layer-group text-[2rem]"></i>
                            <p>Level</p>
                            <p className='text-base text-center'>{details?.requiredLevel}</p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <i className="fa-solid text-gray-200 fa-list-check text-[2rem]"></i>
                            <p>Prerequisites</p>
                            <p className='text-base text-center'>{details?.prerequisites ? details?.prerequisites[0] : null}</p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <i className="fa-solid text-gray-200 fa-diagram-project text-[2rem]"></i>
                            <p>Projects</p>
                            <p className='text-base text-center'>{details?.projects} projects</p>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <i className="fa-solid text-gray-200 fa-credit-card text-[2rem]"></i>
                            <p>Cost</p>
                            <p className='text-base text-center'>## {details?.cost}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center p-4 py-20 lg:p-[4rem] justify-center text-[0.85rem] bg-green-50">
                    <div className="w-full max-w-[90rem] flex flex-col items-center">
                        {
                            details?.courseDetails?.map((detail, index) => (
                                <div key={index} className='w-full lg:w-1/2 p-4' onClick={() => resize(detail?.name)}>
                                    <div className='flex justify-between items-center cursor-pointer'>
                                        <p className='text-base font-semibold text-green-800 mb-4'>{detail?.name}</p>
                                        <i className={`fa-solid fa-chevron-down ${detail?.clicked ? "transform rotate-[180deg]" : ""}`}></i>
                                    </div>
                                    <div className={`transition-all duration-500 ${detail?.clicked ? "opacity-1 flex flex-col gap-2" : "absolute left-[-1000] h-0 opacity-0"}`}>
                                        {
                                            detail?.children?.map((child, index) => (
                                                <p key={index} className={`pl-6 ${detail?.clicked ? "block" : "hidden"}`}>
                                                    <span className='font-medium'>{child?.textHeader ? child?.textHeader + ": " : null}</span>
                                                    {child?.text}
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col lg:flex-row w-full justify-center gap-8">
                        <button type="button" className='text-base p-3 px-8 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg'>Apply Now</button>
                        <button type="button" className='text-base p-3 px-8 outline-none border border-green-700 hover:scale-105 bg-green-700 transition-all duration-500 text-white font-medium rounded-lg'>Speak To a Learning Advisor</button>
                    </div>
                </div>
                <div className="w-full flex p-4 py-20 lg:p-[4rem] justify-center text-[0.85rem] bg-green-900 text-white">
                    <div className='w-full flex flex-wrap lg:max-w-[90rem] gap-[4rem] justify-evenly items-center max-w-[90rem]'>
                        {
                            details?.expectations?.map((expectation, index) => (
                                <div key={index} className="flex flex-col gap-4 items-center w-[14rem]">
                                    <i className={`${expectation?.icon} text-gray-200 text-[2rem]`}></i>
                                    <p className='text-base font-medium'>{expectation?.name}</p>
                                    <p className='text-[0.8rem] text-center'>{expectation?.text}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <Contact />
            </Element>
        </div>
    )
}

export default ProgramDetails