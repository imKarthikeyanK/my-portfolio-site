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
                        I'm Karthikeyan.K from Hosur, Tamil Nadu, India. An Enthusiastic Full Stack developer with 3.5 years of Experience in Python (Flask, Django), SQL, Mongodb for backend development & React, HTML, CSS, JavaScript, SASS for frontend development. Have worked on various projects of various domains including eCommerce, Project management, Chatbot, Artificial Intelligence, Tourism and Finance. Architected and Built end to end backend REST API systems, RDBMS systems and front end Web systems with very minimal team or as a Single Contributor. I'm one of them who loves challenges, solving problems. I always love building things and see them work.
                    </p>
                    <p>
                        I'm a dreamer. It was my dream to become a Software Engineer. I am Glad that am pursuing my dream now. I always dream about making big things and making the world a better place for Living. I'm a singer, I'm an Artist etc,. I believe that anyone can do anything. All it needs is the patience to know and learn it. I'm a kind of try it, learn it and follow it person. As Steve Jobs said "Put a dent on the Universe", I'm always learning, doing, trying, at least dreaming about putting my dent on the Universe.
                    </p>
                    <p>
                        In the growing world, I always wondered about the impact that the software industry has put on the development of the cutting edge technology powered Living. I always dream about being a part of the development of a cutting edge technology powered Living and I'm very excited about the opportunities that will let me to do so. I believe and follow the quote " If there is no opportunities, create one ". I'm seamingly working on the opportunities that I have created too.
                    </p>
                    <p>
                        From my point of view into the world, I see a lot of problems that needs solution. There is still a lot of problems needs to be solved. There is still a lot of people who are not connected. Some of them are still not introduced to technology and some of them can't afford it. My dream is to solve those problems and build things and make it affordable and reach every single human and letting them taste it.
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