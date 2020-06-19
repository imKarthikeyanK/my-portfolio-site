import React, { Fragment } from 'react';
import Card from './common/cards';

const skills = [
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    },
    {
        skill: "Python",
        image: "",
        description: "In the growing world, I always wondered about the impact that the software industrie has put on the development of the cutting edge technology powered Living"
    }
]

function TechStack() {
    return (
        <Fragment>
            <div className="skillsCard">
                {
                    skills.map((skill, index) => (
                        <Card key={index} skills={skill} />
                    ))
                }
            </div>
        </Fragment>
    )
} export default TechStack;