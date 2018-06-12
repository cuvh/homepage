import React from "react";
import Link from "gatsby-link";
import Meta from "components/Meta";

import Members from "components/About/Members";
import Images from "components/About/Images";

import DefaultLayout from "layouts/DefaultLayout";

export default function About() {
    return (
        <DefaultLayout>
            <Meta
             title="About Enhancv"
             description="Our mission is to help talented people unleash their full potential by giving them the opportunity to create resumes that show who they really are."
            />
            <div className="container">
                <h1 className="text-center bottom-lg top-lg">
                    Enhancv brings resumes that are all about you
                </h1>
            </div>
            <div className="about-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2 text-center">
                            <h3>
                                Our mission is to help talented people believe
                                in themselves and unleash their full potential
                            </h3>
                            <p className="top-md text-large">
                                We've seen a lot of incredibly talented people
                                who are dissatisfied with their current job or
                                job prospects simply because they aren't able to
                                strongly present themselves. You need to show
                                your dream employer that you are a perfect match
                                with your skill-set, motivation, and most
                                importantly, personality. Enhancv is here to
                                give the power back to you and help you tell the
                                world who you really are.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Members />
            <div className="container top-md text-center">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 text-center">
                        <h4 className="bottom-lg">Our values is what we are</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-md-offset-1">
                        <div className="about-value bottom-lg">
                            <span className="about-value-number">1</span>
                            <h5 className="m-top-3 text-primary">
                                A company of friends
                            </h5>
                            <p className="m-top-2">
                                We have fun while working, often hang out
                                together and go to the seaside. Although
                                sometimes the Atlantic separates us, we are
                                always there for one another.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5">
                        <div className="about-value bottom-lg">
                            <span className="about-value-number">2</span>
                            <h5 className="m-top-3 text-primary">
                                No to mediocrity
                            </h5>
                            <p className="m-top-2">
                                Although we are young, we do things amazingly.
                                If we don’t do well at something, we admit the
                                fact and find a way to make it shine.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-md-offset-1">
                        <div className="about-value bottom-lg">
                            <span className="about-value-number">3</span>
                            <h5 className="m-top-3 text-primary">
                                User problems are a crisis
                            </h5>
                            <p className="m-top-2">
                                We understand why user problems are a crisis, so
                                you will never hear us saying “Sorry for the
                                inconvenience”. Our mission is to help people,
                                so it is a privilege to talk to you and solve
                                the issue together.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5">
                        <div className="about-value bottom-lg">
                            <span className="about-value-number">4</span>
                            <h5 className="m-top-3 text-primary">
                                Mistakes are overrated
                            </h5>
                            <p className="m-top-2">
                                Instead of only focusing on what isn’t working
                                in order to fix it, we focus on what is working
                                well, so that we emphasize on that and make it
                                even better on the way to making it the best.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Images />
            <div className="about-join">
                <div className="container p-top-11 p-bottom-11 text-center">
                    <h4>Interested in working with us? Join our team</h4>
                    <Link
                     to="/careers"
                     className="btn btn-primary top-sm"
                    >
                        View Careers
                    </Link>
                </div>
            </div>
        </DefaultLayout>
    );
}
