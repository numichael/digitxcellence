import React from 'react'
import newImg from "../../assets/illustrations/new.svg"

const Services = ({ digitalAgency = false }) => {

    const services = [
        { name: "Web Design", text: "With our mastery in digital craftsmanship, we breathe life into your visions, sculpting elegant websites and orchestrating mesmerizing user journeys. From pixel-perfect designs to seamless interactions, we are your partners in transforming aspirations into immersive digital experiences. Let's embark on this journey together and redefine what's possible in the digital realm.", illustration: newImg },
        { name: "Software Development", text: "Harness the transformative power of cutting-edge technology with our bespoke software solutions, meticulously crafted to revolutionize your business operations. From seamless process automation to unparalleled efficiency gains, we are dedicated to driving your success in the digital era. Let's embark on this journey of innovation and growth together.", illustration: newImg },
        { name: "Digital Marketing", text: "Craft a commanding digital presence and unlock tangible outcomes with our meticulously tailored, data-driven digital marketing strategies. We're dedicated to aligning every tactic with your unique business goals, ensuring your online presence resonates powerfully and delivers exceptional results. Let's collaborate to elevate your brand and drive success in the digital landscape.", illustration: newImg },
        { name: "Graphics Design", text: "Set yourself apart as a beacon of distinction in the digital landscape with visually captivating graphics that not only seize attention but also forge profound connections across diverse platforms. Our tailored approach ensures your brand emerges uniquely amidst the competition, leaving an unforgettable impression and igniting enduring engagement.", illustration: newImg },
        { name: "Academy", text: "Ignite the spark of innovation within your team through comprehensive training in web design, software development, coding for kids, and digital skills. By nurturing their talents and honing their abilities, we empower them to unleash their full potential as the driving force behind the next wave of technological advancement. Together, let's cultivate a culture of growth and excellence that propels your team to new heights of success.", illustration: newImg },
    ]

    return (
        <div className={`w-full min-h-[50rem] bg-[#eeffe2] flex justify-center px-4 py-20 lg:px-[4rem] lg:py-[10rem]`}>
            <div className='w-full flex flex-col max-w-[90rem] gap-[3rem] lg:gap-[8rem]'>
                <div className='flex flex-col gap-6 w-full lg:w-[55%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">What We Can Do For You</p>
                    <h2 className={`text-3xl lg:text-6xl`}>Services we can help you with</h2>
                    {digitalAgency ? <p className="text-[0.85rem] lg:text-lg font-medium text-[#888686]">At Digit Xcellence, we're not just another digital agency—we're your partners in success. With a team of seasoned professionals dedicated to crafting exceptional digital solutions, we offer a comprehensive suite of services tailored to meet your every need.</p> : null}
                </div>
                <div className="flex justify-center">
                    <div className="grid justify-center gap-[3rem] max-w-[70rem]">
                        {
                            services.map((service, index) => (
                                <div className={`relative flex flex-col-reverse ${index % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"} border-t-[3px] border-r-[3px] transition-all duration-500 border-transparent hover:border-green-700 hover:scale-[1.05] rounded-lg p-8 lg:h-[27rem] gap-[8rem] w-full justify-between`}>
                                    <div className="flex flex-col gap-4 lg:gap-8 w-full lg:w-1/2 items-start justify-center">
                                        <h3 className='text-2xl font-semibold text-green-900'>{service.name}</h3>
                                        <p className='text-[0.85rem] lg:text-md'>{service.text}</p>
                                        <button type='button' className='p-3 outline-none border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-500 text-green-700 font-medium rounded-lg'>Learn More</button>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <img className='w-full h-full' src={service.illustration} alt={service.name} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services