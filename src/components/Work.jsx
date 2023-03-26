import React from 'react';
import WorkItem from './WorkItem';
import Bindi from '/Bindi.jpg';

const data = [
    {
        year: 2022,
        title: "Software Engineer Bootcamp - Coding Dojo",
        duration: '1 Year',
        details:
            "Completed certificate from Coding Dojo: an immersive web development program specialized in teaching full stack development to train students to excel in the professional software development field — from front-end to back-end to data storage. Accumulated 1,000+ hours of intensive programming coursework, including building, testing, and debugging in Python, Java, and MERN. 200+ hours of full stack development on web apps and other technical projects. Languages: Python, Java, JavaScript, HTML, CSS, MySQL. Libraries/Frameworks/Tools: Flask, MongoDB, Express, React, Node.js, Mongoose, Spring Boot, Spring Security. Programs: VSCode, MySQL Workbench (ORM Wireframe), Postman (API Testing)"
    },
    {
        year: 2022,
        title: "Master's - University of Alicante, Spain",
        duration: '1 Year',
        details:
            "Completed my 2nd Master's degree at the singularly-renowned program of Alicante. Intensive 7-month course in Spain with 12 seperate modules of different epochs of music (baroque, classical, south american, etc.), each led by a world expert in the field. The only program in the world which features both David Russel and Manuel Barrueco as teachers. Learned conversational Spanish as well as performed throughout the city and for a recognition ceremony of Manuel Barrueco at Alicante town hall, an incredible honor which was featured in the local magazine of Alicante."
    },
    {
        year: 2021,
        title: "In-Room Dining Supervisor - Mandarin Oriental Hyde Park/One Hyde Park London, United Kingdom",
        duration: '1 Year',
        details:
            "Demonstrated ultimate capacity for 5-star service as room service at what is considered by some to be the top hotel in the world, featuring One Hyde Park (once the highest-sold real estate location in London) and 2 Michelin Star restaurant: Dinner by Heston Blumenthal (often ranked as one of the top 10 restaurants in the world). Collaborated with colleagues from all around the world, across several departments of the hotel at this 5-star hotel in the exclusive Knightbridge district of London located alongside Hyde Park and across the street from Harrod's. Demonstrated effective service and was awarded letter of recognition and raise for my contributions during the busy holiday season. Was very fortunate for the opportunity to work here."
    },
    {
        year: 2021,
        title: 'Trinity College of Music - London, United Kingdom',
        duration: '2 Years',
        details:
            "Earned my Master's with honors at Trinity in London: one of the world's top music colleges. Won the Montagu Cleeve prize for guitar in my Second Year. Was fortunate to study there with Graham Devine. Performed at prestigious venues in London such as Wigmore Hall, The Queen's House and St. James Picadilly Cathedral. Went on to compete internationally in competitions and perform abroad in many countries such as France, Portugal, Austria and Spain. Went from self-taught only child in rural VA to prize-winner at one of the world's top conservatories. Completed my degree with honors while working as Bartender in Trafalgar Tavern in Greenwich"
    },
    {
        year: 2019,
        title: 'Bartender - London, United Kingdom',
        duration: '1 Year',
        details:
            'Worked as go-to bartender for early-morning weekend shifts at Trafalgar Tavern where we served many patrons Sunday Roast at this historic pub on the Thames in Greenwich. Was responsible mostly for pouring pints and mixing cocktails, occasionally serving food when we were short-staffed. The likes of Charles Dickens used to dine at this pub.'
    },
    {
        year: 2019,
        title: 'Virginia Commonwealth University - Richmond, Virginia',
        duration: '5 Years',
        details:
            "Studied for my Bachelor's at Virginia Commonwealth University for Classical Guitar Performance under the tutelage of David Robinson. Was manager of Choral Arts Society for Dr. Erin Freeman. Took electives in math and religious studies under Department Head of Religious Studies Cliff Edwards and received top marks. Completed my degree while working full-time as a room server at the only 5-star hotel in Richmond, the Jefferson Hotel"
    },
    {
        year: 2017,
        title: 'Jefferson Hotel - Richmond, Virginia',
        duration: '2 Years',
        details:
            'Maintained the highest possible service standards at the Jefferson Hotel rated 5 stars by Forbes and 5 diamond by AAA. As the senior team member, I regularly resolved guests complaints/needs, trained new team members, provided performance feedback, and lead the team. Dealt with several high intensity situations/emergencies at the hotel with singular precision and effective communication with managers. Collaborated between many departments within the hotel to provide to guest accomodations. Oversaw evening dinner shifts during busy high-volume winter seasons.'
    },
    {
        year: 2016,
        title: 'City Oyster and Sushi Bar - Delray Beach, Florida',
        duration: '2 Years',
        details:
            "Acted as server in extremely fast-paced, bustling restaurants on Atlantic Ave in Delray Beach, which boasts a consistently busy winter season due to the snowbirds and good weather in South Florida during the winter. Every weeknight would have 400+ covers. Cut my teeth in the restaurant industry. Was promoted from busboy to food runner to server. Collaborated with kitchen staff to ensure efficient service and excellent customer experience. Worked 3 jobs at once on Atlantic Ave (Others being DaDa and Vic and Angelo's) where I was also a BarBack and Food Runner"
    },
]

const Work = () => {
    return (
        <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 pt-16 bg-[#1f1f1f]'>
            <h1 className='text-4xl font-bold text-center  text-[#99afe6] pb-8'>Skills</h1>
            <div className='flex flex-wrap pb-5'>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">HTML</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">CSS</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">JavaScript</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Python</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">React.js</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Next.js</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Java</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Flask</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Express</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Node.js</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Spring Boot</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Spring Security</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Bcrypt</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Bootstrap</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Tailwind</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Sass</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Material-UI</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">MongoDB</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">MySQL</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Mongoose</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Jinja</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Rest APIs</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">AJAX</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">Strapi</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">OOP</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">AWS</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">GIT</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">GitHub</div>
                <div className="py-4 px-5 mb-4 mr-5 bg-[#2e2e2e] rounded-lg font-semibold text-[#99afe6]">VS Code</div>

            </div>
            <h1 className='text-4xl font-bold text-center text-[#99afe6] pb-8 pt-16'>About Me</h1>
            <div className='flex flex-wrap'>
                <p className='text-[#bcbcbc]'>I have always been passionate about technology. While Completing my 2nd Master's degree I realized I don't want to be a music teacher for my career. Instead I decided after I finished to take the jump and get certified for my coding skills with Coding Dojo. It was a challenge, but I couldn't be happier with the knowledge that I've gained. I'm a highly motivated learner, most recently excelling at API integration, &
                    UI/UX feature creation, and working with various technologies to display data in a meaningful, accessible way for consumers. In my spare time I like to study music, powerlift in the gym, read books, watch movies and hang out with my dog Bindi.</p>
            </div>
            <div className='max-w-[520px] m-auto md:pl-20 p-4 pt-12'>
                <img src={Bindi} alt="img" height={100} />
            </div>

            {/* {data.map((item,idx)=>(
                <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
                />
            ))} */}

        </div>

    )
}

export default Work