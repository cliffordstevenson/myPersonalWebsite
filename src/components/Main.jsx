import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1668361644364-2a667764af23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Cliff Stevenson</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        I'm 
                        <TypeAnimation
                            sequence={[
                                'a Developer', // Types 'One'
                                2000, // Waits 1s
                                'a Classical Guitarist', // Types 'One'
                                2000, // Waits 1s
                                'a weightlifter', // Types 'One'
                                2000, // Waits 1s
                                'a Tech Enthusiast',
                                2000,
                                'a 5-star hospitality expert', // Types 'One'
                                2000, // Waits 1s
                                'a Team Leader',
                                2000, // Waits 1s
                                'an aspiring polyglot',
                                2000,
                                'a world traveler',
                                2000,
                                'a Coder', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'a Collaborator',
                                2000, // Waits 1s
                                'a Software Engineer',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href="https://twitter.com/cliffspeaking"><FaTwitter className="cursor-pointer" size={20} /></a>
                        <a href="https://www.facebook.com/cliff.stevenson.9/"><FaFacebookF className="cursor-pointer" size={20} /></a>
                        <a href="https://www.instagram.com/acsguitar/?hl=en"><FaInstagram className="cursor-pointer" size={20} /></a>
                        <a href="https://www.linkedin.com/in/cliffstvnsn/"><FaLinkedinIn className="cursor-pointer" size={20} /></a>
                        <a href="https://github.com/cliffstvnsn"><FaGithub className="cursor-pointer" size={20} /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main