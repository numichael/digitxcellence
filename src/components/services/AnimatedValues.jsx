import React, { useState } from 'react'

const AnimatedValues = () => {

    const [services, modifyList] = useState([
        { hovered: false, name: "Experienced Professionals", text: "With extensive industry experience and expertise acquired over many years, our team consistently delivers exceptional results for every project. Leveraging our comprehensive understanding of industry dynamics and emerging trends, we craft tailored solutions that exceed client expectations." },
        { hovered: false, name: "Honesty", text: "In all we do, transparency and integrity shine bright, Guiding us with honesty, our actions alight. You can trust us to always be forthright, For openness and sincerity are our guiding light." },
        { hovered: false, name: "Dedication", text: "Our dedication stands firm, promising solutions that go beyond expectations. Regardless of project size or complexity, we strive for excellence. With tailored approaches, we ensure satisfaction in every endeavor. Trust us to deliver results that surpass your vision." },
        { hovered: false, name: "Continued Support", text: "We're dedicated to standing by your side every step of the way, offering unwavering support and guidance that extends far beyond the completion of the project, ensuring your sustained success, growth, fulfillment, and satisfaction." },
    ])

    const resize = (payload) => {
        modifyList(prevTabs => prevTabs.map(tab => {
            if (tab.name === payload.name) {
                return { ...tab, hovered: !tab.hovered };
            }
            return tab;
        }));
    }

    return (
        <div className='w-full flex flex-col gap-[4rem] lg:gap-[8rem] items-center p-4 lg:py-[3rem]'>
            <div className="w-full flex justify-start max-w-[70rem]">
                <div className='flex flex-col gap-6 w-full lg:w-[65%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">Our Values</p>
                    <h2 className="text-3xl lg:text-6xl text-green-900">Why should you work with us?</h2>
                    <p className="text-[0.85rem] lg:text-lg font-medium">Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p>
                </div>
            </div>
            <div className="w-full max-w-[70rem] grid lg:grid-cols-2 gap-10">
                {
                    services.map((service, index) => (
                        <div key={index} className={`border w-full transition-all duration-500 ${service.hovered ? "h-[30rem]" : "h-[10rem]"} relative bg-green-700`} onMouseEnter={() => resize(service)} onMouseLeave={() => resize(service)}>
                            <div className="flex h-full w-full justify-center items-center relative">
                                <h2 className={`text-2xl text-white transition-all font-medium duration-500 ${service.hovered ? "opacity-0 absolute top-[-1000]" : "opacity-1"}`}>{service.name}</h2>
                                {service.hovered ? <div className={`transition-all w-full h-full duration-500 ${service.hovered ? "opacity-1" : "opacity-0"}`}>
                                    <div className="w-full h-1/2 bg-white"></div>
                                    <div className="w-full text-white h-1/2 p-4 flex flex-col justify-evenly">
                                        <h3 className='font-medium text-xl'>{service.name}</h3>
                                        <p className='text-sm'>{service.text}</p>
                                    </div>
                                </div> : null}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AnimatedValues