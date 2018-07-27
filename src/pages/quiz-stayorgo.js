import React from "react";
import Link from "gatsby-link";
import Meta from "components/Meta";
import Img from "gatsby-image";
import Track from "utils/Track";

import logo from "../assets/img/logo.svg";

const StayOrGoQuiz = ({ data: { fishImage } }) => (
    <div className="career-page gatsby-image-wrapper">
        <Meta
         title="Quiz: Should I stay or should I go?"
         description="Quiz - Evaluate your current job in 3 minutes or less"
        />
        <link
         href="https://fonts.googleapis.com/css?family=Rubik:400,500"
         rel="stylesheet"
        />
        <div className="quiz-stayorgo">
            <div className="q-left-container hidden-sm hidden-xs">
                <Img
                 className="fish-img"
                 sizes={fishImage.childImageSharp.sizes}
                 alt="Proudly holding resume photo"
                />
            </div>
            <div className="q-right-container">
                <div className="q-mobile">
                    <h1>Should I stay or should I go?</h1>
                    <h2>Evaluate your current job in 3 minutes or less</h2>
                    <Img
                     className="fish-mobile-img hidden-md hidden-lg"
                     sizes={fishImage.childImageSharp.sizes}
                     alt="Proudly holding resume photo"
                    />
                </div>
                <div className="q-instructions">
                    <p>
                        We’ve all been there. Whether it’s a stubborn colleague, a manager you don’t
                        see eye to eye with, a challenging project - or lack of one amidst a sea of
                        monotonous work.
                    </p>
                    <p>
                        It’s common to feel you’re ready to move on and change your job - but
                        there’s often doubt involved. Is this a phase in the relationship with your
                        work or really the break-up point?
                    </p>
                    <p>Take our quiz and find out in just a couple of minutes!</p>

                    <a
                     href="https://enhancv.outgrow.us/staygo"
                     onClick={() => Track("Engineering as Marketing", "Start Quiz StayOrGo")}
                     className="btn btn-primary btn-start-quiz">
                        LET'S START
                    </a>
                    <div className="Grid q-enhancv">
                        <img
                         className="hidden-sm hidden-xs"
                         src={logo}
                         alt="Company logo - Enhancv"
                        />
                        <div>
                            Brought to you by your friends at{" "}
                            <a href="https://enhancv.com/">Enhancv</a>
                        </div>
                    </div>
                    <img
                     className="hidden-md hidden-lg q-mobile-logo"
                     src={logo}
                     alt="Company logo - Enhancv"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default StayOrGoQuiz;

export const pageQuery = graphql`
    query StayOrGoQuiz {
        fishImage: file(relativePath: { eq: "landing-pages/fish.png" }) {
            childImageSharp {
                sizes(maxWidth: 2500) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
    }
`;
