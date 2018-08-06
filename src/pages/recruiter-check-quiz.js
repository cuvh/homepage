import React from "react";
import Link from "gatsby-link";
import Meta from "components/Meta";

import Img from "components/Common/Img";
import Track from "utils/Track";

import logo from "../assets/img/logo.svg";

const RecruiterCheckQuiz = ({ data: { metaImage, recruitersImg } }) => (
    <div className="quiz-recruiter-check">
        <Meta
         title="Quiz: Survive being Googled by recruiters!"
         description="You need to pass the test of being Googled. Find out if you’re likely to 
         succeed and what to do so you not just pass, but go to the top of the applicant list!
         This survey will give you personalized recommendations on building up your online 
         presence and it takes just 4 minutes to complete!"
         metaImage={metaImage}
        />
        <link
         href="https://fonts.googleapis.com/css?family=Rubik:400,500"
         rel="stylesheet"
        />
        <div className="quiz-recruiter-check-container">
            <div className="q-left-container Grid--justifyCenter hidden-sm hidden-xs">
                <Img
                 className="recruiters-img"
                 sizes={recruitersImg.childImageSharp.sizes}
                 alt="Proudly holding resume photo"
                />
            </div>
            <div className="moving-eyes-container">
                <div className="moving-eyes" />
            </div>
            <div className="q-right-container">
                <div className="q-mobile-coverImg">
                    <Img
                     className="recruiters-mobile-img hidden-md hidden-lg"
                     sizes={metaImage.childImageSharp.sizes}
                     alt="Recruiters are wathing you"
                    />
                </div>
                <div className="q-mobile">
                    <h1>Survive being Googled by recruiters!</h1>
                    <h2>Here’s how to ace your future employer’s online check</h2>
                </div>
                <div className="q-instructions">
                    <p>
                        You need to pass the test of being Googled. Find out if you’re likely to
                        succeed and what to do so you not just pass, but go to the top of the
                        applicant list!
                    </p>
                    <p>
                        This survey will give you personalized recommendations on building up your
                        online presence and it takes just 4 minutes to complete!
                    </p>

                    <a
                     href="https://enhancv.outgrow.us/recruiter-check-quiz"
                     onClick={() => Track("Engineering as Marketing", "Start Quiz Background Check")}
                     className="btn btn-primary btn-start-quiz">
                        LET'S START
                    </a>
                    <div className="Grid q-enhancv">
                        <a
                         href="https://enhancv.com/"
                         className="logo-link">
                            <img
                             className="hidden-xs"
                             src={logo}
                             alt="Company logo - Enhancv"
                            />
                        </a>
                        <div>
                            Brought to you by your friends at{" "}
                            <a href="https://enhancv.com/">Enhancv</a>
                        </div>
                    </div>
                    <a
                     href="https://enhancv.com/"
                     className="logo-link">
                        <img
                         className="hidden-sm hidden-md hidden-lg q-mobile-logo"
                         src={logo}
                         alt="Company logo - Enhancv"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default RecruiterCheckQuiz;

export const pageQuery = graphql`
    query RecruiterCheckQuiz {
        metaImage: file(relativePath: { eq: "landing-pages/metaImg.jpg" }) {
            childImageSharp {
                sizes(maxWidth: 2500) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
        recruitersImg: file(relativePath: { eq: "landing-pages/recruitersImg.png" }) {
            childImageSharp {
                sizes(maxWidth: 2500) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
    }
`;
