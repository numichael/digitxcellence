import React from 'react'
import marketing from "../../assets/images/marketing.png"

const News = () => {

    const news = [
        {
            name: "How To Use a Remarketing Strategy To Get More",
            text: "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on...",
            image: marketing
        },
        {
            name: "How To Use a Remarketing Strategy To Get More",
            text: "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on...",
            image: marketing
        },
        {
            name: "How To Use a Remarketing Strategy To Get More",
            text: "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on...",
            image: marketing
        },
        {
            name: "How To Use a Remarketing Strategy To Get More",
            text: "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on...",
            image: marketing
        },
    ]
   
    return (
        <div className='w-full min-h-[50rem] flex flex-col p-4 py-20 lg:px-[10rem] gap-[8rem] items-center'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[3rem] lg:gap-[6rem]'>
                <div className='flex flex-col items-center gap-4 lg:gap-6'>
                    <p className="text-[0.85rem] lg:text-xl text-red-700 lg:font-semibold">What's Going On</p>
                    <h2 className='text-3xl lg:text-6xl text-green-950'>Latest stories</h2>
                    <p className="text-[0.85rem] lg:text-base  lg:w-[40rem] text-center">News From Abstrak And Around The World Of Web Design And Complete Solution of Online Digital Marketing</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 w-full border-b max-w-[90rem]">
                {
                    news.map((info, index) => (
                        <div key={index} className='relative'>
                            <div className={`flex flex-col lg:flex-row gap-6 cursor-pointer lg:border-t transition-all duration-500 hover:border-green-700 lg:pl-6 py-8 lg:py-14 mb-6`}>
                                <div className="w-full lg:w-1/2 overflow-hidden rounded-[2rem]">
                                    <img src={info.image} className='hover:scale-125 transition-all duration-500 w-full' alt="" />
                                </div>
                                <div className="w-full lg:w-[40%] flex flex-col justify-evenly gap-4 lg:gap-0">
                                    <h3 className='text-lg lg:text-2xl font-semibold text-green-800 hover:text-green-500 transition-all'>{info.name}</h3>
                                    <p className='text-[#3c424577] text-[0.85rem] lg-text-md'>{info.text}</p>
                                    <h4 className='text-[0.85rem] lg:text-base font-medium text-green-700 hover:text-green-500 transition-all'>{"Learn More >"}</h4>
                                </div>
                            </div>
                            {index % 2 !== 0 ? <div className="absolute top-0 h-full lg:border-r" /> : <div />}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default News