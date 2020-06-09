import React, { Fragment } from 'react';


function ProCard({ project }) {
    return (
        <Fragment>
            <div className="pro-card-container">
                <div className="pro-card">
                    <div className="title">
                        <h1>{project.name}</h1>
                    </div>
                    <div className="description">
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
} export default ProCard;