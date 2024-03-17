import React from 'react'
import bell from "../../assets/images/bell.png"

const Values = ({ digitalAgency = false }) => {

    const values = [
        { name: "Experienced Professionals", text: "Our team brings years of industry experience and expertise to every project, ensuring exceptional results.", icon: bell },
        { name: "Dedication", text: "We're committed to delivering solutions that exceed your expectations, no matter the size or scope of the project.", icon: bell },
        { name: "Honesty", text: "Transparency and integrity are at the core of everything we do. You can trust us to always be upfront and honest.", icon: bell },
        { name: "Mentorship", text: "For trainees, we offer mentorship programs to nurture talent and help individuals reach their full potential.", icon: bell },
        { name: "Continued Support", text: "We're with you every step of the way, providing ongoing support and guidance long after the project is complete.", icon: bell }
    ]

    return (
        <div className={`w-full min-h-[50rem] ${digitalAgency ? "bg-[#181821]" : "bg-[#d8e6eb77]"} flex justify-center px-4 py-20 lg:p-[10rem]`}>
            <div className='w-full flex flex-col max-w-[90rem] gap-[3rem] lg:gap-[8rem]'>
                <div className='flex flex-col gap-6 w-full lg:w-[55%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">Our Values</p>
                    <h2 className={`text-3xl lg:text-6xl ${digitalAgency ? "text-white" : ""}`}>Why should you work with us?</h2>
                    {digitalAgency ? <p className="text-[0.85rem] lg:text-lg font-semibold text-[#888686]">Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p> : null}
                </div>
                <div className="grid lg:grid-cols-3 justify-center">
                    {
                        values.map((service, index) => (
                            <div key={index} className={`transition-all duration-500 cursor-pointer bg-transparent p-4 lg:px-[2rem] py-[3rem]
                             flex flex-col gap-4 lg:gap-10 items-start rounded-[2rem]`}>
                                <div className={`w-[3.5rem] h-[3.5rem] lg:w-[5.5rem] lg:h-[5.5rem] text-5xl rounded-full border flex justify-center items-center ${digitalAgency ? "bg-gradient-to-r from-[#6a6abe] to-[#181821]  border-[#181821] text-white" : " bg-gradient-to-r from-[#d8e6eb77] to bg-[#fff]"}`}>{index + 1}</div>
                                <div className="flex flex-col gap-4 lg:gap-10">
                                    <h3 className={`text-lg lg:text-2xl ${digitalAgency ? "text-white" : ""}`}>{service.name}</h3>
                                    <p className='text-[#888686] text-[0.85rem] lg:text-base'>{service.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Values