import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { scroller } from 'react-scroll'
import softwareengineering from "../../assets/illustrations/softwareengineering.svg"
import webdesign from "../../assets/illustrations/webdesign.svg"
import academy from "../../assets/illustrations/academy.svg"
import design from "../../assets/illustrations/design.svg"
import { useInView } from 'react-intersection-observer'

const Services = ({ digitalAgency = false }) => {

    const services = [
        {
            expectations: [
                { text: "Benefit from the expertise of seasoned professionals who will assist you in building your website.", name: "Experienced Professionals", icon: "fa-solid fa-user-tie" },
                { text: "Receive a custom-built website tailored to your specifications.", name: "Custom Design", icon: "fa-brands fa-sketch" },
                { text: "Experience a user-friendly and visually appealing website that enhances your online presence.", name: "Engaging Design", icon: "fa-solid fa-seedling" },
                { text: "Join a thriving community of clients, fostering collaboration and idea exchange.", name: "Client Community", icon: "fa-solid fa-users" },
                { text: "Access reliable and responsive support from our team whenever you need assistance with your website.", name: "24/7 Support", icon: "fa-solid fa-headset" },
                { text: "Engage in collaborative, project-based development to ensure your website meets your business goals.", name: "Collaborative Development", icon: "fa-solid fa-diagram-project" },
                { text: "Participate in interactive sessions to provide feedback and make adjustments throughout the development process.", name: "Interactive Feedback", icon: "fa-brands fa-teamspeak" }
            ]
            , image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D", name: "Web Design", text: "We excel at transforming your visions into captivating digital realities, crafting visually stunning websites and ensuring user experiences are seamless. Let's collaborate and venture into uncharted digital territories together.", illustration: webdesign
        },
        {
            expectations: [
                { text: "Benefit from the expertise of seasoned professionals who will assist you in building your website.", name: "Experienced Professionals", icon: "fa-solid fa-user-tie" },
                { text: "Receive a custom-built website tailored to your specifications.", name: "Custom Design", icon: "fa-brands fa-sketch" },
                { text: "Experience a user-friendly and visually appealing website that enhances your online presence.", name: "Engaging Design", icon: "fa-solid fa-seedling" },
                { text: "Join a thriving community of clients, fostering collaboration and idea exchange.", name: "Client Community", icon: "fa-solid fa-users" },
                { text: "Access reliable and responsive support from our team whenever you need assistance with your website.", name: "24/7 Support", icon: "fa-solid fa-headset" },
                { text: "Engage in collaborative, project-based development to ensure your website meets your business goals.", name: "Collaborative Development", icon: "fa-solid fa-diagram-project" },
                { text: "Participate in interactive sessions to provide feedback and make adjustments throughout the development process.", name: "Interactive Feedback", icon: "fa-brands fa-teamspeak" }
            ]
            , image: "https://media.istockphoto.com/id/1345397067/video/black-male-creating-cellphone-app-on-computer.jpg?s=640x640&k=20&c=9OuJ_DRF48U1GDFZ7QUanLsF3yqT2jjEJc81SGbCIm0=", name: "App Development", text: "Unlock the potential of advanced technology with our specialized app development solutions. Engineered for efficiency and digital transformation, let's collaborate to innovate and achieve unprecedented growth together.", illustration: softwareengineering
        },
        {
            expectations: [
                { text: "Benefit from the expertise of seasoned professionals who will assist you in building your website.", name: "Experienced Professionals", icon: "fa-solid fa-user-tie" },
                { text: "Receive a custom-built website tailored to your specifications.", name: "Custom Design", icon: "fa-brands fa-sketch" },
                { text: "Experience a user-friendly and visually appealing website that enhances your online presence.", name: "Engaging Design", icon: "fa-solid fa-seedling" },
                { text: "Join a thriving community of clients, fostering collaboration and idea exchange.", name: "Client Community", icon: "fa-solid fa-users" },
                { text: "Access reliable and responsive support from our team whenever you need assistance with your website.", name: "24/7 Support", icon: "fa-solid fa-headset" },
                { text: "Engage in collaborative, project-based development to ensure your website meets your business goals.", name: "Collaborative Development", icon: "fa-solid fa-diagram-project" },
                { text: "Participate in interactive sessions to provide feedback and make adjustments throughout the development process.", name: "Interactive Feedback", icon: "fa-brands fa-teamspeak" }
            ]
            , image: "https://www.shutterstock.com/image-photo/african-graphic-web-designer-using-600nw-1835921389.jpg", name: "Graphics Design", text: "Stand out in the digital realm with visually striking graphics that capture attention and foster meaningful connections across platforms. Our customized approach ensures your brand shines uniquely, leaving a lasting impression and sparking lasting engagement.", illustration: design
        },
        {
            expectations: [
                { text: "Benefit from the expertise of seasoned professionals who will assist you in building your website.", name: "Experienced Professionals", icon: "fa-solid fa-user-tie" },
                { text: "Receive a custom-built website tailored to your specifications.", name: "Custom Design", icon: "fa-brands fa-sketch" },
                { text: "Experience a user-friendly and visually appealing website that enhances your online presence.", name: "Engaging Design", icon: "fa-solid fa-seedling" },
                { text: "Join a thriving community of clients, fostering collaboration and idea exchange.", name: "Client Community", icon: "fa-solid fa-users" },
                { text: "Access reliable and responsive support from our team whenever you need assistance with your website.", name: "24/7 Support", icon: "fa-solid fa-headset" },
                { text: "Engage in collaborative, project-based development to ensure your website meets your business goals.", name: "Collaborative Development", icon: "fa-solid fa-diagram-project" },
                { text: "Participate in interactive sessions to provide feedback and make adjustments throughout the development process.", name: "Interactive Feedback", icon: "fa-brands fa-teamspeak" }
            ]
            , image: "https://blackboyscode.ca/wp-content/uploads/2020/03/black-boys-code-noya-09-min-1568x1046.jpg", name: "Academy", text: "Empower your team with comprehensive training in web design, software development, and digital skills, fostering innovation and excellence. Together, we'll cultivate a culture of growth, propelling your team to new heights of success in the ever-evolving digital landscape.", illustration: academy
        },
    ];

    return (
        <div className={`w-full min-h-[50rem] bg-green-50 flex justify-center px-4 py-20 lg:px-[4rem] lg:py-[10rem]`}>
            <div className='w-full flex flex-col max-w-[90rem] gap-[1rem] lg:gap-[8rem]'>
                <div className='flex flex-col gap-6 w-full lg:w-[55%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">Our Services</p>
                    <h2 className={`text-3xl lg:text-6xl text-green-950`}>What We Can Do For You</h2>
                    {digitalAgency ? <p className="text-[0.82rem] lg:text-lg font-medium text-[#888686]">At Digit Xcellence, we're not just another digital agency—we're your partners in success. We have a team of experienced professionals who are dedicated to creating outstanding digital solutions. We provide a complete set of services customized to meet all your needs.</p> : null}
                </div>
                <div className="flex justify-center">
                    <div className="grid justify-center gap-[4rem] max-w-[70rem]">
                        {services.map((service, index) => (
                            <ServiceCard key={index} payload={service} {...service} index={index} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

const ServiceCard = ({ name, text, illustration, index, payload }) => {
    const navigate = useNavigate()
    const navigateToLink = (payload) => {
        navigate(payload)
        setTimeout(() => {
            scroller.scrollTo("home", { smooth: true, duration: 500 })
        }, 20);
    }
    const { ref, inView } = useInView();
    const propsToRight = { left: inView ? "-0rem" : "-6rem" }
    const propsToLeft = { right: inView ? "-0rem" : "-6rem" }
    const navigateToServiceDetails = (payload) => {
        payload = JSON.stringify(payload)
        sessionStorage.setItem('serviceDetails', payload)
        navigate("/service-details")
        setTimeout(() => {
            scroller.scrollTo("home", { smooth: true, duration: 500 })
        }, 20);
    }


    return (
        <div onClick={() => navigateToServiceDetails(payload)} className={`relative flex flex-col-reverse ${index % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"} border-t-[3px] border-r-[3px] transition-all duration-500 border-transparent hoveredCard rounded-lg p-4 lg:p-8 lg:h-[27rem] gap-[2rem] lg:gap-[8rem] w-full justify-between`}>
            <div ref={ref} style={index % 2 === 0 ? propsToLeft : propsToRight} className={`relative transition-all duration-1000 flex flex-col gap-4 lg:gap-4 w-full lg:w-1/2 items-start justify-center`}>
                <h3 className='text-2xl font-semibold text-green-700'>{name}</h3>
                <p className='text-[0.82rem] lg:text-md'>{text}</p>
                <button onClick={() => navigateToLink("")} type='button' className='p-3 outline-none border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-500 text-green-700 font-medium rounded-lg'>Learn More</button>
            </div>
            <div className="w-full lg:w-1/2">
                <img className='w-full h-full' src={illustration} alt={name} />
            </div>
        </div>
    );
};

export default Services
