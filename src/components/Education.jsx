import React from 'react'

const Education = () => {

    const data =[
        {
            class:"High School",
            school:"Kendriya Vidyalaya F.R.I",
            year:"2018-2019",
            location:"Dehradun, Uttarakhand",
        },
         {
            class:"Diploma in Electronics",
            school:"Government Polytechnic Pitthuwala",
            year:"2019-2022",
            location:"Dehradun, Uttarakhand",
        },
         {
            class:"B.tech",
            school:"Uttaranchal University",
            year:"2022-2025",
            location:"Dehradun, Uttarakhand",
        },
    ];


  return (
    <div id='education' className='px-8'>
        <h1 className='text-2xl font-bold mt-30 mb-10'>
            Education
        </h1>

        {data.map((items,index)=>(
            <div className={`education flex items-center justify-between h-20 ${index===0 && "border-b-2 border-solid"} ${index===1 && "border-b-2 border-solid"} ${index===2 && "border-b-2 border-solid"}`}  key={index}>

            <div className={`class w-40 text-lg`}>
                {items.class}
           </div>

           <div className="address w-40 text-md">
            {items.location}
           </div>

           <div className="year w-20 text-sm">
            {items.year}
           </div>
        </div>
        ))}



    </div>
  )
}

export default Education