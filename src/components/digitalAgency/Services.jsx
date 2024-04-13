import React from 'react'
import {useNavigate} from "react-router-dom"
import { scroller } from 'react-scroll'
import softwareengineering from "../../assets/illustrations/softwareengineering.svg"
import webdesign from "../../assets/illustrations/webdesign.svg"
import marketing from "../../assets/illustrations/marketing.svg"
import academy from "../../assets/illustrations/academy.svg"
import design from "../../assets/illustrations/design.svg"

const Services = ({ digitalAgency = false }) => {
    const navigate = useNavigate()
    const navigateToLink = (payload) => {
        navigate(payload)
        setTimeout(() => {
            scroller.scrollTo("home", { smooth: true, duration: 500 })
        }, 20);
    }

    const services = [
        {link: "", name: "Web Design", text: "We excel at transforming your visions into captivating digital realities, crafting visually stunning websites and ensuring user experiences are seamless. Let's collaborate and venture into uncharted digital territories together.", illustration: webdesign },
        {link: "", name: "Software Development", text: "Unlock the potential of cutting-edge technology with our custom software solutions, crafted to transform your business. From streamlining processes to driving efficiency, we're dedicated to your digital success. Let's innovate and grow together.", illustration: softwareengineering },
        {link: "", name: "Digital Marketing", text: "Establish a commanding online presence with our meticulously crafted, data-driven marketing strategies, perfectly tailored to your objectives. Let's unite to elevate your brand and conquer the digital landscape together.", illustration: marketing },
        {link: "", name: "Graphics Design", text: "Stand out in the digital realm with visually striking graphics that capture attention and foster meaningful connections across platforms. Our customized approach ensures your brand shines uniquely, leaving a lasting impression and sparking lasting engagement.", illustration: design },
        {link: "/academy", name: "Academy", text: "Empower your team with comprehensive training in web design, software development, and digital skills, fostering innovation and excellence. Together, we'll cultivate a culture of growth, propelling your team to new heights of success in the ever-evolving digital landscape.", illustration: academy },
    ]

    return (
        <div className={`w-full min-h-[50rem] bg-[#eeffe2] flex justify-center px-4 py-20 lg:px-[4rem] lg:py-[10rem]`}>
            <div className='w-full flex flex-col max-w-[90rem] gap-[3rem] lg:gap-[8rem]'>
                <div className='flex flex-col gap-6 w-full lg:w-[55%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">Our Services</p>
                    <h2 className={`text-3xl lg:text-6xl text-green-950`}>What We Can Do For You</h2>
                    {digitalAgency ? <p className="text-[0.82rem] lg:text-lg font-medium text-[#888686]">At Digit Xcellence, we're not just another digital agency—we're your partners in success. We have a team of experienced professionals who are dedicated to creating outstanding digital solutions. We provide a complete set of services customized to meet all your needs.</p> : null}
                </div>
                <div className="flex justify-center">
                    <div className="grid justify-center gap-[3rem] max-w-[70rem]">
                        {services.map((service, index) => (
                            <div key={index} className={`relative flex flex-col-reverse ${index % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"} border-t-[3px] border-r-[3px] transition-all duration-500 border-transparent hoveredCard rounded-lg p-8 lg:h-[27rem] gap-[8rem] w-full justify-between`}>
                                <div className="flex flex-col gap-4 lg:gap-4 w-full lg:w-1/2 items-start justify-center">
                                    <h3 className='text-2xl font-semibold text-green-700'>{service.name}</h3>
                                    <p className='text-[0.82rem] lg:text-md'>{service.text}</p>
                                    <button onClick={()=> navigateToLink(service.link)} type='button' className='p-3 outline-none border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-500 text-green-700 font-medium rounded-lg'>Learn More</button>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <img className='w-full h-full' src={service.illustration} alt={service.name} />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services