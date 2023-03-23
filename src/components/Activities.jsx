import React from 'react'

export const Activities = () => {
  return (
      <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px] justify-around'>
          {/* note mt-[-75px] will over lap an image on other */}

          <div className='relative p-4'>
              <h1 className= 'transition ease-in-out delay-200 hover:scale-110 duration-300 absolute z-[5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl'>Jaipur</h1>
              <img className='w-76 h-56 drop-shadow-2xl object-cover relative border-4 border-white ' src="https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?b=1&s=612x612&w=0&k=20&c=HjPjn4J5BMwpWEAgLQVT9mh3DpcnA5F_xgbJq4fihX8=" alt="" />
          </div>
          <div className='relative p-4'>
              <h1 className='absolute z-[5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl '>Punjab</h1>
              <img className='  w-76 h-56 drop-shadow-2xl object-cover relative border-4 border-white' src="https://images.pexels.com/photos/5458388/pexels-photo-5458388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className='relative p-4'>
              <h1 className='absolute z-[5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl  '>Delhi</h1>
              <img className='w-76 h-56 object-cover drop-shadow-2xl relative border-4 border-white'src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
    </div>
  )
}
