import React, { Fragment } from 'react';
import profileImage from '../../../static/images/karthikeyan.png';


function LandingBlock() {
    return (
        <Fragment>
            <div className="landingBlock">
                <div className="row">
                    <div>
                        <p>I'm</p>
                        <h1>Karthikeyan K</h1>
                        <div className="skillIntro">
                            <p>A Python Developer, React Developer, Full Stack Developer</p>
                        </div>
                    </div>
                    <div className="profilePicture">
                        <img src={profileImage} alt="karthikeyank"></img>
                    </div>
                </div>
            </div>
        </Fragment>
    )
} export default LandingBlock;