import React, { Fragment } from 'react';
// import profileImage from '../../../static/images/Karthikeyank.png';
import { Link } from 'react-router-dom';


function Introduction() {
    let imageObj = {
        profileImage: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/Karthikeyank.png"
    }
    return (
        <Fragment>
            <div className="introduction" id="intro">
                <div className="col">
                    <div className="profilePicture">
                        <img src={imageObj.profileImage} alt="karthikeyank"></img>
                    </div>
                </div>
                <div className="col">
                    <h1>"Staying Hungry & Foolish"</h1>
                    <p>
                        I'm Karthikeyan.K from Hosur, Tamil Nadu, India. A Computer Science Graduate from Anna University. I'm one of them who always love solving problems and producing solutions. I always love building things and see them work.
                    </p>
                    <p>
                        I'm a dreamer. It was my dream to become a Software Guy, am Glad that am pursuing my dream now. I'm always dreaming about making big things and making the world a better place for Living. I'm a singer, I'm an Artist, I'm a ___ etc,. I always beleive that anyone can do anything. All it needs is the patience to know and learn it. I'm a kind of try it, know it, learn it and follow it person. As Steve Jobs said "Put a dent on the Universe", I'm always learning, doing, trying, atleast dreaming about putting my dent on the Universe.
                    </p>
                    <p>
                        In my current Organization I work on Full Stack Development with Python & React JS & DB as main stacks. I have worked on Python, React JS, SQL, MySql, MongoDB, HTML, CSS, JS. In Python I have worked on mostly Flask and little bit Django and spent a good amount of time in Artificial Intelligent development and the related libraries. Here we are working on various sectors of softwares. I have mostly worked on eCommerce, Project management, Artificial Intelligent applications, Finance applications, stack management, Web Application Development. As it is a startup, mostly everyone has to work on all the stacks from frontend to backend. This lead me to learn a lot of things about software development and gave me a good understanding of entire software product lifecycle and working methodology.
                    </p>
                    <p>
                        Have solid expertise on building backend systems using Python Flask, REST API, Python scripting, Automation, Web scrapping, Chatbot, Django, Machine learning & building frontend using React JS, HTML, CSS, JS, SASS, Bootstrap & DBMS using MsSQL, MySQL, MongoDB & Graphic designing and more. I'm also planning to add Node JS and React Native to my stacks later this year to build bigger things. I love to serve People, solve problems & be the best. Most favorite slogan - "All is Well"
                    </p>
                </div>
            </div>
            <div className="skills-btn">
                <Link to={'/skills'}>
                    <button type="button">SKILLS</button>
                </Link>
            </div>
        </Fragment>
    )
} export default Introduction;