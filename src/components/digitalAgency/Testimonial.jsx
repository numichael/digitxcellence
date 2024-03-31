import React from 'react'
import google from "../../assets/images/google.png"
import testuser from "../../assets/images/test-user.png"

const Testimonial = () => {
    const testimonials = [
        { icon: google, text: "We worked with the team at Digit Xcellence to design our Autism Awareness Foundation company website and we couldn't be happier with the result.", name: "Omotoke T. Olowo", role: "Executive Director, TheraConnect Nigeria", userImage: testuser },
        { icon: google, text: "Working with Digit Xcellence was a pleasure. They were responsive, reliable, and delivered a top-quality web and mobile application on time and on budget.", name: "Kukoyi A. Abayomi", role: "CEO, Technoomni LLC", userImage: testuser },
        { icon: google, text: "I have worked with several software development companies n the past, but none of them compare to Digit Xcellence. They are truly experts in their field.", name: "Damilola Alabi", role: "Creative Director, Fusion 87 Design", userImage: testuser },
    ]
    return (
        <div className='w-full flex p-4 py-20 lg:p-[10rem] justify-center'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[3rem] lg:gap-[4rem] justify-center'>
                <div className='flex flex-col gap-8 w-full lg:w-[55%]'>
                    <p className="text-[0.85rem] lg:text-xl text-red-700 lg:font-semibold">Testimonial</p>
                    <h2 className='text-3xl lg:text-6xl text-green-950'>From getting started</h2>
                    <p className='text-[0.85rem] lg:text-lg'>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-6">
                    {
                        testimonials.map((testimonial, index) => (
                            <div key={index} className='flex flex-col gap-6 lg:gap-8 py-8 lg:py-16 transition-all duration-500 cursor-pointer border-t border-white hover:border-green-700'>
                                <div className='w-10 h-10 lg:w-12 lg:h-12'>
                                    <img src={testimonial.icon} className='w-full h-full' alt="" />
                                </div>
                                <i className='text-[0.85rem] lg:text-[1rem]'>"{testimonial.text}"</i>
                                <div className='flex gap-6 items-center'>
                                    <img className="w-12 h-12 lg:w-14 lg:h-14 rounded-full" src={testimonial.userImage} />
                                    <div className='flex flex-col'>
                                        <h4 className='font-medium text-green-700'>{testimonial.name}</h4>
                                        <p className='text-[0.85rem] text-[#888686]'>{testimonial.role}</p>
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

export default Testimonial