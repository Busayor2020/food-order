        "use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Always fresh, crispy and hot",
    image: "/slide1.png"
  },
  {
    id: 2,
    title: "We deliver your order to wherever you may be",
    image: "/slide2.png"
  },
  {
    id: 3,
    title: "The best pizza to share with your and friends",
    image: "/slide3.jpg"
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] =useState(0)
  
  //useEffect(() => {
    //const interval = setInterval( 
     //() => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
     //2000
    // );
    //return () => clearInterval(interval);
 // },[]);     

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* TEST CONTAINER */}
    <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
      <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
       {data[currentSlide].title}
      </h1>
      <button className='bg-red-500 text-white py-2 px-4 ring-2 ring-gray-500 rounded-tl-full rounded-br-full mb-10'>
      Order Now</button>
    </div>
    {/* IMAGE CONTAINER */}
    <div className='w-full flex-1 relative'>
       <Image src={data[currentSlide].image} alt='' fill className='object-cover'/>
    </div>
    </div>
  )
}

export default Slider