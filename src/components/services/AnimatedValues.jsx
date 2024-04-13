import React, { useState } from 'react'

const AnimatedValues = () => {

    const [values, modifyList] = useState([
        { image: `https://img.freepik.com/free-photo/pensive-young-female-employee-using-tablet-outside_74855-1176.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1712016000&semt=ais`, hovered: false, name: "Experienced Professionals", text: "With extensive industry experience and expertise acquired over many years, our team consistently delivers exceptional results for every project. Leveraging our comprehensive understanding of industry dynamics and emerging trends, we craft tailored solutions that exceed client expectations." },
        { image: `https://prod.wp.cdn.aws.wfu.edu/sites/22/2023/10/iStock-1130282840.honesty.blog_.jpg`, hovered: false, name: "Honesty", text: "In all we do, transparency and integrity shine bright, Guiding us with honesty, our actions alight. You can trust us to always be forthright, For openness and sincerity are our guiding light." },
        { image: `https://st3.depositphotos.com/7865540/12758/i/450/depositphotos_127584304-stock-photo-businessman-writing-on-blackboard.jpg`, hovered: false, name: "Dedication", text: "Our dedication stands firm, promising solutions that go beyond expectations. Regardless of project size or complexity, we strive for excellence. With tailored approaches, we ensure satisfaction in every endeavor. Trust us to deliver results that surpass your vision." },
        { image: `https://media.istockphoto.com/id/1177089402/photo/what-is-next-handwritten-with-white-marker.jpg?s=612x612&w=0&k=20&c=QjVaEFpbPqdltLIe6Kz6F8sUBYTIgrmB2rPZ_K7Y_jI=`, hovered: false, name: "Continued Support", text: "We're dedicated to standing by your side every step of the way, offering unwavering support and guidance that extends far beyond the completion of the project, ensuring your sustained success, growth, fulfillment, and satisfaction." },
    ])

    const resize = (payload) => {
        modifyList(prevTabs => prevTabs.map(tab => {
            if (tab.name === payload.name) {
                return { ...tab, hovered: !tab.hovered };
            }
            return tab;
        }));
    }

    return (
        <div className='w-full flex flex-col gap-[4rem] lg:gap-[8rem] items-center p-4 lg:py-[3rem]'>
            <div className="w-full flex justify-start max-w-[70rem]">
                <div className='flex flex-col gap-6 w-full lg:w-[65%]'>
                    <p className="text-base lg:text-xl text-red-700 lg:font-semibold">Our Values</p>
                    <h2 className="text-3xl lg:text-6xl text-green-900">Why should you work with us?</h2>
                    <p className="text-[0.82rem] lg:text-lg font-medium">Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p>
                </div>
            </div>
            <div className="w-full max-w-[70rem] grid lg:grid-cols-2 gap-10">
                {
                    values.map((value, index) => (
                        <div key={index} className={`border w-full transition-all duration-500 ${value.hovered ? "h-[30rem]" : "h-[10rem]"} relative bg-green-700`} onClick={() => resize(value)} onMouseEnter={() => resize(value)} onMouseLeave={() => resize(value)}>
                            <div className="flex h-full w-full justify-center items-center relative">
                                {window.screen.width > 700 ?
                                    <p className={`absolute bottom-2 right-4 text-[0.8rem] text-white  ${value.hovered ? "opacity-0 absolute top-[-1000]" : "opacity-1"}`}><span><i className="text-green-200 fa-solid fa-computer-mouse"></i></span> Hover to open</p>
                                    :
                                    <p className={`absolute bottom-2 right-4 text-[0.8rem] text-white  ${value.hovered ? "opacity-0 absolute top-[-1000]" : "opacity-1"}`}><span><i className="text-green-200 rotate-[180deg] fa-regular fa-hand-point-down"></i></span> Click to open</p>}
                                <h2 className={`text-2xl text-white transition-all font-medium duration-500 ${value.hovered ? "opacity-0 absolute top-[-1000]" : "opacity-1"}`}>{value.name}</h2>
                                {value.hovered ? <div className={`transition-all w-full h-full duration-500 ${value.hovered ? "opacity-1" : "opacity-0"}`}>
                                    <div className="w-full h-1/2 bg-white">
                                        <img className='h-full w-full' src={value.image} alt={value.name} />
                                    </div>
                                    <div className="w-full text-white h-1/2 p-4 flex flex-col justify-evenly">
                                        <h3 className='font-medium text-xl'>{value.name}</h3>
                                        <p className='text-sm'>{value.text}</p>
                                    </div>
                                </div> : null}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AnimatedValues