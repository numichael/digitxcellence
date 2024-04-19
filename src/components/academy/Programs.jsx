import React from 'react'
import { scroller } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const Programs = () => {

    const programs = [
        // duration
        {
            courseDetails: [
                {
                    children: [
                        { textHeader: "", text: "Full-stack development is the art of creating web applications that seamlessly integrate both the client-side (frontend) and server-side (backend) components. In this course, you’ll dive deep into the world of web development, learning how to build visually stunning user interfaces and robust server-side functionality." },
                    ],
                    clicked: false, name: "About the course"
                },
                {
                    children: [
                        { textHeader: "Comprehensive Curriculum", text: "Our course is designed to provide you with a well-rounded education, covering all essential aspects of full-stack development, from the fundamentals of HTML, CSS, and JavaScript to server-side scripting, databases, and server deployment." },
                        { textHeader: "Real-World Projects", text: "You won’t just learn theory; you’ll apply your skills to real-world projects that mimic scenarios you’ll encounter in the industry." },
                        { textHeader: "Experienced Instructors", text: "Our instructors are industry professionals with years of experience in web development. They’ll guide you through every step of the learning process." },
                        { textHeader: "Job-Ready Skills", text: "By the end of this course, you’ll have a portfolio of projects and the skills needed to pursue a career in web development or even launch your own web-based startup." },
                        { textHeader: "", text: "Discussion and Networking with classmates" }
                    ],
                    clicked: false, name: "Why choose this course"
                },
                {
                    children: [
                        { textHeader: "", text: "A computer on which you can install software (Windows, MacOS, or Linux)" },
                        { textHeader: "", text: "Basic computer skills" },
                        { textHeader: "", text: "Introduction to software development" },
                        { textHeader: "", text: "Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)" },
                    ],
                    clicked: false, name: "Prerequisites"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Course Outline"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Class Schedule"
                },

            ],
            projects: 5, startDate: "15th April, 2024", expectations: [
                { text: "You’ll be taught and mentored by some of the best teachers in the industry.", name: "Experienced Teachers", icon: "fa-solid fa-person-chalkboard" },
                { text: "Get your very own physical certificate to prove your participation", name: "Certification", icon: "fa-solid fa-certificate" },
                { text: "Get useful support from our team all round the clock", name: "Real Time Support", icon: "fa-solid fa-headset" },
                { text: "Become part of an ever-growing, supportive community of like minds", name: "Team Building", icon: "fa-solid fa-users" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Conducive Environment", icon: "fa-solid fa-seedling" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Project Based Learning", icon: "fa-solid fa-diagram-project" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: " Practical classes", icon: "fa-brands fa-teamspeak" },
            ], requiredLevel: "Beginner - Intermediate", cost: 500000, prerequisites: ['A laptop',
                'A computer on which you can install software (Windows, MacOS, or Linux)',
                'Basic computer skills',
                'Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)'
                , 'Introduction to software development'], applicationStatus: true, location: ["Remote", "On-site"], duration: "3 Months",
            image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5928299/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png", schedule: "3 days a week", name: "Frontend Web Development with React JS",
            text: `Embark on your career as a Front-End Web Developer today.
          Discover the art of building top-notch websites and dynamic applications to captivate users.
           Gain expertise in creating seamless user experiences that leave a lasting impact.
            Dive into the intricacies of Front-End Development to unleash your creativity and innovation.
             Let your journey as a Front-End Developer be guided by passion and dedication. 
             Join a community of like-minded individuals and expand your horizons in the ever-evolving field of web development.
          Start your ascent towards excellence in Front-End Development and carve your path to success.` },
        {
            courseDetails: [
                {
                    children: [
                        { textHeader: "", text: "Full-stack development is the art of creating web applications that seamlessly integrate both the client-side (frontend) and server-side (backend) components. In this course, you’ll dive deep into the world of web development, learning how to build visually stunning user interfaces and robust server-side functionality." },
                    ],
                    clicked: false, name: "About the course"
                },
                {
                    children: [
                        { textHeader: "Comprehensive Curriculum", text: "Our course is designed to provide you with a well-rounded education, covering all essential aspects of full-stack development, from the fundamentals of HTML, CSS, and JavaScript to server-side scripting, databases, and server deployment." },
                        { textHeader: "Real-World Projects", text: "You won’t just learn theory; you’ll apply your skills to real-world projects that mimic scenarios you’ll encounter in the industry." },
                        { textHeader: "Experienced Instructors", text: "Our instructors are industry professionals with years of experience in web development. They’ll guide you through every step of the learning process." },
                        { textHeader: "Job-Ready Skills", text: "By the end of this course, you’ll have a portfolio of projects and the skills needed to pursue a career in web development or even launch your own web-based startup." },
                        { textHeader: "", text: "Discussion and Networking with classmates" }
                    ],
                    clicked: false, name: "Why choose this course"
                },
                {
                    children: [
                        { textHeader: "", text: "A computer on which you can install software (Windows, MacOS, or Linux)" },
                        { textHeader: "", text: "Basic computer skills" },
                        { textHeader: "", text: "Introduction to software development" },
                        { textHeader: "", text: "Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)" },
                    ],
                    clicked: false, name: "Prerequisites"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Course Outline"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Class Schedule"
                },

            ],
            projects: 5, startDate: "15th April, 2024", expectations: [
                { text: "You’ll be taught and mentored by some of the best teachers in the industry.", name: "Experienced Teachers", icon: "fa-solid fa-person-chalkboard" },
                { text: "Get your very own physical certificate to prove your participation", name: "Certification", icon: "fa-solid fa-certificate" },
                { text: "Get useful support from our team all round the clock", name: "Real Time Support", icon: "fa-solid fa-headset" },
                { text: "Become part of an ever-growing, supportive community of like minds", name: "Team Building", icon: "fa-solid fa-users" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Conducive Environment", icon: "fa-solid fa-seedling" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Project Based Learning", icon: "fa-solid fa-diagram-project" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: " Practical classes", icon: "fa-brands fa-teamspeak" },
            ], requiredLevel: "Beginner - Intermediate", cost: 500000, prerequisites: ['A laptop',
                'A computer on which you can install software (Windows, MacOS, or Linux)',
                'Basic computer skills',
                'Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)'
                , 'Introduction to software development'], applicationStatus: true, location: ["Remote", "On-site"], duration: "4 Months",
            image: "https://images.remotehub.com/48fa1a30893411eab1aeea9219b4118a/original_thumb/4724af97.png?version=1588066827", schedule: "3 days a week", name: "Backend Web Development",
            text: `Craft and deploy robust web applications and apps with the versatility of backend 
         languages. Harness their innate security features to ensure the creation of safe and reliable web applications.
          Explore the potential of backend languages to build scalable solutions tailored to modern web development demands.
           Seamlessly integrate these languages into your workflow for streamlined processes and enhanced productivity. 
           With a solid grasp of backend languages, unlock the ability to create innovative web experiences.
          Join us as we delve into the exciting world of backend languages and their transformative impact on web development.` },
        {
            courseDetails: [
                {
                    children: [
                        { textHeader: "", text: "Full-stack development is the art of creating web applications that seamlessly integrate both the client-side (frontend) and server-side (backend) components. In this course, you’ll dive deep into the world of web development, learning how to build visually stunning user interfaces and robust server-side functionality." },
                    ],
                    clicked: false, name: "About the course"
                },
                {
                    children: [
                        { textHeader: "Comprehensive Curriculum", text: "Our course is designed to provide you with a well-rounded education, covering all essential aspects of full-stack development, from the fundamentals of HTML, CSS, and JavaScript to server-side scripting, databases, and server deployment." },
                        { textHeader: "Real-World Projects", text: "You won’t just learn theory; you’ll apply your skills to real-world projects that mimic scenarios you’ll encounter in the industry." },
                        { textHeader: "Experienced Instructors", text: "Our instructors are industry professionals with years of experience in web development. They’ll guide you through every step of the learning process." },
                        { textHeader: "Job-Ready Skills", text: "By the end of this course, you’ll have a portfolio of projects and the skills needed to pursue a career in web development or even launch your own web-based startup." },
                        { textHeader: "", text: "Discussion and Networking with classmates" }
                    ],
                    clicked: false, name: "Why choose this course"
                },
                {
                    children: [
                        { textHeader: "", text: "A computer on which you can install software (Windows, MacOS, or Linux)" },
                        { textHeader: "", text: "Basic computer skills" },
                        { textHeader: "", text: "Introduction to software development" },
                        { textHeader: "", text: "Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)" },
                    ],
                    clicked: false, name: "Prerequisites"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Course Outline"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Class Schedule"
                },
            ],
            projects: 5, startDate: "15th April, 2024", expectations: [
                { text: "You’ll be taught and mentored by some of the best teachers in the industry.", name: "Experienced Teachers", icon: "fa-solid fa-person-chalkboard" },
                { text: "Get your very own physical certificate to prove your participation", name: "Certification", icon: "fa-solid fa-certificate" },
                { text: "Get useful support from our team all round the clock", name: "Real Time Support", icon: "fa-solid fa-headset" },
                { text: "Become part of an ever-growing, supportive community of like minds", name: "Team Building", icon: "fa-solid fa-users" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Conducive Environment", icon: "fa-solid fa-seedling" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Project Based Learning", icon: "fa-solid fa-diagram-project" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: " Practical classes", icon: "fa-brands fa-teamspeak" },
            ], requiredLevel: "Beginner - Intermediate", cost: 500000, prerequisites: ['A laptop',
                'A computer on which you can install software (Windows, MacOS, or Linux)',
                'Basic computer skills',
                'Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)'
                , 'Introduction to software development'], applicationStatus: true, location: ["Remote", "On-site"], duration: "3 Months",
            image: "https://assets-global.website-files.com/64a6644c2958e73937035816/6532586a7fdd85bf65cf790c_Mobile-App-Development.webp", schedule: "3 days a week", name: "Mobile Development",
            text: `Start your career as a Mobile App Developer today. Discover the intricacies of building engaging apps that captivate users. Acquire skills in crafting
             seamless user experiences that leave a lasting impact. Immerse yourself in the world of Mobile App Development to unleash your creativity and drive innovation.
              Let your passion and dedication steer your journey forward. Join a supportive community of developers
             and expand your horizons in the dynamic field of app development. Begin your quest for excellence in Mobile App Development and pave the way to a successful future.            ` },
        {
            courseDetails: [
                {
                    children: [
                        { textHeader: "", text: "Full-stack development is the art of creating web applications that seamlessly integrate both the client-side (frontend) and server-side (backend) components. In this course, you’ll dive deep into the world of web development, learning how to build visually stunning user interfaces and robust server-side functionality." },
                    ],
                    clicked: false, name: "About the course"
                },
                {
                    children: [
                        { textHeader: "Comprehensive Curriculum", text: "Our course is designed to provide you with a well-rounded education, covering all essential aspects of full-stack development, from the fundamentals of HTML, CSS, and JavaScript to server-side scripting, databases, and server deployment." },
                        { textHeader: "Real-World Projects", text: "You won’t just learn theory; you’ll apply your skills to real-world projects that mimic scenarios you’ll encounter in the industry." },
                        { textHeader: "Experienced Instructors", text: "Our instructors are industry professionals with years of experience in web development. They’ll guide you through every step of the learning process." },
                        { textHeader: "Job-Ready Skills", text: "By the end of this course, you’ll have a portfolio of projects and the skills needed to pursue a career in web development or even launch your own web-based startup." },
                        { textHeader: "", text: "Discussion and Networking with classmates" }
                    ],
                    clicked: false, name: "Why choose this course"
                },
                {
                    children: [
                        { textHeader: "", text: "A computer on which you can install software (Windows, MacOS, or Linux)" },
                        { textHeader: "", text: "Basic computer skills" },
                        { textHeader: "", text: "Introduction to software development" },
                        { textHeader: "", text: "Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)" },
                    ],
                    clicked: false, name: "Prerequisites"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Course Outline"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Class Schedule"
                },

            ],
            projects: 5, startDate: "15th April, 2024", expectations: [
                { text: "You’ll be taught and mentored by some of the best teachers in the industry.", name: "Experienced Teachers", icon: "fa-solid fa-person-chalkboard" },
                { text: "Get your very own physical certificate to prove your participation", name: "Certification", icon: "fa-solid fa-certificate" },
                { text: "Get useful support from our team all round the clock", name: "Real Time Support", icon: "fa-solid fa-headset" },
                { text: "Become part of an ever-growing, supportive community of like minds", name: "Team Building", icon: "fa-solid fa-users" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Conducive Environment", icon: "fa-solid fa-seedling" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Project Based Learning", icon: "fa-solid fa-diagram-project" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: " Practical classes", icon: "fa-brands fa-teamspeak" },
            ], requiredLevel: "Beginner - Intermediate", cost: 500000, prerequisites: ['A laptop',
                'A computer on which you can install software (Windows, MacOS, or Linux)',
                'Basic computer skills',
                'Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)'
                , 'Introduction to software development'], applicationStatus: true, location: ["Remote", "On-site"], duration: "6 Months",
            image: "https://media.licdn.com/dms/image/C4D12AQFDt085hzuDCg/article-cover_image-shrink_720_1280/0/1635415980086?e=2147483647&v=beta&t=1macLrC1cqWXJuntuDJVFVtD88FfOAGJjEUzCjMBqcw", schedule: "4 days a week", name: "FullStack Web Development",
            text: `Are you prepared to embark on an exciting journey into the multifaceted realm of full-stack development? Our comprehensive
           Full-Stack Development Course is your ticket to unlocking a wealth of opportunities in the
            dynamic world of software engineering. From front-end aesthetics to back-end functionality,
             this course offers a holistic approach, equipping you with the necessary skills and expertise
              to thrive in today's fast-paced tech industry. Whether you're a novice eager to explore the intricacies
               of web development or a seasoned professional looking to expand your skill set,
                our course provides the perfect platform for your advancement and success.` },
        {
            courseDetails: [
                {
                    children: [
                        { textHeader: "", text: "Full-stack development is the art of creating web applications that seamlessly integrate both the client-side (frontend) and server-side (backend) components. In this course, you’ll dive deep into the world of web development, learning how to build visually stunning user interfaces and robust server-side functionality." },
                    ],
                    clicked: false, name: "About the course"
                },
                {
                    children: [
                        { textHeader: "Comprehensive Curriculum", text: "Our course is designed to provide you with a well-rounded education, covering all essential aspects of full-stack development, from the fundamentals of HTML, CSS, and JavaScript to server-side scripting, databases, and server deployment." },
                        { textHeader: "Real-World Projects", text: "You won’t just learn theory; you’ll apply your skills to real-world projects that mimic scenarios you’ll encounter in the industry." },
                        { textHeader: "Experienced Instructors", text: "Our instructors are industry professionals with years of experience in web development. They’ll guide you through every step of the learning process." },
                        { textHeader: "Job-Ready Skills", text: "By the end of this course, you’ll have a portfolio of projects and the skills needed to pursue a career in web development or even launch your own web-based startup." },
                        { textHeader: "", text: "Discussion and Networking with classmates" }
                    ],
                    clicked: false, name: "Why choose this course"
                },
                {
                    children: [
                        { textHeader: "", text: "A computer on which you can install software (Windows, MacOS, or Linux)" },
                        { textHeader: "", text: "Basic computer skills" },
                        { textHeader: "", text: "Introduction to software development" },
                        { textHeader: "", text: "Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)" },
                    ],
                    clicked: false, name: "Prerequisites"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Course Outline"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Class Schedule"
                },

            ],
            projects: 5, startDate: "15th April, 2024", expectations: [
                { text: "You’ll be taught and mentored by some of the best teachers in the industry.", name: "Experienced Teachers", icon: "fa-solid fa-person-chalkboard" },
                { text: "Get your very own physical certificate to prove your participation", name: "Certification", icon: "fa-solid fa-certificate" },
                { text: "Get useful support from our team all round the clock", name: "Real Time Support", icon: "fa-solid fa-headset" },
                { text: "Become part of an ever-growing, supportive community of like minds", name: "Team Building", icon: "fa-solid fa-users" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Conducive Environment", icon: "fa-solid fa-seedling" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Project Based Learning", icon: "fa-solid fa-diagram-project" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: " Practical classes", icon: "fa-brands fa-teamspeak" },
            ], requiredLevel: "Beginner - Intermediate", cost: 500000, prerequisites: ['A laptop',
                'A computer on which you can install software (Windows, MacOS, or Linux)',
                'Basic computer skills',
                'Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)'
                , 'Introduction to software development'], applicationStatus: true, location: ["Remote", "On-site"], duration: "3 Months",
            image: "https://www.airtm.com/wp-content/uploads/2023/07/Webflow-portada.jpg", schedule: "2 days a week", name: "Web Designing (No code)",
            text: `Embark on the exciting journey of web development without needing to code.
         Explore the world of no-code development and unlock the ability to create stunning websites and applications effortlessly.
          With intuitive tools and platforms at your disposal, dive into the realm of web development with ease.
           Build professional-grade websites and web applications without writing a single line of code. 
           Let your creativity flourish as you design and customize your digital creations to perfection.
            Join the growing community of no-code enthusiasts and revolutionize the way you approach web development.
         Start your no-code journey today and witness the limitless possibilities of creating without boundaries.` },
        {
            courseDetails: [
                {
                    children: [
                        { textHeader: "", text: "Full-stack development is the art of creating web applications that seamlessly integrate both the client-side (frontend) and server-side (backend) components. In this course, you’ll dive deep into the world of web development, learning how to build visually stunning user interfaces and robust server-side functionality." },
                    ],
                    clicked: false, name: "About the course"
                },
                {
                    children: [
                        { textHeader: "Comprehensive Curriculum", text: "Our course is designed to provide you with a well-rounded education, covering all essential aspects of full-stack development, from the fundamentals of HTML, CSS, and JavaScript to server-side scripting, databases, and server deployment." },
                        { textHeader: "Real-World Projects", text: "You won’t just learn theory; you’ll apply your skills to real-world projects that mimic scenarios you’ll encounter in the industry." },
                        { textHeader: "Experienced Instructors", text: "Our instructors are industry professionals with years of experience in web development. They’ll guide you through every step of the learning process." },
                        { textHeader: "Job-Ready Skills", text: "By the end of this course, you’ll have a portfolio of projects and the skills needed to pursue a career in web development or even launch your own web-based startup." },
                        { textHeader: "", text: "Discussion and Networking with classmates" }
                    ],
                    clicked: false, name: "Why choose this course"
                },
                {
                    children: [
                        { textHeader: "", text: "A computer on which you can install software (Windows, MacOS, or Linux)" },
                        { textHeader: "", text: "Basic computer skills" },
                        { textHeader: "", text: "Introduction to software development" },
                        { textHeader: "", text: "Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)" },
                    ],
                    clicked: false, name: "Prerequisites"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Course Outline"
                },
                {
                    children: [

                    ],
                    clicked: false, name: "Class Schedule"
                },

            ],
            projects: 5, startDate: "15th April, 2024", expectations: [
                { text: "You’ll be taught and mentored by some of the best teachers in the industry.", name: "Experienced Teachers", icon: "fa-solid fa-person-chalkboard" },
                { text: "Get your very own physical certificate to prove your participation", name: "Certification", icon: "fa-solid fa-certificate" },
                { text: "Get useful support from our team all round the clock", name: "Real Time Support", icon: "fa-solid fa-headset" },
                { text: "Become part of an ever-growing, supportive community of like minds", name: "Team Building", icon: "fa-solid fa-users" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Conducive Environment", icon: "fa-solid fa-seedling" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: "Project Based Learning", icon: "fa-solid fa-diagram-project" },
                { text: "Our classes and the environment is serene and conducive for learning.", name: " Practical classes", icon: "fa-brands fa-teamspeak" },
            ], requiredLevel: "Beginner - Intermediate", cost: 500000, prerequisites: ['A laptop',
                'A computer on which you can install software (Windows, MacOS, or Linux)',
                'Basic computer skills',
                'Laptop Specifications(8gb -16gb RAM, 256SSD or 500gb)'
                , 'Introduction to software development'], applicationStatus: true, location: ["Remote", "On-site"], duration: "Monthly",
            image: "https://www.imaginestemacademy.com/wp-content/uploads/2023/05/Coding-schools-for-kids-Nigeria-1080x675.jpg", schedule: "2 days a week", name: "Coding class for kids (Age 4+)",
            text: `
         Introduce your child to the world of coding with our interactive coding class designed for kids aged 4 and above.
          Watch as your young learner discovers the fundamentals of programming in a fun and engaging environment.
           With age-appropriate activities and games, we make learning to code a playful and enjoyable experience.
            Spark your child's curiosity and ignite their passion for technology as they embark on this exciting journey.
             Our experienced instructors provide personalized guidance, ensuring that every child progresses at their own pace. 
             Join us in nurturing the next generation of coders and innovators.
          Enroll your child in our coding class today and lay the foundation for a bright future in technology.` },


    ]
    const navigate = useNavigate()
    const navigateToProjectDetails = (payload) => {
        payload = JSON.stringify(payload)
        sessionStorage.setItem('programDetails', payload)
        navigate("/program-details")
        setTimeout(() => {
            scroller.scrollTo("home", { smooth: true, duration: 500 })
        }, 20);
    }

    return (
        <div className='w-full flex p-4 py-20 lg:p-[10rem] justify-center'>
            <div className='w-full flex flex-col lg:max-w-[70rem] gap-[1rem] items-center'>
                <h2 className='text-center text-2xl font-semibold text-green-900'>Find your Perfect Program</h2>
                <p className='text-center text-[0.82rem] pb-[2rem]'>Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.</p>
                <div className="w-full flex flex-wrap gap-6 justify-center">
                    {
                        programs.map((program, index) => (
                            <Program program={program} key={index} index={index} navigateToProjectDetails={navigateToProjectDetails} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Programs

const Program = ({ program, navigateToProjectDetails, index }) => {

    const { ref, inView } = useInView()
    const props1 = { left: inView ? "0rem" : "-6rem" }
    const props2 = { top: inView ? "0rem" : "-6rem" }
    const props3 = { right: inView ? "0rem" : "-6rem" }
    return (
        <div ref={ref} style={(index + 1) % 3 === 0 ? props3 : (index + 1) % 2 === 0 ? props2 : props1} onClick={() => navigateToProjectDetails(program)} className={`traansition-all duration-1000 mb-6 cursor-pointer rounded-md border w-[20rem] transition-all h-[30rem] relative`}>
            <div className="flex h-full w-full justify-center items-center relative">
                <div className={`transition-all w-full h-full duration-500`}>
                    <div className="w-full h-1/2 bg-white">
                        <img className='h-full w-full rounded-t-md' src={program.image} alt={program.name} />
                    </div>
                    <div className="w-full h-1/2 p-4 flex flex-col justify-between">
                        <h3 className='font-medium text-lg text-green-700'>{program.name}</h3>
                        <p className='text-[0.82rem]'>{program.text.length > 220 ? program.text.slice(0, 215) + "..." : program.text}</p>
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
    )
}