import React from 'react'
import ProjectItem from './ProjectItem';
import helpDeskImg from '../assets/HelpDeskBig.png'
import NetflixIMG from '../assets/NetflixIMG.png'
import UserIMG from '../assets/UserIMG.png'
import SneakerHeadIMG from '../assets/SneakerHeadBig.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Portfolio</h1>
            <p className='text-center py-8'>
                I am passionate about learning new technologies and creating apps to solve real-world problems. Here are featured some of my most recent projects
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={helpDeskImg} title='HelpDesk App' link="https://github.com/cliffstvnsn/SupportDesk"/>
                <ProjectItem img={NetflixIMG} title='Netflix App' link='https://github.com/cliffstvnsn/netflixfirebase'/>
                <ProjectItem img={SneakerHeadIMG} title='E-Commerce App' link="https://github.com/cliffstvnsn/SneakerHead"/>
                <ProjectItem img={UserIMG} title='Business Admin Dashboard' link="https://github.com/cliffstvnsn/businessadmindashboard"/>
                
            </div>
        </div>
    )
}

export default Projects