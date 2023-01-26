import React from 'react'
import ProjectItem from './ProjectItem';
import helpDeskImg from '../assets/ChatIMG.png'
import NetflixIMG from '../assets/NetflixIMG.png'
import UserIMG from '../assets/UserIMG.png'
import WeatherIMG from '../assets/WeatherIMG.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                I am passionate about learning new technologies and creating apps to solve real-world problems. Here are featured some of my most recent projects
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={helpDeskImg} title='HelpDesk App' link="https://github.com/cliffordstevenson/SupportDesk"/>
                <ProjectItem img={NetflixIMG} title='Netflix App' link='https://github.com/cliffordstevenson/netflixfirebase'/>
                <ProjectItem img={WeatherIMG} title='Weather App' link="https://github.com/cliffordstevenson/weatherapp"/>
                <ProjectItem img={UserIMG} title='User App' link="https://github.com/cliffordstevenson/businessadmindashboard"/>
                
            </div>
        </div>
    )
}

export default Projects