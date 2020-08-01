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
        description: [
            "Using Mozilla’s Open Source Pre Trained Deep Speech Models, built Flask Application to Transcribe Customer support audio Speeches into Texts Logs.",
            "Trained and Fine-tuned the model with Custom Generated Dataset for Indian Accent.",
            "Involved Various Machine Learning Practices including data analysis, data cleaning, data preparation, automating data cleaning, preparation pipeline which takes in a long audio of various formats and converts it into 16000 Hz, 16bit channel & into WAV file and crops the WAV into small chunks wherever it hits silence in audio and generating text logs for the chunks using pre trained models in a Linux environment"
        ]
    },
    {
        name: "Project Management System (Internal Flask Application)",
        description: [
            "Built end to end Flask Application which is one of the major applications used by 50+ employees in the current firm.",
            "The Product helps the firm to Manage and Maintain Projects, Day to Day Tasks & Activity Allocation, Time Sheet Entry, Work Report Generation and to Track Works and Productivity of Developers.",
            "With various other features including Automated weekly Mail Notification to send detailed summary of previous week timesheet and productivity report, bulk time sheet entry, Cumulative Dashboard & Multi User Panels, etc."
        ]
    },
    {
        name: "IRCTC Tourism Application (e-Commerce)",
        description: [
            "Built complete scalable Back end REST API for Tourism Project which powers Web and Android Applications in front end.",
            "Built with various features including Automated best & low cost Tour Plans suggestion service using start & end locations, Automatic generation of Travel itinerary for single & round trips and booking tickets with all kind of travel services with best possible cost and time.",
            "Generation of PDF travel itinerary Report with complete tour plan details and schedule. Plan covers from Taxis, Hotels, bus, trains to tourist spots & guides.",
            "Built the end to end application and supported the API consumers throughout the project"
        ]
    },
    {
        name: "Face Recognition System (Machine Learning, Web Applications, Insight Face, OpenCV)",
        description: [
            "As part of the team contributed well to the core Face recognition engine.",
            "Helped the team by tweaking an algorithm which improved the recognition speed by 50%, tweaked pre training method which improved the training performance by 15%, fine-tuned recognition parameters which improved recognition accuracy up to 15%.",
            "Built front end web apps using React for use cases such as Employee attendance, Visitor management, VIP management and Criminal Identification.",
            "Built an algorithm to have a single backend file system organization and storage functionality & handle duplicate entries and abandoned registration files for all the above use cases."
        ]
    },
    {
        name: "IRCTC Events Management",
        description: [
            "Built scalable backend REST API services for the web and handled the front end Event registration pipeline with React which features series of forms with fully customizable event scheduling feature & handles event booking feature with React & provided API support for the Consumers"
        ]
    },
    {
        name: "Easy Fruit Veg Web App",
        description: [
            "Easy Fruit Veg is an eCommerce web app to showcase and sell Fresh Vegitables online.",
            "The React app with Python backend developed by Prematix based on an Product Idea. I contributed to the API development and web app development in the areas of Product Order pipeline, Product Listings and User management."
        ]
    },
    {
        name: "Loans Web App",
        description: [
            "Loans web app is an Vendour specific loan management web application built with Python for backend and React js for front end and MySQL for database. I contributed to the Complete API development with Flask and bit of front end development with React js."
        ]
    },
    {
        name: "Chat bots of various domains",
        description: [
            "Built highly responsive & intelligent Chat bots to support various use cases using Python Chatterbot, Ajax."
        ]
    },
    {
        name: "Web Scrapping",
        description: [
            "Built Automated web scrappers to scrap data from particular sites, convert them into json and stores them into database for data analysis"
        ]
    },
    {
        name: "Zero call Accidents Android App",
        description: [
            "Zero call Accidents is an Android App which we built in our college for IEDC.",
            "We have got funded by the Indian govt for the project.", 
            "We have participated in the Tamilnadu state skill summit with this app and won first prize in zonal level and participated in State level skill summit."
        ]
    },
    {
        name: "SpeakyTalky Android App",
        description: [
            "Speaky Talky is our Final year Project Android Application",
            "The app can be used as an communication assistant to make communication between speacially challenged people and normal people"
        ]
    },
    {
        name: "Acheivements",
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
        company: "Prematix",
        workRange: "June 2018 - July 2020",
        workArea: "☆ Full Stack Development (Python, React)",
        workLocation: "Hosur, Tamil Nadu, INDIA",
        companyLogo: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/Prematix+Logo.svg"
    },
    {
        company: "Verloop",
        workRange: "July 2020 - Still",
        workArea: "☆ Backend Engineering (Python)",
        workLocation: "Bengaluru, Karnataka, INDIA",
        companyLogo: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/Verloop-Logo-Vertical-HD.png"
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