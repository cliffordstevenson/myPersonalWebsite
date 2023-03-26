import React from 'react'
import ProjectItem from './ProjectItem';
import helpDeskImg from '../assets/CSUPPRT.png'
import NetflixIMG from '../assets/NETFLIX.png'
import UserIMG from '../assets/BUSADMIN.png'
import SneakerHeadIMG from '../assets/SHEAD3.png'
import WeatherIMG from '../assets/WEATHERAPP.png'
import JSClockIMG from '../assets/Time.png'
import JSStopwatchIMG from '../assets/Timer.png'
import FakeNewsIMG from '../assets/FakeNews2.png'
import PortfolioIMG from '../assets/Portfolio.png'
import ChatGPTIMG from '../assets/CHATGPTHomePage.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 pt-16 bg-[#1f1f1f]'>
            <h1 className='text-4xl font-bold text-center text-[#99afe6]'>Portfolio</h1>
            <p className='text-center py-8 text-[#bcbcbc]'>
                I am passionate about learning new technologies and creating apps to solve real-world problems. Here are featured some of my most recent projects
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={helpDeskImg} title='HelpDesk App' desc="React.js, Socket.io, Bootstrap" link="https://github.com/cliffstvnsn/SupportDesk"/>
                <ProjectItem img={NetflixIMG} title='Netflix App' desc="Next.js, TailwindCSS, MovieDB API" link='https://github.com/cliffstvnsn/netflixfirebase'/>
                <ProjectItem img={SneakerHeadIMG} title='E-Commerce App' desc="React.js, Sass CSS, MySQL" link="https://github.com/cliffstvnsn/SneakerHead"/>
                <ProjectItem img={UserIMG} title='Business Admin Dashboard' desc="Next.js, TailwindCSS, Chart.js" link="https://github.com/cliffstvnsn/businessadmindashboard"/>
                <ProjectItem img={WeatherIMG} title='Weather App' desc="React.js, Tailwind CSS, OpenWeather API" link="https://github.com/cliffstvnsn/weatherapp"/>
                <ProjectItem img={JSClockIMG} title='JavaScript Clock' desc='HTML, CSS' link="https://github.com/cliffstvnsn/jsclock"/>
                <ProjectItem img={JSStopwatchIMG} title='JS Stopwatch' desc="HTML, CSS" link="https://github.com/cliffstvnsn/stopwatch"/>
                <ProjectItem img={FakeNewsIMG} title='FakeNews' desc="Next.js 13, Tailwind CSS, TypeScript, MediaStack API" link="https://github.com/cliffstvnsn/fakenews"/>
                <ProjectItem img={PortfolioIMG} title='Porfolio' desc="React.js, Tailwind CSS" link="https://github.com/cliffstvnsn/react-portfolio"/>
                <ProjectItem img={ChatGPTIMG} title='ChatGPT' desc="Next.js 13, TailwindCSS, TypeScript, OpenAI API" link="https://github.com/cliffstvnsn/chat-gpt-app"/>
            </div>
        </div>
    )
}

export default Projects