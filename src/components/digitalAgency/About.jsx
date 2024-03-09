import React, { useState } from 'react'

const About = () => {

    const [formData, fillForm] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleInputs = (e) => {
        fillForm({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='w-full flex p-[10rem] bg-[#d8e6eb77] justify-center'>
            <div className='w-full flex max-w-[90rem] gap-[8rem] items-center'>
                <div className='flex flex-col gap-10 w-[55%]'>
                    <p className="text-xl text-red-700 font-semibold">About Us</p>
                    <h2 className='text-6xl'>We do design, code & develop.</h2>
                    <div className="flex flex-col gap-6">
                        <p className="text-lg">Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat suscipit dui, eget maximus tellus blandit a.
                            Praesent non tellus sed ligula commodo blandit in et mauris. Quisque efficitur ipsum ut dolor molestie pellentesque.</p>
                        <p className='text-lg'>Nulla pharetra hendrerit mi quis dapibus.
                            Quisque luctus, tortor a venenatis fermentum, est lacus feugiat nisl, id pharetra odio enim eget libero.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-10 p-14 bg-white w-[45%] rounded-[2rem]'>
                    <h3 className='text-4xl'>Get a free Keystroke quote now</h3>
                    <div className="flex flex-col gap-4">
                        <>
                            <p className='font-semibold'>Name</p>
                            <input type="text" onChange={handleInputs} name='name' className='w-full rounded-[1rem] p-6 border border-[#d8e6eb77]' placeholder='John Smith' />
                        </>
                        <>
                            <p className='font-semibold'>Email</p>
                            <input type="email" onChange={handleInputs} name='email' className='w-full rounded-[1rem] p-6 border border-[#d8e6eb77]' placeholder='example@mail.com' />
                        </>
                        <>
                            <p className='font-semibold'>Phone</p>
                            <input type="text" onChange={handleInputs} name='phone' className='w-full rounded-[1rem] p-6 border border-[#d8e6eb77]' placeholder='+123456789' />
                        </>
                    </div>
                    <button className='p-[2rem] text-white font-semibold rounded-[2rem] bg-blue-500'>Get Free Quote</button>

                </div>
            </div>
        </div>
    )
}

export default About