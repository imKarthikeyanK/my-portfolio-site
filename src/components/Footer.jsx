import React, { Fragment } from 'react';
import GitImage from '../static/images/GitHub-Mark-Light-64px.png';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <Fragment>
            <div className="footer">
                <div className="col">
                    <img src={GitImage} alt="git-logo" className="git-image" />
                    <p>Source Available <a href="https://github.com/imKKK/my-portfolio-site" rel="noopener noreferror" target="_blank">here</a></p>
                </div>
                <div className="col">
                    <Link to={'/connect'}>
                        <button type="button" className="connect-btn">Connect</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
} export default Footer;