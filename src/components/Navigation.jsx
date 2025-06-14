import React from 'react'
import '../index.css'
import Resume from '../assets/resume.pdf'
import { IoMenu } from "react-icons/io5";

const Navigation = () => {
   let data = ["Home", "About", "Resume","Projects"];
  return (
    <div className="px-8 flex items-center justify-between">
      <IoMenu className='menu ' size="2em" />

    <div className="h-20 gap-10 flex items-center">
       {data.map((item, index) => (
           <div key={index} className="font-bold cursor-pointer hover:text-[#FFFFFF] h-fit w-fit">

            {index===2 ?  <a href={Resume} download="Om_Kothari_Resume.pdf" className="nav block px-2 py-1 rounded-md">
            {item}
            </a>:  <a href="" className="nav block px-2 py-1 rounded-md">
            {item}
            </a> }
         
        </div>
       ))}   
       </div>
       <h1 className='font-bold font-["gilroy"] text-2xl'>Om Kothari</h1>
    </div>
  )
}

export default Navigation