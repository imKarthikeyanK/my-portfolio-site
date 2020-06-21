import React, { Fragment } from 'react';
import CodingSVG from '../../../static/svg/code.svg';


function LandingBlock() {
    return (
        <Fragment>
            <div className="landingBlock">
                <div className="row">
                    <div>
                        <p>Hello, I'm</p>
                        <h1>Karthikeyan K</h1>
                        <div className="skillIntro">
                            <p>A Python Developer, React Developer, Full Stack Developer</p>
                        </div>
                    </div>
                    <div className="profilePicture">
                        <img src={CodingSVG} alt="karthikeyank"></img>
                    </div>
                </div>
                <div className="down-arrow">
                    <a href="#intro"><span></span></a>
                </div>
            </div>
        </Fragment>
    )
} export default LandingBlock;