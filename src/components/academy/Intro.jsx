import React from 'react'

const Intro = () => {
  return (
    <div className='w-full h-screen max-h-[50rem] relative'>
      <img src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg" className="absolute w-full h-full max-h-[50rem] top-0 left-0" alt="" />
      <div className="w-full absolute left-0 h-[12rem] bottom-[-30%] transform translate-y-[-50%] flex gap-[8rem] justify-center items-center bg-transparent">
        <div className="w-1/2 max-w-[25rem] h-full flex flex-col justify-evenly bg-white rounded-md border -mr-6 p-4">
          <h3 className='text-xl text-green-700 font-medium'>Individual</h3>
          <p className='text-[0.82rem]'>Accelerate your dream of becoming a world-class software developer or designer.</p>
          <div>
            <button type="button" className='bg-green-700 text-[0.82rem] rounded-md p-3 text-white'>Browse Courses</button>
          </div>
        </div>
        <div className="w-1/2 max-w-[25rem] h-full flex flex-col justify-evenly bg-white rounded-md border -mr-6 p-4">
          <h3 className='text-xl text-green-700 font-medium'>Corporate</h3>
          <p className='text-[0.82rem]'>Professional Staff training courses applicable to any corporate organization.</p>
          <div>
            <button type="button" className='bg-green-700 text-[0.82rem] rounded-md p-3 text-white'>Browse Courses</button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Intro