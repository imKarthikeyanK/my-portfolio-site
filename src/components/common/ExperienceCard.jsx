import React, { Fragment } from 'react';


function ExperienceCard({ experience }) {
    return (
        <Fragment>
            <div className="experience-card">
                <div className="exp-card">
                    <div className="title">
                        <h1>{experience.workArea}</h1>
                    </div>
                    <div className="company">
                        <h2>{experience.company}</h2>
                    </div>
                    <div className="work-range">
                        <p>{experience.workRange}</p>
                    </div>
                    <div className="work-location">
                        <p>{experience.workLocation}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
} export default ExperienceCard;