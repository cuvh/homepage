import React from "react";

import editIcon from "assets/img/new-homepage/icons/edit.svg";
import learningcurveIcon from "assets/img/new-homepage/icons/learningcurve.svg";
import balanceIcon from "assets/img/new-homepage/icons/balance.svg";
import memorableIcon from "assets/img/new-homepage/icons/memorable.svg";

const BENEFITS = [
    {
        title: "Simple editing",
        description:
            "Make changes straight on the page and see a preview of the resume without downloading it.",
        icon: editIcon,
        alt: "Simple resume editing represented by a pen icon",
    },
    {
        title: "No learning curve",
        description:
            "Each step of building your resume is so natural, you don’t have to figure things out on your own.",
        icon: learningcurveIcon,
        alt: "No learning curve for building the resume represented by a graduating cap icon",
    },
    {
        title: "Balance the personal and the professional",
        description:
            "Showcase personal strengths and key drivers in addition to your skills to demonstrate culture fit.",
        icon: balanceIcon,
        alt: "Balance of the personal and professional strengths represented by a scale icon",
    },
    {
        title: "A memorable resume",
        description:
            "The distinct visual style will make people remember you and the key things about you, even in a pile of resumes.",
        icon: memorableIcon,
        alt: "Visually appealing resume represented by a star icon",
    },
];

export default function Benefits() {
    return (
        <div className="homepage-benefits">
            <div className="container">
                <div className="benefits-spacer Grid">
                    {BENEFITS.map((benefit, index) => (
                        <div
                         key={index}
                         id={`benefits-item-${index}`}
                         className="Grid-cell--md-3 Grid-cell--sm-6 Grid-cell--xs-12 m-top-4 text-center benefits-item">
                            <div>
                                <img
                                 src={benefit.icon}
                                 alt={benefit.alt}
                                />
                            </div>
                            <h5 className="m-top-3 m-bottom-2">{benefit.title}</h5>
                            <p className="text-muted">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
