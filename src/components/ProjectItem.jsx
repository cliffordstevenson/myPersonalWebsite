import React from 'react'

const ProjectItem = ({img, title, link, desc}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-[#1f1f1f] rounded-xl group hover:bg-gradient-to-r from-[#242424] to-[#132346]'>
            <img src={img} alt="/" className='rounded-xl group-hover:opacity-10'/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2x1 font-bold text-white tracking-wider text-center'>
                    {title}
                </h3>
                {/* <p className='pb-4 pt-2 text-white text-center'>React.js</p> */}
                <p className='pb-4 pt-2 text-white text-center'>{desc}</p>
                <a href={link}>
                    <p className='text-center p-3 rounded-lg bg-[#1c1c21] text-[#b3bccb] font-bold text-bold'>More Info</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItem