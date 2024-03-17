import React from 'react'
import bell from "../../assets/images/bell.png"

const Values = ({ digitalAgency = false }) => {

    const values = [
        { name: "Experienced Professionals", text: "With extensive industry experience and expertise acquired over many years, our team consistently delivers exceptional results for every project. Leveraging our comprehensive understanding of industry dynamics and emerging trends, we craft tailored solutions that exceed client expectations.", icon: bell },
        { name: "Honesty", text: "In all we do, transparency and integrity shine bright, Guiding us with honesty, our actions alight. You can trust us to always be forthright, For openness and sincerity are our guiding light.", icon: bell },
        { name: "Dedication", text: "Our dedication stands firm, promising solutions that go beyond expectations. Regardless of project size or complexity, we strive for excellence. With tailored approaches, we ensure satisfaction in every endeavor. Trust us to deliver results that surpass your vision.", icon: bell },
        { name: "Mentorship", text: "Our mentorship programs for trainees offer tailored guidance and support, empowering individuals to explore their potential, acquire valuable skills, and excel in their chosen paths with confidence and determination.", icon: bell },
        { name: "Continued Support", text: "We're dedicated to standing by your side every step of the way, offering unwavering support and guidance that extends far beyond the completion of the project, ensuring your sustained success, growth, fulfillment, and satisfaction.", icon: bell }
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