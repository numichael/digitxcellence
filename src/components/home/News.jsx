import React from 'react'
import marketing from "../../assets/images/marketing.png"

const News = () => {

    const news = [
        {
            name: "Marketing Strategies for Better Advertising Campaigns",
            text: "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on...",
            image: marketing,
            link: "https://blog.wishpond.com/post/90564213441/12-advanced-remarketing-tactics-for-the-successful#:~:text=Remarketing%20Strategy%3A%20Remarket%20to%20converted%20customers&text=I'd%20suggest%20you%20tag,your%20brand%20top%20of%20mind."
        },
        {
            name: "How to prepare for your Software Engineer interviews",
            text: "Do you still have trouble getting shortlisted at some or all of the top tech companies? Maximize your chances of being shortlisted.",
            image: marketing,
            link: "https://www.techinterviewhandbook.org/software-engineering-interview-guide/"
        },
        {
            name: "A Roadmap to Becoming a Software Engineer | by Saquib Sam",
            text: "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on...",
            image: marketing,
            link: "https://medium.com/@SaquibSam/a-roadmap-to-becoming-a-software-engineer-by-saquib-sam-da9bbbbea776"
        },
        {
            name: "Web3: Embracing The Future, Trusting The Present",
            text: "Want to know the one thing that every successful digital marketer does first to ensure they get the biggest return on...",
            image: marketing,
            link: "https://www.forbes.com/sites/forbestechcouncil/2023/03/01/web3-embracing-the-future-trusting-the-present/?sh=4f6b5aae3620"
        }
    ]
   
    return (
        <div className='w-full min-h-[50rem] flex flex-col p-4 py-20 lg:px-[10rem] gap-[8rem] items-center'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[3rem] lg:gap-[6rem]'>
                <div className='flex flex-col items-center gap-4 lg:gap-6'>
                    <p className="text-[0.82rem] lg:text-xl text-red-700 lg:font-semibold">What's Going On</p>
                    <h2 className='text-3xl lg:text-6xl text-green-950'>Latest stories</h2>
                    <p className="text-[0.82rem] lg:text-base  lg:w-[40rem] text-center">News From Digit Xcellence And Around The World Of Web Design And Complete Solution of Online Digital Marketing</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 w-full border-b max-w-[90rem]">
                {
                    news.map((info, index) => (
                        <a href={info.link} target='_blank' key={index} className='relative'>
                            <div className={`flex flex-col lg:flex-row gap-6 cursor-pointer lg:border-t transition-all duration-500 hover:border-green-700 lg:pl-6 py-8 lg:py-14 mb-6`}>
                                <div className="w-full lg:w-1/2 overflow-hidden rounded-[2rem]">
                                    <img src={info.image} className='hover:scale-125 transition-all duration-500 w-full' alt="" />
                                </div>
                                <div className="w-full lg:w-[40%] flex flex-col justify-evenly gap-4 lg:gap-0">
                                    <h3 className='text-lg lg:text-[1.3rem] font-semibold text-green-800 hover:text-green-500 transition-all'>{info.name}</h3>
                                    <p className='text-[#3c424577] text-[0.82rem] lg-text-md'>{info.text}</p>
                                    <h4 className='text-[0.82rem] lg:text-base font-medium text-green-700 hover:text-green-500 transition-all'>{"Learn More >"}</h4>
                                </div>
                            </div>
                            {index % 2 !== 0 ? <div className="absolute top-0 h-full lg:border-r" /> : <div />}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default News