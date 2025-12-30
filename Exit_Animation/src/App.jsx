import React from 'react'
import image from '../src/image/infinity.jpg'
import { HiXMark } from "react-icons/hi2";
import { CiPalette } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiHospital1 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import {AnimatePresence, motion} from 'motion/react'
import { useState } from 'react';

const App = () => {
  const [open, setopen] = useState(true)
  return (
    <>
    <AnimatePresence>
    {open && (
    <motion.div
    initial={{
      opacity:0,
      scale:0.98,
      filter:'blur(10px)'
    }} 
    animate={{
      opacity:1,
      scale:1,
      filter:'blur(0px)'
    }}
    exit={{
      opacity:0,
      scale:0.98,
      filter:'blur(10px)'
    }}
    transition={{
      duration:0.5,
      ease:'easeInOut'
    }}
    className='flex items-center justify-center h-screen w-full'>
      <div className='w-90 bg-white min-h-[32rem] h-[32rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-5  flex flex-col'>
        <h1 className='font-bold text-[17px]'>Acenternity UI Components</h1>
        <p className='text-neutral-500 font-semibold mt-1 text-[16px]'>chaho to mai Vite-compatible Geist set bhi kara deta hoon</p>

        <div className='flex items-center justify-center mt-4 rounded-md '>
          <button 
          onClick={()=>setopen(false)}
          className='flex items-center justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] px-2 py-1 gap-2 rounded-md'>
            <img src={image} width={50} height={50} className='w-7 h-7 rounded-md '/>
            Accenternity
            <HiXMark className='text-xl font-bold'/>
          </button>
        </div>

        <div className='bg-white flex-1 mt-4 border border-dashed border-neutral-200 rounded-lg relative'>

           {/* motion div here */}
          <motion.div
          initial={{
            opacity:0,
            scale:0.98,
            filter:'blur(10px)'
          }} 
          whileHover={{
            opacity:1,
            scale:1.05,
            filter:'blur(0px)',
            border:'border-neutral-200',
          }} 
          transition={{
            // duration:0.5,
            // ease:'easeInOut'
            type:'spring',
            stiffness:100,
            damping:15
          }}
          
          className='absolute inset-0 h-full w-full bg-white-500 divide-y divide-neutral-200'>

            <div className='flex items-center gap-3 p-4'>
              <div className='h-8 w-8 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
                <CiPalette className='w-10 h-10 p-1 text-neutral-600' />
              </div>
              <div className='flex flex-col'>
                <p className='text-[14px] font-bold text-neutral-600'>A Union Council</p>
                <p className='text-neutral-400 text-[14px] font-medium'>A collection of UI Components</p>
              </div>
            </div>

            <div className='flex items-center gap-3 p-4'>
              <div className='h-8 w-8 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
                <CiCoffeeCup className='w-10 h-10 p-1 text-neutral-600' />
              </div>
              <div className='flex flex-col'>
                <p className='text-[14px] font-bold text-neutral-600'>Drinking Coffee can be healthy</p>
                <p className='text-neutral-400 text-[14px] font-medium'>Coffee is a beverage brewed from roasted</p>
              </div>
            </div>

            <div className='flex items-center gap-3 p-4'>
              <div className='h-8 w-8 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
                <CiHospital1 className='w-10 h-10 p-1 text-neutral-600' />
              </div>
              <div className='flex flex-col'>
                <p className='text-[14px] font-bold text-neutral-600'>Healthcare institution </p>
                <p className='text-neutral-400 text-[14px] font-medium'> providing patient treatment with specialized health </p>
              </div>
            </div>

            <div className='flex items-center justify-center gap-3 p-4'>
              <div className='h-6 w-6 rounded-full flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center'>
                <IoMdAdd className='w-6 h-6 rounded-full  text-neutral-600' />
              </div>
              <div className='flex flex-col '>
                <p className='text-[14px] font-bold text-neutral-600'>Create your own </p>
              </div>
            </div>
            
          </motion.div>
          {/* motion div end here */}
        </div>
      </div>
    </motion.div>
    )}
    </AnimatePresence>
    </>
  )
}

export default App

// shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]