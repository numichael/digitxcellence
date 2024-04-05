import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {
    const yearlyPricing = [
        {
            name: "Professional", about: "A beautiful, simple website", price: 19.99, features: [
                "10 Pages Responsive Website", "5 PPC Campaigns", "10 SEO Keywords", "5 Facebook Camplaigns", "2 Video Camplaigns"
            ]
        },
        {
            name: "Standard", about: "A beautiful, simple website", price: 29.99, features: [
                "10 Pages Responsive Website", "5 PPC Campaigns", "10 SEO Keywords", "5 Facebook Camplaigns", "2 Video Camplaigns"
            ]
        },
        {
            name: "Ultimate", about: "A beautiful, simple website", price: 39.99, features: [
                "10 Pages Responsive Website", "5 PPC Campaigns", "10 SEO Keywords", "5 Facebook Camplaigns", "2 Video Camplaigns"
            ]
        },
    ]

    const monthlyPricing = [
        {
            name: "Professional", about: "A beautiful, simple website", price: 222.99, features: [
                "10 Pages Responsive Website", "5 PPC Campaigns", "10 SEO Keywords", "5 Facebook Camplaigns", "2 Video Camplaigns"
            ]
        },
        {
            name: "Standard", about: "A beautiful, simple website", price: 280.99, features: [
                "10 Pages Responsive Website", "5 PPC Campaigns", "10 SEO Keywords", "5 Facebook Camplaigns", "2 Video Camplaigns"
            ]
        },
        {
            name: "Ultimate", about: "A beautiful, simple website", price: 320.99, features: [
                "10 Pages Responsive Website", "5 PPC Campaigns", "10 SEO Keywords", "5 Facebook Camplaigns", "2 Video Camplaigns"
            ]
        },
    ]

    const [onDisplay, switchDisplay] = useState(yearlyPricing)
    return (
        <div className='w-full min-h-[50rem] flex p-4 py-20 lg:p-[10rem] justify-center bg-[#d8e6eb77]'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[3rem] lg:gap-[6rem]'>
                <div className='flex flex-col items-center gap-6'>
                    <p className="lg:text-xl text-red-700 lg:font-semibold">Pricing Plan</p>
                    <h2 className='text-3xl text-center lg:text-6xl'>We’ve built solutions for...</h2>
                    <p className="text-[0.82rem] lg:text-lg  lg:w-[40rem] text-center">Flexible pricing options for freelancers and design teams.</p>
                </div>
                <div className='flex justify-center'>
                    <div className="w-[18rem] lg:w-[25rem] h-16 lg:h-20 rounded-[1rem] bg-white border border-[#d8e6eb77] flex gap-3 p-1 items-center">
                        <button onClick={()=> switchDisplay(monthlyPricing)} autoFocus className='outline-none w-1/2 h-[90%] bg-white focus:bg-blue-500 transition-all duration-500 rounded-[1rem] focus:text-white text-[0.82rem] lg:text-md lg:font-semibold'>Billed Yearly</button>
                        <button onClick={()=> switchDisplay(yearlyPricing)} className='outline-none w-1/2 h-[90%] bg-white focus:bg-blue-500 transition-all duration-500 rounded-[1rem] focus:text-white text-[0.82rem] lg:text-md lg:font-semibold'>Billed Monthly</button>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {
                        onDisplay.map((price, index) => (
                            <div className='w-full lg:w-1/3 h-[36rem] lg:h-[42rem] bg-white rounded-[2rem] p-8 border border-[#b1bec377] flex flex-col gap-10' key={index}>
                                <div className='flex flex-col p-4 border-b border-[#b2bdc177]'>
                                    <h3 className='text-blue-600 text-3xl lg:text-[2.5rem] text-center'>{price.name}</h3>
                                    <p className="text-center">{price.about}</p>
                                </div>
                                <span className='flex items-end justify-center'><h2 className='text-4xl lg:text-7xl'>${price.price}</h2><span className='text-[#525b5e77] text-[0.82rem] lg:text-md pb-2 font-semibold'>{price.price > 100? "/year": "/month"}</span></span>
                                <button className='p-6 lg:p-8 border font-semibold text-[0.82rem] lg:text-lg border-[#525b5e77] rounded-[1.8rem] mx-10'>Get Started Today</button>
                                <div className='flex flex-col gap-4 px-4 text-[#3c424577] font-semibold'>
                                    {
                                        price.features.map((feature, index)=> (
                                            <div key={index} className='flex gap-4 items-center'>
                                                <FontAwesomeIcon icon={faCheck}/>
                                                <p className='text-[0.82rem] lg:text-md'>{feature}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Pricing