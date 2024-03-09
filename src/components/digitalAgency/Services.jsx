import React from 'react'
import bell from "../../assets/images/bell.png"

const Services = () => {
    const services = [
        { name: "Development", text: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.", icon: bell },
        { name: "Development", text: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.", icon: bell },
        { name: "Development", text: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.", icon: bell },
        { name: "Development", text: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.", icon: bell },
        { name: "Development", text: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.", icon: bell },
        { name: "Development", text: "Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.", icon: bell }
    ]
    return (
        <div className='w-full min-h-[50rem] bg-[#181821] flex justify-center p-[10rem]'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[8rem]'>
                <div className='flex flex-col gap-6 w-[55%]'>
                    <p className="text-xl text-red-700 font-semibold">What We Can Do For You</p>
                    <h2 className='text-6xl text-white'>Services we can help you with</h2>
                    <p className="text-lg font-semibold text-[#888686]">Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p>
                </div>
                <div className="grid grid-cols-3 justify-center gap-6">
                    {
                        services.map((service, index) => (
                            <div className='cursor-pointer bg-transparent hover:bg-gradient-to-b from-[#181821] to-[#404040] transition-all border-t border-[#181821]  hover:border-t-[#454546]  px-[2rem] py-[3rem] flex gap-10 items-start rounded-[3rem]'>
                                <img src={service.icon} className="w-[5.5rem] h-[5.5rem]" />
                                <div className="flex flex-col gap-10">
                                    <h3 className='text-2xl text-white'>{service.name}</h3>
                                    <p className='text-[#888686]'>{service.text}</p>
                                    <div className='flex items-center gap-4'>
                                        <span>
                                            <div className="border-y-2 border-[#dadada] w-10 bg-[#dadada]" />
                                        </span>
                                        <p className='text-white'>Find out more</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Services