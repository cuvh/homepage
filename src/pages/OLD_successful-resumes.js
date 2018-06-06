import React from "react";

import Link from "gatsby-link";
import Helmet from "react-helmet";

import List from "components/SuccessfulResumes/List";
import Subscribe from "components/SuccessfulResumes/Subscribe";

import DefaultLayout from "layouts/DefaultLayout";
import SocialPanel from "components/SuccessfulResumes/SocialPanel";
import FamousResumesList from "components/SuccessfulResumes/FamousResumesList";

import caseyImg from "assets/img/new-successful-resumes/youtuber-casey-neistat.png";
import steveJobs from "assets/img/new-successful-resumes/avatars/steve_jobs/avatar.jpg";
import steveJobsCompany from "assets/img/new-successful-resumes/avatars/steve_jobs/company.png";
import hoverResume from "assets/img/new-successful-resumes/placeholders/hover-cv.png";
import hannahMills from "assets/img/new-successful-resumes/highlighted/hannah_mills.png";
import hannahMillsResume from "assets/img/new-successful-resumes/highlighted/cv.png";
import caseyResume from "assets/img/successful-resumes/famous/casey-neistat/casey-neistat-resume.jpg";

export default function SuccessfulResumes(props) {
    return (
        <DefaultLayout>
            <main className="container">
                <section className="page--head">
                    <h1 className="h1">
                        Looking for your next gig?&nbsp;
                        <span className="text-highlight-purple">
                            Get inspired
                        </span>
                    </h1>
                    <h5 className="h5 text-gray-light m-xs-top-1 m-md-top-3">
                        Go through our resume gallery.
                    </h5>
                </section>

                <section className="resumes--accent accent--reverse Grid full-width">
                    <div className="resumes--preview Grid-cell--md-6 Grid-cell--xs-12 m-sm-top-3 m-xs-top-5 m-md-top-6">
                        <span className="resumes--preview-holder">
                            <a
                             href="#view-resume"
                             data-toggle="modal"
                             data-track="event"
                             data-category="Successful Resumes"
                             data-action="Click Full Resume"
                             data-label="Casey Neistat"
                            >
                                <img
                                 src={caseyImg}
                                 alt="YouTuber Casey Neistat"
                                />
                                <button className="btn-resume-preview" />
                            </a>
                        </span>
                    </div>
                    <div className="resumes--content Grid-cell--md-6 Grid-cell--xs-12">
                        <div className="text Grid-cell--md-9">
                            <h3 className="h3 m-xs-top-6">
                                How to find your own definition of success
                            </h3>
                            <div className="m-xs-top-1 m-md-top-3">
                                <p className="p-big">
                                    For Casey, being a filmmaker was the goal
                                    for more than a decade. When he turned 30 he
                                    was producing hollywood films, attending
                                    prestigious film festivals, and even winning
                                    some awards.
                                </p>
                            </div>
                            <a
                             target="_blank"
                             href="#"
                             className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
                            >
                                Read Resume
                            </a>

                            <a
                             href="#explore-more-resumes"
                             className="page--scroll"
                            >
                                Explore more resumes
                            </a>
                        </div>
                    </div>
                </section>

                <FamousResumesList />

                <section className="resume--highlighted m-sm-top-4 m-md-top-10 m-sm-bottom-4 m-md-bottom-10">
                    <div className="text-center">
                        <h2 className="h2">
                            People like you made it with Enhancv
                        </h2>
                        <h5 className="h5 text-gray-light m-sm-top-1 m-md-top-2">
                            Get inspired by those real life examples.
                        </h5>
                    </div>
                    <div className="Grid p-xs-top-4 p-md-top-5">
                        <div className="resume--highlighted-image Grid-cell--md-5 Grid-cell--sm-10 Grid-cell--xs-12">
                            <img
                             className="resume--highlighted-person-image"
                             src={hannahMills}
                             alt="Hannah Mills’s story"
                            />
                            <span className="resume--highlighted-preview">
                                <img
                                 src={hannahMillsResume}
                                 alt="Hannah Mills CV"
                                />
                                <a
                                 href="#view-resume"
                                 className="btn-resume-preview"
                                 data-toggle="modal"
                                 data-track="event"
                                 data-category="Successful Resumes"
                                 data-action="Click Full Resume"
                                 data-label="Casey Neistat"
                                />
                            </span>
                        </div>
                        <div className="resume--highlighted-content Grid Grid--alignCenter Grid-cell--md-7 Grid-cell--xs-12">
                            <div className="text-center-sm-max full-width">
                                <h3 className="h3">
                                    From cooking to investment and banking
                                </h3>
                                <h5 className="h5 text-gray-light m-xs-top-1 m-md-top-2">
                                    And further. Hannah Mills’s story.
                                </h5>
                                <div className="resume--highlighted-text m-top-4">
                                    <p>
                                        Accomplishments from a single job, you
                                        can still show your values, strengths,
                                        and what you're most proud of.
                                        Accomplishments from a single job, you
                                        can still show.
                                    </p>
                                </div>
                                <div className="resume--highlighted-hired m-xs-top-2 m-md-top-4">
                                    <span className="label">Hired at</span>
                                    <img
                                     className="m-xs-left-1 m-md-left-2"
                                     src={steveJobsCompany}
                                     alt="Intercom Company logo"
                                    />
                                    <span className="line m-left-2 m-right-2" />
                                    <span className="jobtitle m-xs-top-2">
                                        Director, Banking, Tech
                                    </span>
                                </div>
                                <a
                                 target="_blank"
                                 href="#"
                                 className="btn btn-big btn-primary m-top-4"
                                >
                                    SEE HOW SHE DID IT
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <List />

                <Subscribe />

                <div
                 id="view-resume"
                 tabIndex="-1"
                 className="modal fade"
                >
                    <div className="modal-dialog modal-lg modal-example">
                        <div className="modal-content">
                            <div className="modal-body">
                                <img
                                 width="1240"
                                 height="1755"
                                 className="img-responsive"
                                 src={caseyResume}
                                 alt="YouTuber Resume, Casey Neistat"
                                />
                            </div>
                            <SocialPanel
                             classNameName="inModal hasBackground"
                             url="famous/casey-neistat"
                             facebookText="If you’ve ever
                achieved something and not felt satisfied, @cneistat has some important lessons to teach you"
                             twitterText="@CaseyNeistat
                shows us why the connection between #achievinggoals and feeling #satisfaction isn’t so simple"
                            />
                        </div>
                    </div>
                    <button
                     type="button"
                     data-dismiss="modal"
                     className="close close-example"
                    >
                        <i className="icon-times" />
                    </button>
                </div>
            </main>
        </DefaultLayout>
    );
}
