import React, { Fragment } from 'react';
import profileImage from '../../../static/images/karthikeyank.jpg';
import { Link } from 'react-router-dom';


function Introduction() {
    return (
        <Fragment>
            <div className="introduction">
                <div className="col">
                    <div className="profilePicture">
                        <img src={profileImage} alt="karthikeyank"></img>
                    </div>
                </div>
                <div className="col">
                <h1>"Staying Hungry & Foolish"</h1>
                    <p>I'm Karthikeyan.K from Hosur, Tamil Nadu, India. A BE CSE Graduate from PMC TECH, Hosur (Anna University). I'm one of them who always love solving problems and producing solutions. I always love building things and see them work.</p>
                    <p>
                        I'm a dreamer. It was my dream to become a Software Engineer, am Glad that am pursuing my dream now. I always dreamed about making big things and making the world a better place for Living. I'm a singer, I'm an Artist, I'm a ..... etc,. I always beleive that anyone can do anything. All it needs is the patience to know and learn it. I'm a kind of try it, know it, learn it and follow it person. As Steve Jobs said "Put a dent on the Universe", I'm always learning, doing, trying, atleast dreaming about putting my dent on the Universe.
                    </p>
                    <p>
                        In my current Organization I work on Full Stack Development with Python & React JS & DB as main stacks. I have worked on Python, React JS, SQL, MySql, MongoDB, HTML, CSS, JS. In Python I have worked on mostly Flask and little bit Django and spent a good amount of time in Artificial Intelligent development and the related libraries. Here we are working on various sectors of softwares. I have mostly worked on eCommerce, Project management, Artificial Intelligent applications, Finance applications, stack management, Web Application Development. As it is a startup, mostly everyone has to work on all the stacks from frontend to backend. This lead me to learn a lot of things about software development and gave me a good understanding of entire software product lifecycle and working methodology.
                    </p>
                    <p>
                        In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living. I always dreamed about being a part of the development of a cutting edge technology powered Living and I'm very excited about the opportunities that will let me to do so. I beleive and follow the quote " If there is no opportunities, create one ". I'm seamingly working on the opportunities that I have created too.</p>
                    <p>
                        From my point of view into the world, I see a lot of problems that needs solutions. There is still a lot of problems needs to be solved. There is still a lot of people are not connected. Some of them are still not introduced to technology and some of them can't afford it. So, my dream is to solve those problems and build things and make it affordable and reach every single human and letting them taste it.</p>
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