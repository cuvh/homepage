import React from "react";
import Link from "gatsby-link";
import DefaultLayout from "layouts/DefaultLayout";
import CareerBenefits from "components/Careers/CareerBenefits";
import classnames from "classnames";
import Meta from "components/Meta";

export default function GrowthMarketer() {
    return (
        <DefaultLayout>
            <div className="career-page">
                <Meta
                 title="Open position - Marketing Manager"
                 description="Join our team of superheroes"
                />
                <div className="job">
                    <div className="container m-top-7">
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <h3>Senior Growth Marketer</h3>
                            </div>
                        </div>
                        <div className="row text-center job-subtitle">
                            <div className="col-xs-4 col-md-2 col-md-offset-2 secondary-text text-muted">
                                Full-time
                            </div>
                            <div className="col-xs-4 col-md-3 secondary-text text-muted">
                                Marketing team: 5-10 people
                            </div>
                            <div className="col-xs-4 col-md-3 secondary-text text-muted">
                                Sofia / Dublin / Remote
                            </div>
                        </div>

                        <div className="row content job-text m-top-4">
                            <div className="col-md-8 col-md-offset-2">
                                <p>
                                    Enhancv is a growth stage B2C startup founded in 2014. Today,
                                    we’re a team of 16 passionately driven people. Spread across
                                    Sofia and Dublin we're united around the idea that everyone
                                    deserves a meaningful professional path. To make that happen,
                                    we've built a web platform for creating modern CVs. Our tool
                                    helps people highlight their achievements, attitude, and
                                    personality, so they can tell their story with confidence.
                                    Together with our users we make success stories –{" "}
                                    <Link
                                     to="/successful-resumes/sam-young"
                                     target="_blank">
                                        See how Sam got hired at Spotify.
                                    </Link>
                                </p>
                                <p>
                                    We’re proud of our experimentation mentality and data-driven
                                    culture. We know how to grow from $3k to $70k MRR in five weeks
                                    with zero budget. We are now on the hunt for the next big thing
                                    – becoming job applicants’ one-stop shop for personal branding
                                    and self-discovery. And we’re looking for a
                                    <b> Growth Marketer</b> to help us scale the company even
                                    further.
                                </p>
                                <p>
                                    Come work with us in one of our offices (Sofia and Dublin), or
                                    join us remotely anywhere in Europe.
                                </p>

                                <p className="m-top-2">
                                    <strong>What’s the challenge we’re facing:</strong>
                                </p>

                                <p>
                                    We need you in our team to help us scale and optimize current
                                    opportunities within the entire customer funnel (from visitor to
                                    re-activation) but also to spot any gaps to generate value for
                                    new audiences and turn them into paying customers. A marketing
                                    experimenter with a product mindset, you will help find the best
                                    ways to grow our business metrics.
                                </p>
                                <p>
                                    With you joining us, we’d accomplish two of our main goals –
                                    help our product reach more and more people globally, and bring
                                    more value to those who’re already using it. Your work will help
                                    us positively impact the way people move forward in their
                                    careers and lives.
                                </p>

                                <p className="m-top-2">
                                    <strong>What you’ll be doing:</strong>
                                </p>
                                <ul>
                                    <li>
                                        You will optimize our conversion 3x, 10x, maybe even 50x
                                        across the funnel;
                                    </li>
                                    <li>
                                        Collaborate with our Product team to understand the user
                                        journey and get to the heart of how we help our customers
                                        take brave steps in their careers;
                                    </li>
                                    <li>
                                        You’ll also work closely with design, development, and
                                        marketing, as well external PR to iterate and ship growth
                                        marketing experiments across the entire funnel, no matter if
                                        they are in the marketing or product domain;
                                    </li>
                                    <li>
                                        You’d take a value-driven approach, discovering potential
                                        triggers and desires that we haven’t utilized yet and would
                                        dive in them rapidly to explore potential;
                                    </li>
                                    <li>
                                        Work alongside the leadership team, but act as a CEO in your
                                        own domain.
                                    </li>
                                </ul>
                                <p />
                                <p className="m-top-4">
                                    <strong>About you:</strong>
                                </p>

                                <ul>
                                    <li>
                                        You’ve previously helped to scale a SaaS business (from
                                        $100k MRR to $1m), ideally in another B2C scale-up;
                                    </li>
                                    <li>
                                        You are equally left-brained and right-brained: you are a
                                        creative genius when it comes to experiments, but you know
                                        how to execute, measure and improve them;
                                    </li>
                                    <li>
                                        You have a good grasp of human psychology and persuasion
                                        techniques and use them to run successful campaigns;
                                    </li>
                                    <li>
                                        You enjoy using data to solve hard business problems and
                                        know your experiment setups, statistical significance, and
                                        sample sizes;
                                    </li>
                                    <li>
                                        You are genuinely interested in talent acquisition and
                                        career development;
                                    </li>
                                    <li>
                                        You like rolling up your sleeves and doing the work
                                        yourself: even when it comes to finding a certain
                                        journalist’s email or rewriting the copy of our team page.
                                    </li>
                                </ul>
                                <p />
                                <p className="m-top-4">
                                    <strong>What it’s like to work with us:</strong>
                                </p>

                                <p>
                                    People at Enhancv choose to be here because of our shared values
                                    and passion for learning. We work in a few autonomous,
                                    cross-functional mini-teams, each of them looking to solve a
                                    specific business challenge, e.g. growing new unpaid traffic,
                                    improving our CAC:LTV ratio, developing new resume templates,
                                    etc. Creative freedom and the drive to have a meaningful
                                    contribution – to the company and to the world – is what helped
                                    us succeed so far and what will continue to be part of our DNA
                                    as we grow.
                                </p>

                                <p className="m-top-2">
                                    <strong>Does it sound exciting?</strong> Send us your CV at{" "}
                                    <a href={"mailto:work@enhancv.com"}>work@enhancv.com</a> and
                                    tell us your story. We’d love to hear from you!
                                </p>

                                <p className="m-top-3">
                                    <strong>
                                        Enhancv is an equal opportunity employer. Have a look at{" "}
                                        <a
                                         href="https://www.fastcompany.com/40590504/being-a-rupauls-drag-race-superfan-got-me-my-dream-internship"
                                         target="_blank">
                                            how we strive for inclusivity
                                        </a>{" "}
                                        and have built a team of 5 different nationalities. As the
                                        saying goes, it takes all kinds to make a world, and we’re
                                        looking forward to see how you would add to our unique
                                        blend.
                                    </strong>
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 text-center">
                                <div className="row">
                                    <div className="info-group no-top">
                                        <div className="col-xs-12 text-center main-text">
                                            Why join Enhancv
                                        </div>
                                    </div>
                                </div>
                                <CareerBenefits />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <Link
                                 to="/careers"
                                 className="btn btn-link go-back m-top-3 m-bottom-2">
                                    <i className="icon icon-angle-left" /> Back to Careers
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-cta">
                    <div
                     className="container"
                     style={{ height: "300px" }}>
                        <div className="Grid">
                            <div className="Grid Grid-cell Grid--alignCenter text-center">
                                <div className="Grid-cell">
                                    <h2 className="m-top-no">Learn more about us</h2>
                                    <Link
                                     to="/about"
                                     className="btn btn-default btn-lg m-top-2">
                                        View here
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
