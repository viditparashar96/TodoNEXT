"use client"
import CreateTask from '@/components/CreateTask'
import React from 'react'


function page() {
  return (

    <div className='w-[100vw] min-h-[140vh] text-white bg-[#000000f2]  overflow-x-hidden relative'>
       <img src="https://nextui.org/gradients/docs-right.png"  alt="" className=' md:w-[70vw] w-[100vw] absolute md:-right-[30%] md:-top-[30%] '/>
        <img src="https://nextui.org/gradients/docs-left.png" className=' md:w-[70vw] absolute md:-left-[25%]  ' alt="" />
      <div className=' text-center'>
      <h1 className="bg-gradient-to-r from-blue-300 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl mt-4 md:mt-0 md:text-6xl  font-semibold  ">Todo WebApp.</h1>
      </div>
      <CreateTask/>
      
     
    </div>


  )
}

export default page