import React, { Fragment } from 'react';
import ProCard from './common/ProCard';

const projects = [
    {
        name: "Development of Speech to text transcriber Application Using Mozilla DeepSpeech",
        description: [
            "I'm a dreamer. It was my dream to become a Software Engineer, am Glad that am pursuing my dream now. I always dreamed about making big things and making the world a better place for Living. I'm a singer, I'm an Artist, I'm a ..... etc,. I always beleive that anyone can do anything. All it needs is the patience to know and learn it. I'm a kind of try it, know it, learn it and follow it person. As Steve Jobs said 'Put a dent on the Universe', I'm always learning, doing, trying, atleast dreaming about putting my dent on the Universe."
        ]
    },
    {
        name: "Project Management System",
        description: [
            "I'm a dreamer. It was my dream to become a Software Engineer, am Glad that am pursuing my dream now. I always dreamed about making big things and making the world a better place for Living. I'm a singer, I'm an Artist, I'm a ..... etc,. I always beleive that anyone can do anything. All it needs is the patience to know and learn it. I'm a kind of try it, know it, learn it and follow it person. As Steve Jobs said 'Put a dent on the Universe', I'm always learning, doing, trying, atleast dreaming about putting my dent on the Universe."
        ]
    },
    {
        name: "IRCTC Tourism Application",
        description: [
            "I'm a dreamer. It was my dream to become a Software Engineer, am Glad that am pursuing my dream now. I always dreamed about making big things and making the world a better place for Living. I'm a singer, I'm an Artist, I'm a ..... etc,. I always beleive that anyone can do anything. All it needs is the patience to know and learn it. I'm a kind of try it, know it, learn it and follow it person. As Steve Jobs said 'Put a dent on the Universe', I'm always learning, doing, trying, atleast dreaming about putting my dent on the Universe."
        ]
    },
    {
        name: "Face Recognition System",
        description: [
            "I'm a dreamer. It was my dream to become a Software Engineer, am Glad that am pursuing my dream now. I always dreamed about making big things and making the world a better place for Living. I'm a singer, I'm an Artist, I'm a ..... etc,. I always beleive that anyone can do anything. All it needs is the patience to know and learn it. I'm a kind of try it, know it, learn it and follow it person. As Steve Jobs said 'Put a dent on the Universe', I'm always learning, doing, trying, atleast dreaming about putting my dent on the Universe."
        ]
    },
    {
        name: "IRCTC Events Management",
        description: [
            "I'm a dreamer. It was my dream to become a Software Engineer, am Glad that am pursuing my dream now. I always dreamed about making big things and making the world a better place for Living. I'm a singer, I'm an Artist, I'm a ..... etc,. I always beleive that anyone can do anything. All it needs is the patience to know and learn it. I'm a kind of try it, know it, learn it and follow it person. As Steve Jobs said 'Put a dent on the Universe', I'm always learning, doing, trying, atleast dreaming about putting my dent on the Universe."
        ]
    },
    {
        name: "& More",
        description: [
            "I'm a dreamer. It was my dream to become a Software Engineer, am Glad that am pursuing my dream now. I always dreamed about making big things and making the world a better place for Living. I'm a singer, I'm an Artist, I'm a ..... etc,. I always beleive that anyone can do anything. All it needs is the patience to know and learn it. I'm a kind of try it, know it, learn it and follow it person. As Steve Jobs said 'Put a dent on the Universe', I'm always learning, doing, trying, atleast dreaming about putting my dent on the Universe."
        ]
    }
]

function Projects() {
    return (
        <Fragment>
            {/* <div className="pro-intro">
            <h1></h1>
            </div> */}
            <div className="projects">
                {projects.map((project, index) => (
                    <ProCard project={project} />
                ))}
            </div>
        </Fragment>
    )
} export default Projects;