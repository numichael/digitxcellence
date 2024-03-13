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
        <div className='w-full min-h-[50rem] bg-[#181821] flex justify-center px-4 py-20 lg:p-[10rem]'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[3rem] lg:gap-[8rem]'>
                <div className='flex flex-col gap-6 w-full lg:w-[55%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">What We Can Do For You</p>
                    <h2 className='text-3xl lg:text-6xl text-white'>Services we can help you with</h2>
                    <p className="text-[0.85rem] lg:text-lg font-semibold text-[#888686]">Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p>
                </div>
                <div className="grid lg:grid-cols-3 justify-center gap-10 lg:gap-6">
                    {
                        services.map((service, index) => (
                            <div key={index} className='cursor-pointer bg-transparent hover:bg-gradient-to-b from-[#181821] to-[#404040] transition-all border-t border-[#181821] hover:border-t-[#454546] p-4 lg:px-[2rem] lg:py-[3rem] flex gap-4 lg:gap-10 items-start rounded-[3rem]'>
                                <img src={service.icon} className="w-[3.5rem] h-[3.5rem] lg:w-[5.5rem] lg:h-[5.5rem]" />
                                <div className="flex flex-col gap-4 lg:gap-10">
                                    <h3 className='text-lg lg:text-2xl text-white'>{service.name}</h3>
                                    <p className='text-[#888686] text-[0.85rem] lg:text-base'>{service.text}</p>
                                    <div className='flex items-center gap-4'>
                                        <span>
                                            <div className="border-y-2 border-[#888686] w-10 " />
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