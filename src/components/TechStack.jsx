import React, { Fragment } from 'react';
import Card from './common/cards';

const skills = [
    {
        skill: "Python",
        image: "",
        description: ""
    },
    {
        skill: "Python",
        image: "",
        description: ""
    },
    {
        skill: "Python",
        image: "",
        description: ""
    },
    {
        skill: "Python",
        image: "",
        description: ""
    },
    {
        skill: "Python",
        image: "",
        description: ""
    },
    {
        skill: "Python",
        image: "",
        description: ""
    },
    {
        skill: "Python",
        image: "",
        description: ""
    },
    {
        skill: "Python",
        image: "",
        description: ""
    }
]

function TechStack() {
    return (
        <Fragment>
            <div className="skillsCard">
                {
                    skills.map((skill, index) => (
                        <Card />
                    ))
                }
            </div>
        </Fragment>
    )
} export default TechStack;