import React, { Fragment } from 'react';


function Card({ skills }) {
    return (
        <Fragment>
            <div className="card-container">
                <div className="card">
                    <div className="image-container">
                        <img src={skills.image} className="image" alt="skill"></img>
                    </div>
                    {/* <div className="content-container">
                        <p className="container">{skills.description}</p>
                    </div> */}
                </div>
            </div>
        </Fragment>
    )
} export default Card;