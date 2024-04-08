import React from 'react'
import { useNavigate } from 'react-router-dom'

const Programs = () => {

    const programs = [
        {
            applicationStatus: true, location: ["Remote", "On-site"], duration: "3 Months", image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/106/2020/07/CDG_blog_post_image_08.jpg", schedule: "Four times a week", name: "FullStack Web Development",
            text: `Are you prepared to embark on an exciting journey into the multifaceted realm of full-stack development? Our comprehensive
           Full-Stack Development Course is your ticket to unlocking a wealth of opportunities in the
            dynamic world of software engineering. From front-end aesthetics to back-end functionality,
             this course offers a holistic approach, equipping you with the necessary skills and expertise
              to thrive in today's fast-paced tech industry. Whether you're a novice eager to explore the intricacies
               of web development or a seasoned professional looking to expand your skill set,
                our course provides the perfect platform for your advancement and success.` },
        {
            applicationStatus: true, location: ["Remote", "On-site"], duration: "3 Months", image: "https://images.remotehub.com/48fa1a30893411eab1aeea9219b4118a/original_thumb/4724af97.png?version=1588066827", schedule: "Four times a week", name: "Backend Web Development",
            text: `Craft and deploy robust web applications and apps with the versatility of backend 
         languages. Harness their innate security features to ensure the creation of safe and reliable web applications.
          Explore the potential of backend languages to build scalable solutions tailored to modern web development demands.
           Seamlessly integrate these languages into your workflow for streamlined processes and enhanced productivity. 
           With a solid grasp of backend languages, unlock the ability to create innovative web experiences.
          Join us as we delve into the exciting world of backend languages and their transformative impact on web development.` },
        {
            applicationStatus: true, location: ["Remote", "On-site"], duration: "3 Months", image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5928299/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png", schedule: "Four times a week", name: "Frontend Web Development with React JS",
            text: `Embark on your career as a Front-End Web Developer today.
          Discover the art of building top-notch websites and dynamic applications to captivate users.
           Gain expertise in creating seamless user experiences that leave a lasting impact.
            Dive into the intricacies of Front-End Development to unleash your creativity and innovation.
             Let your journey as a Front-End Developer be guided by passion and dedication. 
             Join a community of like-minded individuals and expand your horizons in the ever-evolving field of web development.
          Start your ascent towards excellence in Front-End Development and carve your path to success.` },
        {
            applicationStatus: true, location: ["Remote", "On-site"], duration: "3 Months", image: "https://tortoiseandharesoftware.com/wp-content/uploads/2020/09/WordPress-Design-Considerations-768x401.jpg", schedule: "Four times a week", name: "Web Development (No code)",
            text: `Embark on the exciting journey of web development without needing to code.
         Explore the world of no-code development and unlock the ability to create stunning websites and applications effortlessly.
          With intuitive tools and platforms at your disposal, dive into the realm of web development with ease.
           Build professional-grade websites and web applications without writing a single line of code. 
           Let your creativity flourish as you design and customize your digital creations to perfection.
            Join the growing community of no-code enthusiasts and revolutionize the way you approach web development.
         Start your no-code journey today and witness the limitless possibilities of creating without boundaries.` },
        { applicationStatus: true, location: ["Remote", "On-site"], duration: "3 Months", image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-20302,resizemode-75,msid-100298720/jobs/c-suite/a-day-in-the-life-of-a-product-manager-what-to-expect.jpg", schedule: "Four times a week", name: "Coding class for kids (Age 4+)",
         text: `
         Introduce your child to the world of coding with our interactive coding class designed for kids aged 4 and above.
          Watch as your young learner discovers the fundamentals of programming in a fun and engaging environment.
           With age-appropriate activities and games, we make learning to code a playful and enjoyable experience.
            Spark your child's curiosity and ignite their passion for technology as they embark on this exciting journey.
             Our experienced instructors provide personalized guidance, ensuring that every child progresses at their own pace. 
             Join us in nurturing the next generation of coders and innovators.
          Enroll your child in our coding class today and lay the foundation for a bright future in technology.` },
        { applicationStatus: true, location: ["Remote", "On-site"], duration: "3 Months", image: "https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png", schedule: "Four times a week", name: "Mobile Development", 
        text: `
        Enter the dynamic realm of mobile development and unleash your potential in creating innovative apps for smartphones and tablets.
         Whether you're new or experienced, our resources cater to all levels of expertise. Explore cutting-edge technologies and trends,
          from native to cross-platform solutions. Join a lively community of mobile enthusiasts and collaborate on exciting projects.
           With our support, transform your app ideas into reality and leave a lasting mark in the mobile landscape.
         Start your mobile development journey today and become a force in shaping the future of mobile technology.` },

    ]
    const navigate = useNavigate()
    const navigateToProjectDetails = (payload) => {
        payload = JSON.stringify(payload)
        sessionStorage.setItem('programDetails', payload)
        navigate("/program-details")
    }

    return (
        <div className='w-full flex p-4 py-20 lg:p-[10rem] justify-center'>
            <div className='w-full flex flex-col lg:max-w-[70rem] gap-[1rem] items-center'>
                <h2 className='text-center text-2xl font-semibold text-green-900'>Find your Perfect Program</h2>
                <p className='text-center text-[0.82rem] pb-[2rem]'>Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.</p>
                <div className="w-full flex flex-wrap gap-6 justify-center">
                    {
                        programs.map((program, index) => (
                            <div onClick={() => navigateToProjectDetails(program)} key={index} className={`mb-6 cursor-pointer rounded-md border w-[20rem] transition-all duration-500 h-[30rem] relative`}>
                                <div className="flex h-full w-full justify-center items-center relative">
                                    <div className={`transition-all w-full h-full duration-500`}>
                                        <div className="w-full h-1/2 bg-white">
                                            <img className='h-full w-full rounded-t-md' src={program.image} alt={program.name} />
                                        </div>
                                        <div className="w-full h-1/2 p-4 flex flex-col justify-between">
                                            <h3 className='font-medium text-lg text-green-700'>{program.name}</h3>
                                            <p className='text-[0.82rem]'>{program.text.length > 220 ? program.text.slice(0,215) + "...": program.text}</p>
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