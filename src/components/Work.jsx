import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2022,
        title: "Software Engineer Bootcamp",
        duration: '1 Year',
        details:
        "Completed certificate from Coding Dojo: an immersive web development program specialized in teaching full stack development to train students to excel in the professional software development field — from front-end to back-end to data storage. Accumulated 1,000+ hours of intensive programming coursework, including building, testing, and debugging in Python, Java, and MERN. 200+ hours of full stack development on web apps and other technical projects. Languages: Python, Java, JavaScript, HTML, CSS, MySQL. Libraries/Frameworks/Tools: Flask, MongoDB, Express, React, Node.js, Mongoose, Spring Boot, Spring Boot, Spring Security. Programs: VSCode, MySQL Workbench (ORM Wireframe), Postman (API Testing)"
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
        title: "Room Service Server - Mandarin Oriental Hyde Park/One Hyde Park, London, UK',
        duration: '1 Year',
        details:
        "Demonstrated ultimate capacity for 5-star service as room service attendant at what is considered by some to be the top hotel in the world, featuring One Hyde Park (once the highest-sold real estate location in London) and Dinner by Heston Blumenthal (often ranked as one of the top 10 restaurants in the world). Collaborated with colleagues from all around the world, across several departments of the hotel at this 5-star hotel in the exclusive Knightbridge district of London located alongside Hyde Park and across the street from Harrod's. Demonstrated effective service and was awarded letter of recognition and raise for my contributions during the busy holiday season. Was very fortunate for the opportunity to work here."
    },
    {
        year: 2021,
        title: 'Trinity Laban Conservatoire of Music and Dance - London, UK',
        duration: '2 Years',
        details:
        "Earned my Master's with honors at Trinity in London: one of the world's most prestigious music colleges. Won the Montagu Cleeve prize for guitar in my Second Year. Was forunate to study there with Graham Devine. Performed at prestigious venues in London such as Wigmore Hall, The Queen's House and St. James Picadilly Cathedral. Went on to compete internationally in competitions and perform abroad in many countries such as France, Portugal, Austria and Spain. Went from self-taught only child in rural VA to prize-winner at one of the world's top conservatories. Completed my degree with honors while working as Bartender in Trafalgar Tavern in Greenwich"
    },
    {
        year: 2019,
        title: 'Bartender - London, UK',
        duration: '1 Year',
        details:
        'Worked as go-to bartender for early-morning weekend shifts at Trafalgar Tavern where we served many patrons Sunday Roast at this historic pub on the Thames in Greenwich. Was responsible mostly for pouring pints and mixing cocktails, occasionally serving food when we were short-staffed. The likes of Charles Dickens used to dine at this pub.'
    },
    {
        year: 2019,
        title: 'VCU',
        duration: '5 Years',
        details: 
        "Studied for my Bachelor's at Virginia Commonwealth University for Classical Guitar Performance under the tutelage of David Robinson. Was manager of Choral Arts Society for Dr. Erin Freeman. Took electives in math and religious studies under Department Head of Religious Studies Cliff Edwards and received top marks. Completed my degree while working full-time as a room server at the only 5-star hotel in Richmond, the Jefferson Hotel"
    },
    {
        year: 2017,
        title: 'Jefferson Hotel - Richmond, VA',
        duration: '2 Years',
        details:
        'Maintained the highest possible service standards at the Jefferson Hotel. Dealt with several high intensity situations/emergencies at the hotel with singular precision and effective communication with managers. Collaborated between many departments within the hotel to provide to guest accomodations. Oversaw evening dinner shifts during busy high-volume winter seasons.'
    },
    {
        year: 2016,
        title: 'City Oyster and Sushi Bar - Delray Beach, FL',
        duration: '2 Years',
        details:
        "Acted as server in extremely fast-paced, bustling restaurants on Atlantic Ave in Delray Beach, which boasts a consistently busy winter season due to the snowbirds and good weather in South Florida during the winter. Every weeknight would have 400+ covers. Cut my teeth in the restaurant industry. Was promoted from busboy to food runner to server. Collaborated with kitchen staff to ensure efficient service and excellent customer experience. Worked 3 jobs at once on Atlantic Ave (Others being DaDa and Vic and Angelo's) where I was also a BarBack and Food Runner"
    },
]

const Work = () => {
    return (
        <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item,idx)=>(
                <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
                />
            ))}
        </div>
    )
}

export default Work