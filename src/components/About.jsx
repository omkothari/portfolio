import React from 'react'
import '../index.css'
import Om from '../assets/Om remove.jpg'

const About = () => {

    const data =["Hi, I’m Om Kothari from Dehradun. I’ve recently completed my B.Tech in Computer Science from Uttaranchal University.I am a passionate Software Developer with a knack for modern web development. I have hands-on experience building responsive and interactive web applications using React, Node.js, HTML, CSS, and JavaScript. I’ve also worked on cloning real-world websites and implementing creative animations using GSAP and Locomotive Scroll.Through internships and personal projects, I’ve honed my skills in both frontend and backend development, and enjoy solving real-world problems through code.I’m always eager to learn new technologies, collaborate with like-minded individuals, and take on challenges that help me grow as a developer. Currently, I'm looking for opportunities in frontend or full-stack development where I can contribute and continue learning."];



  return (
    <div className='w-full'>
        <h1 className="text-2xl font-bold mt-30 mr-20 mb-10 ml-8">About</h1>
    
<div className="md:flex items-center justify-between w-full">
   <div className="para w-full md:w-1/2 px-8">
<p>
 Hi, I’m <strong>Om Kothari</strong> from Dehradun. I’ve recently completed my B.Tech in Computer Science from Uttaranchal University.
I am a passionate Software Developer with a knack for modern web development. I have hands-on experience building responsive and interactive web applications using <strong>React, Node.js, HTML, CSS, and JavaScript</strong>. I’ve also worked on cloning real-world websites and implementing creative animations using GSAP and Locomotive Scroll.
</p>
<br />

<p>
Through internships and personal projects, I’ve honed my skills in both <strong> frontend and backend development</strong>, and enjoy solving real-world problems through code.
</p>
<br />

<p>
I’m always eager to learn new technologies, collaborate with like-minded individuals, and take on challenges that help me grow as a developer. Currently, I'm looking for opportunities in frontend or full-stack development where I can contribute and continue learning.
</p>
</div> 

<img src={Om} className="w-full md:w-1/2 h-[80vh] object-cover object-[0_22%]" alt="" />
</div>


    </div>
  )
}

export default About