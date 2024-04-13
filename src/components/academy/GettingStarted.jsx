import {useNavigate} from "react-router-dom"

const GettingStarted = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full flex p-4 py-20 lg:px[-[10rem] justify-center bg-[#eeffe2]'>
            <div className='w-full flex flex-col lg:max-w-[50rem] gap-[1rem] items-center'>
                <h2 className='text-center text-2xl text-green-900'>Ready to transform your career?</h2>
                <p className="text-center text-[0.82rem]">If you love to grow or build a career in tech, we have you covered. At Univelcity, we focus on industry-ready skills that prepare you for the future of work, while connecting you to incredible jobs both in Nigeria and abroad.</p>
                <div><button onClick={()=> navigate("/contact")} type='button' className='normalButton'>Inquire more</button></div>
            </div>
        </div>
    )
}

export default GettingStarted