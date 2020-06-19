import React, { Fragment } from 'react';


function ImageCard({ image }) {
    return (
        <Fragment>
            <div className="image-card">
                <div className="img-card">
                    <img src={image.workArea} alt={image.workLocation} />
                </div>
            </div>
        </Fragment>
    )
} export default ImageCard;
