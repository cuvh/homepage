import React from "react";
import Link from "gatsby-link";
import Meta from "components/Meta";

import Members from "components/About/Members";
import Images from "components/About/Images";

import DefaultLayout from "layouts/DefaultLayout";

import experimentIcon from "assets/img/about/experiment@1x.svg";
import growIcon from "assets/img/about/grow@1x.svg";
import iterateIcon from "assets/img/about/iterate@1x.svg";
import keyIcon from "assets/img/about/key@1x.svg";
import respectIcon from "assets/img/about/respect@1x.svg";

export default function About() {
    return (
        <DefaultLayout>
            <Meta
             title="About Enhancv"
             description="Our mission is to help talented people unleash their full potential by giving them the opportunity to create resumes that show who they really are."
            />
            <div className="container">
                <h1 className="text-center m-bottom-12 m-top-12">
                    Enhancv brings resumes that are all about you
                </h1>
            </div>
            <div className="about-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text-center">
                            <h3>
                                Our mission is to help talented people believe in themselves and
                                unleash their full potential
                            </h3>
                            <p className="m-top-6 text-large">
                                We've seen a lot of incredibly talented people who are dissatisfied
                                with their current job or job prospects simply because they aren't
                                able to strongly present themselves. You need to show your dream
                                employer that you are a perfect match with your skill-set,
                                motivation, and most importantly, personality. Enhancv is here to
                                give the power back to you and help you tell the world who you
                                really are.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Members />

            <div className="values-container">
                <div className="container m-top-6 text-center">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text-center">
                            <h3 className="m-bottom-12">Our values is what we are</h3>
                        </div>
                    </div>
                    <div className="Grid">
                        <div className="Grid-cell--sm-6 Grid-cell--md-5">
                            <div className="about-value m-bottom-12">
                                <span>
                                    <img src={respectIcon} />
                                </span>
                                <h5 className="m-top-3 text-dark-grey">Respect & candor</h5>
                                <p className="m-top-2">
                                    We are individuals first, so accept people for who they are &
                                    treat them respectfully. Speak candidly without worrying about
                                    what others would think.
                                </p>
                            </div>
                        </div>
                        <div className="Grid-cell--sm-6 Grid-cell--md-5 Grid-cell--md-offset-2">
                            <div className="about-value m-bottom-12">
                                <span>
                                    <img src={growIcon} />
                                </span>
                                <h5 className="m-top-3 text-dark-grey">Grow, but stay in touch</h5>
                                <p className="m-top-2">
                                    We are never done learning and we challenge ourselves by raising
                                    the bar with every next project. Yet, we stay in touch with
                                    details & no task is beneath us.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="Grid">
                        <div className="Grid-cell--sm-6 Grid-cell--md-5 ">
                            <div className="about-value m-bottom-12">
                                <span>
                                    <img src={experimentIcon} />
                                </span>
                                <h5 className="m-top-3 text-dark-grey">
                                    Curiosity & experimentation
                                </h5>
                                <p className="m-top-2">
                                    No matter how good we are, we stay curious for new opportunities
                                    and enjoy trying things out without judgement. Yet, knowing why
                                    is important to maintain focus and to see things through.
                                </p>
                            </div>
                        </div>
                        <div className="Grid-cell--sm-6 Grid-cell--md-5 Grid-cell--md-offset-2">
                            <div className="about-value m-bottom-12">
                                <span>
                                    <img src={iterateIcon} />
                                </span>
                                <h5 className="m-top-3 text-dark-grey">
                                    Bias for action & iteration
                                </h5>
                                <p className="m-top-2">
                                    We start small no matter how grand our idea is. Speed matters,
                                    so we prefer getting something out there to extensive studies.
                                    We take calculated risks & learn from mistakes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="Grid Grid--spaceAround">
                        <div className="Grid-cell--sm-6 Grid-cell--md-5">
                            <div className="about-value m-bottom-12">
                                <span>
                                    <img src={keyIcon} />
                                </span>
                                <h5 className="m-top-3 text-dark-grey">Customer trust</h5>
                                <p className="m-top-2">
                                    We deliver a simple & delightful experience to address the
                                    customer's need. Earning & keeping trust is key to success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="Grid Grid--spaceBetween m-bottom-2">
                    <div className="Grid-cell--auto text-gray-light">
                        Have a glimpse at the everyday life at Enhancv
                    </div>

                    <div className="Grid-cell--auto">
                        <a
                         target="_blank"
                         href="https://www.instagram.com/enhancv"
                         className="feature-link">
                            Follow us @enhancv
                        </a>
                    </div>
                </div>
            </div>
            <Images />
            <div className="about-join">
                <div className="container p-top-11 p-bottom-11 text-center">
                    <h4 className="text-white">Interested in working with us? Join our team</h4>
                    <Link
                     to="/careers"
                     className="btn btn-lg btn-primary m-top-4">
                        VIEW CAREERS
                    </Link>
                </div>
            </div>
        </DefaultLayout>
    );
}
