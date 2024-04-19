import { Element } from 'react-scroll'

const ContactPage = () => {

    const contacts = [
        { name: "Whatsapp", link: "https://wa.me/+2348188680159", availability: "Chat with us during operation hours", icon: "fa-brands fa-whatsapp" },
        { name: "Phone", link: "tel:+2348188680159", availability: "Contact our agent via phone calls for enquiry", icon: "fa-solid fa-phone" },
        { name: "Instagram", link: "https://www.instagram.com/digit_xcellence24?igsh=bXUwNGhnemt1ZzA=", availability: "Our Instagram page", icon: "fa-brands fa-instagram" },
        { name: "Linkedin", link: "https://www.linkedin.com/company/digitxcellence/", availability: "Our Linkedin profile", icon: "fa-brands fa-linkedin-in" },
        // { name: "Facebook", link: "https://www.facebook.com/digitxcellence?mibextid=ZbWKwL", availability: "Our Linkedin profile", icon: "fa-brands fa-facebook-f" },
    ]
    return (
        <div className='w-full flex flex-col items-center p-4 lg:p-20 text-[0.85rem]'>
            <Element name="home" className='w-full pt-[2rem] lg:max-w-[90rem] flex flex-col items-center gap-6'>
                <h3 className='text-3xl text-green-950'>Get in touch</h3>
                <p className='flex items-end gap-2'><span className='font-medium text-green-950'>Monday to Friday: </span>9AM - 9PM WAT |<span className='font-medium text-green-950'>| Saturday & Sunday: </span> 10AM - 6PM WAT</p>
                <div className='flex flex-wrap  gap-4 lg:gap-6 items-center justify-center'>{
                    contacts.map((contact, index) => (
                        <a href={contact.link} target='_blank' key={index} className='cursor-pointer border-b-4 transition-all duration-500 border-transparent hover:border-green-700 h-[10rem] w-[10rem] lg:w-[15rem] lg:h-[15rem] bg-green-100 flex flex-col items-center justify-center gap-2 rounded-md'>
                            <i className={`text-3xl lg:text-6xl rounded-full ${contact.icon}`}></i>
                            <h3 className='font-semibold'>{contact.name}</h3>
                            <p className='text-[0.8rem] text-center px-4'>{contact.availability}</p>
                        </a>
                    ))
                }</div>
            </Element>
        </div>
    )
}

export default ContactPage