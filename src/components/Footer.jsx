import React, { Fragment } from 'react';
// import GitImage from '../static/images/GitHub-Mark-Light-64px.png';
import { Link } from 'react-router-dom';
// import aws from '../static/images/awsl.png';


function Footer() {
    let imageObj = {
        git: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/GitHub-Mark-Light-64px.png",
        aws: "https://kportfolio-files.s3.ap-south-1.amazonaws.com/awsl.png"
    }
    return (
        <Fragment>
            <div className="footer">
                <div className="col">
                    <img src={imageObj.git} alt="git-logo" className="git-image" />
                    <p>Source Available <a href="https://github.com/imKKK/my-portfolio-site" target="_blank" rel="noopener noreferrer">here</a></p>
                </div>
                <div className="col">
                    <Link to={'/connect'}>
                        <button type="button" className="connect-btn">CONNECT</button>
                    </Link>
                </div>
                <div className="col">
                    <div className="deploy">
                        <img src={imageObj.aws} alt="git-logo" className="git-image" />
                        <p>Deployed with</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
} export default Footer;