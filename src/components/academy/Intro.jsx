import React from 'react'

const Intro = () => {
  return (
    <div className='w-full h-screen max-h-[30rem] lg:max-h-[50rem] relative'>
      <div className="bg-black opacity-[40%] absolute w-full h-full top-0 right-0 z-[5]"></div>
      <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg" className="opacity-[90%] absolute w-full h-full max-h-[30rem] lg:max-h-[50rem] top-0 left-0" alt="" />
      <div className="w-full h-full flex justify-center items-center text-white">
      <h2 className='z-10 text-2xl lg:text-4xl font-medium text-center'>Accelerate your career in tech</h2>
      </div>
      <div className="hidden lg:flex w-full absolute left-0 h-[12rem] bottom-[-30%] transform translate-y-[-50%] gap-[8rem] z-10 justify-center items-center bg-transparent">
        <div className="w-1/2 max-w-[25rem] h-full flex flex-col justify-evenly bg-white rounded-md border -mr-6 p-4">
          <h3 className='text-xl text-green-700 font-medium'>Individual</h3>
          <p className='text-[0.82rem]'>Accelerate your dream of becoming a world-class software developer or designer.</p>
          <div>
            <button type="button" className='normalButton'>Browse Courses</button>
          </div>
        </div>
        <div className="w-1/2 max-w-[25rem] h-full flex flex-col justify-evenly bg-white rounded-md border -mr-6 p-4">
          <h3 className='text-xl text-green-700 font-medium'>Corporate</h3>
          <p className='text-[0.82rem]'>Professional Staff training courses applicable to any corporate organization.</p>
          <div>
            <button type="button" className='normalButton'>Browse Courses</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Intro