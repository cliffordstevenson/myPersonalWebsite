import React from 'react'
import ProjectItem from './ProjectItem';
import helpDeskImg from '../assets/Screenshot_20230114_113621.png'
import netflixImg from '../assets/Screenshot_20230116_111514.png'
import amazonImg from '../assets/Screenshot_20230116_111530.png'
import lamaStoreImg from '../assets/Screenshot_20230116_111623.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                I am passionate about learning new technologies and creating apps to solve real-world problems. Here are featured some of my most recent projects
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={helpDeskImg} title='HelpDesk App'/>
                <ProjectItem img={netflixImg} title='Netflix App'/>
                <ProjectItem img={amazonImg} title='Amazon App'/>
                <ProjectItem img={lamaStoreImg} title='E-commerce App'/>
            </div>
        </div>
    )
}

export default Projects