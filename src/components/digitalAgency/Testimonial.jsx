import React from 'react'
import google from "../../assets/images/google.png"
import testuser from "../../assets/images/test-user.png"

const Testimonial = () => {
    const testimonials = [
        { icon: google, text: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.", name: "Savannah Nguyen", role: "Executive Chairman", userImage: testuser },
        { icon: google, text: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.", name: "Savannah Nguyen", role: "Executive Chairman", userImage: testuser },
        { icon: google, text: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.", name: "Savannah Nguyen", role: "Executive Chairman", userImage: testuser },
    ]
    return (
        <div className='w-full flex p-[10rem] justify-center'>
            <div className='w-full flex flex-col max-w-[90rem] gap-[6rem] justify-center'>
                <div className='flex flex-col gap-8 w-[55%]'>
                    <p className="text-xl text-red-700 font-semibold">Testimonial</p>
                    <h2 className='text-6xl'>From getting started</h2>
                    <p className='text-lg'>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {
                        testimonials.map((testimonial, index) => (
                            <div key={index} className='flex flex-col gap-8 py-16 transition-all duration-500 cursor-pointer border-t border-white hover:border-blue-500'>
                                <div className='w-14 h-14'>
                                    <img src={testimonial.icon} className='w-full h-full' alt="" />
                                </div>
                                <p className='text-[1.4rem]'>"{testimonial.text}"</p>
                                <div className='flex gap-6 items-center'>
                                    <img className="w-14 h-14 rounded-full" src={testimonial.userImage} />
                                    <div className='flex flex-col'>
                                        <h4>{testimonial.name}</h4>
                                        <p className='text-[#888686]'>{testimonial.role}</p>
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