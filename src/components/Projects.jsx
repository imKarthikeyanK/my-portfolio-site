import React, { Fragment, useEffect } from 'react';
import ProCard from './common/ProCard';
import ExperienceCard from './common/ExperienceCard';
import ImageCard from './common/imageCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// projects data
const projects = [
    {
        name: "Speech To Text Transcriber Using Mozilla Deep Speech Open Source Models (ML)",
        stacks: ["Python", "AI", "Machine Learning", "Mozilla DeepSpeech", "Flask", "Speech Recognition"],
        description: [
            "Using Mozilla’s Open Source Pre Trained Deep Speech Models, built Flask Application to Transcribe audio Speeches into Texts Logs.",
            "Trained and Fine-tuned the model with Custom Generated Dataset for Indian Accent.",
            "Involved Various Machine Learning Practices including data analysis, data cleaning, data preparation, automating data cleaning, preparation pipeline which takes in a long audio of various formats and converts it into 16000 Hz, 16bit channel & into WAV file and crops the WAV into small chunks wherever it hits silence in audio and generating text logs for the chunks using pre trained models in a Linux environment"
        ]
    },
    {
        name: "Chat bots of various domains",
        stacks: ["Python", "Flask", "MySQL", "JavaScript", "HTML", "CSS"],
        description: [
            "Built highly responsive & intelligent Chat bots to support various use cases using Python Chatterbot, Ajax."
        ]
    },
    {
        name: "Web Scrapping",
        stacks: ["Python", "Flask"],
        description: [
            "Built Automated web scrappers to scrap data from various sites, convert them into json and stores them into database for data analysis"
        ]
    },
    {
        name: "Zero call Accidents Android App",
        stacks: ["Android", "Java"],
        description: [
            "Zero call Accidents is an Android App which we built in our college for IEDC.",
            "We have got funded by the Indian govt for the project.", 
            "We have participated in the Tamilnadu state skill summit with this app and won first prize in zonal level and participated in State level skill summit."
        ]
    },
    {
        name: "SpeakyTalky Android App",
        stacks: ["Android", "Java"],
        description: [
            "Speaky Talky is our Final year Project Android Application",
            "The app can be used as an communication assistant to make communication between speacially challenged people and normal people"
        ]
    },
    {
        name: "Acheivements",
        stacks: [],
        description: [
            "Excellent and Consistent Performer of The Year 2018-2019 (Prematix)",
            "Won District level TN Govt Skill Summit for Zero Call Accidents Android App & Participated in State Level",
            "Employee Of the Month Awards",
            "IIT Bombay Certified for Soft Skills and Workplace Communication"
        ]
    }
]

// experience data
const Experience = [
    {
        company: "Verloop",
        workRange: "July 2020 - November 2021",
        workArea: "☆ Software Development Engineer",
        workLocation: "Bengaluru, Karnataka, INDIA",
        companyLogo: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/Verloop-Logo-Vertical-HD.png"
    },
    {
        company: "Prematix",
        workRange: "June 2018 - July 2020",
        workArea: "☆ Full Stack Developer (Python, React)",
        workLocation: "Hosur, Tamil Nadu, INDIA",
        companyLogo: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/Prematix+Logo.svg"
    }
]


function Projects() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return (
        <Fragment>
            <Helmet>
                <title>KKK | Projects</title>
            </Helmet>
            <div className="experience">
                <div className="experience-container">
                    <div className="div-title">
                        <h1>EXPERIENCE</h1>
                    </div>
                    <div className="data-items">
                        {Experience.map((experience, index) => (
                            experience.company !== "image" ?
                                <ExperienceCard key={index} experience={experience} />
                                : <ImageCard key={index} image={experience} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="projects">
                <div className="projects-container">
                    <div className="div-title">
                        <h1>PROJECTS</h1>
                    </div>
                    {projects.map((project, index) => (
                        <ProCard key={index} project={project} />
                    ))}
                </div>
            </div>
            <div className="skills-btn">
                <Link to={'/skills'}>
                    <button type="button">SKILLS</button>
                </Link>
            </div>
        </Fragment>
    )
} export default Projects;