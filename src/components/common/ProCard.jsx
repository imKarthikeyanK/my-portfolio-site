import React, { Fragment } from 'react';
import Proimage from '../../static/svg/project.svg';


function ProCard({ project }) {
    return (
        <Fragment>
            <div className="pro-card-container">
                <div className="pro-card">
                    <div className="title">
                        <div className="proicon">
                            <img src={Proimage} alt="project icon" />
                        </div>
                        <div className="protitle">
                            <h1>{project.name}</h1>
                        </div>
                    </div>
                    <div className="description">
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
} export default ProCard;