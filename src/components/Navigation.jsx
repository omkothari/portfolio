import React from 'react'
import '../index.css'
import Resume from '../assets/resume.pdf'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Navigation = () => {
  const[click,setClick] = useState(false);
   let data = ["Home", "About", "Resume","Projects"];

   const handleClick = ()=>{
    setClick(!click);
   }

   console.log(click)


  return (
    <div className={`${click ?"w-screen pt-8":"flex items-center justify-between p-8"} relative `}>


      <IoMenu className={`${click && 'hidden'} sm:hidden`} onClick={handleClick} 
      size="2em" />
      <IoMdClose className={`${click ? 'block' : "hidden"} sm:hidden ml-8`} onClick={handleClick} size="2em" />

      <div className={`${click ? "w-full absolute bg-white flex flex-col ":"hidden"} sm:hidden`}>

        {data.map((item, index) => (
           <div key={index} className="h-20 flex items-center justify-center w-full font-bold border-b-2 cursor-pointer hover:text-[#000]">
            {index===2  ?
            <a href={Resume} download="Om_Kothari_Resume.pdf">Resume </a> 
            
            :  <a href={`#${item.toLowerCase()}`}>{item}</a>
            }
              

         
        </div>
       ))}   



      </div>



    <div className="hidden sm:flex p-8 h-20 gap-10 flex items-center">
       
       {data.map((item, index) => (
           <div key={index} className="font-bold cursor-pointer hover:text-[#FFFFFF]">

            {index===2 ?  <a href={Resume} download="Om_Kothari_Resume.pdf" className="nav block px-2 py-1 rounded-md">
            {item}
           </a> : <a href={`#${item.toLowerCase()}`} className="nav block px-2 py-1 rounded-md">
            {item}
            </a> }

         
        </div>
       ))}   
       </div>
       <h1 className={`absolute top-8 ${click ?"hidden" :"block"} sm:top-14 right-8 font-bold text-2xl whitespace-nowrap`}>Om Kothari</h1>
    </div>
  )
}

export default Navigation