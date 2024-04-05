import React from 'react'

const Programs = () => {

    const programs = [
        { duration: "12 Weeks", image: "https://media.istockphoto.com/id/1628291798/photo/artificial-intelligence-and-machine-learning-concept.webp?b=1&s=170667a&w=0&k=20&c=9ZqWrvGtOrpq5mOtEIAM7U9vk_Xl8opTJMMj4DJdU2o=", schedule: "Twice a week", name: "Full Stack Machine Learning", text: "Welcome to the Machine Learning Fundamentals course! In this 12-week curriculum, you will embark on an exciting journey to explore the world of machine…" },
        { duration: "3 Months", image: "https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=ais", schedule: "Twice a week", name: "Ethical Hacking And Counter Measures", text: "Cybersecurity has an estimated 37% growth rate for jobs, faster than the average for other occupations. Gain skills in the occupation with the fastest…" },
        { duration: "3 Months", image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/106/2020/07/CDG_blog_post_image_08.jpg", schedule: "Four times a week", name: "FullStack Web Development", text: "Are you ready to embark on an exciting journey into the world of full-stack development? Our comprehensive Full-Stack Development Course is your gateway to…" },
        { duration: "3 Months", image: "https://fireart.studio/wp-content/uploads/2021/05/product.jpg", schedule: "Four times a week", name: "UI/UX Design and Prototyping (Product Design)", text: "User Interface(UI) and User Experience(UX) design are in great demand and are applicable across products and industry domains. With customer experience being the centerfold…" },
    ]

    return (
        <div className='w-full flex p-4 py-20 lg:p-[10rem] justify-center'>
            <div className='w-full flex flex-col lg:max-w-[90rem] gap-[1rem] items-center'>
                <h2 className='text-center text-2xl font-semibold'>Find your Perfect Program</h2>
                <p className='text-center text-[0.82rem] pb-[2rem]'>Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.</p>
                <div className="w-full grid lg:grid-cols-3 gap-6">
                    {
                        programs.map((program, index) => (
                            <div key={index} className={`border w-full transition-all duration-500 h-[30rem] relative`}>
                                <div className="flex h-full w-full justify-center items-center relative">
                                    <div className={`transition-all w-full h-full duration-500`}>
                                        <div className="w-full h-1/2 bg-white">
                                            <img className='h-full w-full' src={program.image} alt={program.name} />
                                        </div>
                                        <div className="w-full h-1/2 p-4 flex flex-col justify-between">
                                            <h3 className='font-medium text-lg text-green-700'>{program.name}</h3>
                                            <p className='text-[0.82rem]'>{program.text}</p>
                                            <div className="w-full flex justify-between text-[0.82rem]">
                                                <span className='flex gap-2 items-center'>
                                                    <i className="text-green-700 fa-solid fa-calendar-days"></i>
                                                    <p>{program.duration}</p>
                                                </span>
                                                <span className='flex gap-2 items-center'>
                                                    <i className="text-green-700 fa-solid fa-users-viewfinder"></i>
                                                    <p>{program.schedule}</p>
                                                </span>
                                            </div>
                                        </div>
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

export default Programs