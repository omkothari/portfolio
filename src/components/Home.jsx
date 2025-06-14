import React from 'react'
import OmHome from '../assets/Om 2.jpg'
const Home = () => {
  return (
    <div className='mt-10 md:mt-1 sm:flex md:flex justify-between h-[80vh] items-center  md:px-8  mt-10'>

        <h1 className='w-4/5 md:w-2/5 text-justify text-2xl ml-8'>Hi, I’m <strong className='text-[#222222]'>Om Kothari</strong> — a passionate Software Developer with a knack for modern web development.</h1>

        <img src={OmHome} className="w-full md:w-1/2 h-[80vh] object-cover object-[0_22%]" alt="" />
    </div>
  )
}

export default Home