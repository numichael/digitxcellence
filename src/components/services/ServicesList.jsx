import React, { useState } from 'react'

const ServicesList = () => {

    const [services, modifyList] = useState([
        { hovered: false, name: "Service 1" },
        { hovered: false, name: "Service 2" },
        { hovered: false, name: "Service 3" },
        { hovered: false, name: "Service 4" },
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
            <div className="w-full max-w-[90rem] grid lg:grid-cols-2 gap-10">
                {
                    services.map((service, index) => (
                        <div key={index} className={`w-full transition-all duration-500 ${service.hovered ? "h-[30rem]" : "h-[10rem]"} relative bg-red-400`} onMouseEnter={() => resize(service)} onMouseLeave={() => resize(service)}>
                            <div className="flex h-full justify-center items-center relative">
                                <h2 className={`text-3xl transition-all duration-500 ${service.hovered? "opacity-0 absolute top-[-1000]": "opacity-1"}`}>{service.name}</h2>
                                <div className={`transition-all duration-500 ${service.hovered? "opacity-1": "opacity-0"}`}>
                                    <h3 className='text-2xl'>{service.name}</h3>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesList