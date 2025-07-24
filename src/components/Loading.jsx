import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
const Loading = () => {
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // Re-enable scroll on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useGSAP(()=>{
    gsap.from("h1",{
       x:400,
       opacity:0,
        scrub:1,
    })
  })

  return (
    < motion.div initial={{top:0}} animate={{
        top:"-100%",
        transition: { 
            duration: 0.7,
            delay: 2
        }
        
    }} 
    
    className="fixed z-[999] bg-white h-full w-full flex items-center justify-center">
      <h1 className='text-4xl font-bold font-["tanker"]'>OM KOTHARI</h1>
    </ motion.div>
  );
};

export default Loading;