import React from 'react'

const Programs = () => {

    const programs = [
        { duration: "12 Weeks", image: "https://media.istockphoto.com/id/1628291798/photo/artificial-intelligence-and-machine-learning-concept.webp?b=1&s=170667a&w=0&k=20&c=9ZqWrvGtOrpq5mOtEIAM7U9vk_Xl8opTJMMj4DJdU2o=", schedule: "Twice a week", name: "Full Stack Machine Learning", text: "Welcome to the Machine Learning Fundamentals course! In this 12-week curriculum, you will embark on an exciting journey to explore the world of machine…" },
        { duration: "3 Months", image: "https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712188800&semt=ais", schedule: "Twice a week", name: "Ethical Hacking And Counter Measures", text: "Cybersecurity has an estimated 37% growth rate for jobs, faster than the average for other occupations. Gain skills in the occupation with the fastest…" },
        { duration: "3 Months", image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/106/2020/07/CDG_blog_post_image_08.jpg", schedule: "Four times a week", name: "FullStack Web Development", text: "Are you ready to embark on an exciting journey into the world of full-stack development? Our comprehensive Full-Stack Development Course is your gateway to…" },
        { duration: "3 Months", image: "https://fireart.studio/wp-content/uploads/2021/05/product.jpg", schedule: "Four times a week", name: "UI/UX Design and Prototyping (Product Design)", text: "User Interface(UI) and User Experience(UX) design are in great demand and are applicable across products and industry domains. With customer experience being the centerfold…" },
        { duration: "3 Months", image: "https://images.remotehub.com/48fa1a30893411eab1aeea9219b4118a/original_thumb/4724af97.png?version=1588066827", schedule: "Four times a week", name: "Backend With Python Django", text: "Build and deploy robust web applications and apps using Django. Using Django’s security implications to create safe web applications with it." },
        { duration: "3 Months", image: "https://api.careers.fresenius.com/images/4a9e0fed-f1d2-49ce-92d1-8af5ba2df041", schedule: "Four times a week", name: "Datascience with Python", text: "Python is one of the most popular programming languages for high-level data processing, due to its simple syntax, easy readability, and easy comprehension." },
        { duration: "3 Months", image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5928299/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png", schedule: "Four times a week", name: "Frontend Web Development with React JS", text: "Start off your career today as a Front-End Web Developer. Learn to build high quality websites with dynamic applications to create stunning user experiences…" },
        { duration: "3 Months", image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-20302,resizemode-75,msid-100298720/jobs/c-suite/a-day-in-the-life-of-a-product-manager-what-to-expect.jpg", schedule: "Four times a week", name: "Product Management", text: "This training is designed to help you start your career in Product Management. Designed for those looking to get started in the industry and…" },
        { duration: "3 Months", image: "https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png", schedule: "Four times a week", name: "Data Analytics Bootcamp", text: "The Data Analytics Bootcamp is a Beginners’ Course designed to equip individuals with relevant skills and knowledge in tools like Excel, SQL & Power…" },
        { duration: "3 Months", image: "https://tortoiseandharesoftware.com/wp-content/uploads/2020/09/WordPress-Design-Considerations-768x401.jpg", schedule: "Four times a week", name: "Web Development with WordPress", text: "In this comprehensive program, you will embark on an exciting journey to master the art of building dynamic and engaging websites using the powerful…" },
    ]

    return (
        <div className='w-full flex p-4 py-20 lg:p-[10rem] justify-center'>
            <div className='w-full flex flex-col lg:max-w-[70rem] gap-[1rem] items-center'>
                <h2 className='text-center text-2xl font-semibold text-green-900'>Find your Perfect Program</h2>
                <p className='text-center text-[0.82rem] pb-[2rem]'>Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.</p>
                <div className="w-full grid lg:grid-cols-3 gap-6">
                    {
                        programs.map((program, index) => (
                            <div key={index} className={`mb-6 cursor-pointer border w-full transition-all duration-500 h-[30rem] relative`}>
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