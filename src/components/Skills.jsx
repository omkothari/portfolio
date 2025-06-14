import React from 'react'
import { motion } from "motion/react"
const Skills = () => {
  return (
     <div className='px-8'>
        <h1 className="text-2xl font-bold mt-30 mb-10">Skills</h1>

        <div className="">
            <div  className="flex gap-2">
                  <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear", duration:7}} className='text-7xl font-bold text-[#AB2346] whitespace-nowrap'>
                    HTML CSS JavaScript  React.js GSAP Node.js Express.js MongoDB Tailwind 
                    </motion.h1> 

                     <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear", duration:7}} className='text-7xl font-bold text-[#AB2346] whitespace-nowrap'>
                    HTML CSS JavaScript  React.js GSAP Node.js Express.js MongoDB Tailwind 
                    </motion.h1> 

                     <motion.h1 initial={{x:"0"}}  animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear", duration:7 }} className='text-7xl font-bold text-[#AB2346] whitespace-nowrap'>
                    HTML CSS JavaScript  React.js GSAP Node.js Express.js MongoDB Tailwind 
                    </motion.h1> 

        </div>
        </div>


        <div className="mt-15">
            <div  className="flex gap-2">
                  <motion.h1 initial={{x:"-100%"}} animate={{x:"0%"}} transition={{repeat:Infinity ,ease:"linear", duration:7 }} className='text-7xl font-bold text-[#00B295] whitespace-nowrap'>
                    HTML CSS JavaScript  React.js GSAP Node.js Express.js MongoDB Tailwind 
                    </motion.h1> 

                     <motion.h1 initial={{x:"-100%"}} animate={{x:"0%"}} transition={{repeat:Infinity ,ease:"linear", duration:7 }} className='text-7xl font-bold text-[#00B295] whitespace-nowrap'>
                    HTML CSS JavaScript  React.js GSAP Node.js Express.js MongoDB Tailwind 
                    </motion.h1> 

                     <motion.h1 initial={{x:"-100%"}} animate={{x:"0%"}} transition={{repeat:Infinity ,ease:"linear", duration:7 }} className='text-7xl font-bold text-[#00B295] whitespace-nowrap'>
                    HTML CSS JavaScript  React.js GSAP Node.js Express.js MongoDB Tailwind 
                    </motion.h1> 

        </div>
        </div>

    </div>
  )
}

export default Skills