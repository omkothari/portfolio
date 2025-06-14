import React from 'react'
import Resume from '../assets/resume.pdf'
const Contacts = () => {


     let data = ["Home", "About", "Resume","Projects"];
          
  return (
    <div className='h-50 bg-[#222222] flex justify-between items-center md:px-20'>
        {/* <h1 className='text-2xl font-bold mt-30 mx-20'>
            Contact Me 
        </h1> */}

            <div className="h-20 sm:gap-10 sm:flex  items-center ">
           {data.map((item, index) => (
            <div key={index} className="font-bold cursor-pointer h-fit w-fit">
              
              {index===2 ?  <a href={Resume} download="Om_Kothari_Resume.pdf" className=" block px-2 py-1 rounded-md">
                          {item}
                          </a>:  <a href="" className=" block px-2 py-1 rounded-md">
                          {item}
                          </a> }

        
             
            </div>
           ))}     
    </div>
               <a href="mailto:omkothari2004@gmail.com" className='text-xl lg:text-4xl'>omkothari2004@gmail.com</a>
    </div>
  )
}

export default Contacts