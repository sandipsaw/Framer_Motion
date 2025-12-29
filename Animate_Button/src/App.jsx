import React from 'react'
import {easeIn, easeInOut, motion} from 'motion/react'
const App = () => {
  return (
    <div className='[perspective::1000px] [transform-style:preserve-3d] w-full h-screen bg-neutral-900 flex items-center justify-center' 
    style={{
      backgroundImage:`radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
      backgroundSize:"8px 8px",
      backgroundRepeat:"repeat",
      }}>
        <motion.button
        // initial={{
        //   rotate:0,
        // }}
        // animate={{
        //   rotate:[30,120,180,0],
        // }}
        // transition={{
        //   duration:1,
        //   ease:'easeInOut'
        // }}
        initial={{opacity:0}}
        animate={{opacity:1}}
        whileHover={{
          rotateX:10,
          rotateY:20,
          boxShadow:"0px 20px 50px rgba(8,112,184,0.7)",
          y:-5
        }}
        style={{translateZ:100}}
         className='group text-neutral-500 bg-black text-xl px-12 py-4 rounded-lg shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] relative cursor-pointer border-none'>
          <span className='group-hover:text-cyan-600 transition-colors duration-300'>Download</span>
          <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-3/4 mx-auto h-px'></span>
         <span className='absolute inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mx-auto h-[4px] blur-sm'></span>
        </motion.button>
    </div>
  )
}

export default App