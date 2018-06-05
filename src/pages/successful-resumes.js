import React from "react";

import Link from "gatsby-link";
import Helmet from "react-helmet";

import DefaultLayout from "layouts/DefaultLayout";
import SocialPanel from "components/SuccessfulResumes/SocialPanel";

// isSuccessfulResumesList : true
// isSuccessfulResumes: true
// title: "Successful Resumes to Feel Proud of"
// description: "Explore successful resumes for every career, get inspired, and create your own resume to feel proud of."
// metaImage: "/img/successful-resumes/share-images/sr_share.png"

export default function SuccessfulResumes() {
    return (
        <DefaultLayout>
            <main className="container">
                <section className="page--head">
                    <h1 className="h1">
                        Looking for your next gig?
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
                                 src="/img/new-successful-resumes/youtuber-casey-neistat.png"
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

                <section
                 id="explore-more-resumes"
                 className="resumes--famous-list"
                >
                    <div className="resumes--famous-wrap Grid m-sm-bottom-3 m-md-bottom-10">
                        <a
                         href="#"
                         className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1"
                        >
                            <div className="resumes--box">
                                <span className="resumes--person-avatar">
                                    <img
                                     src="/img/new-successful-resumes/avatars/steve_jobs/avatar.jpg"
                                     alt="Steve Jobs Former Apple CEO"
                                    />
                                    <img
                                     className="resumes--person-company"
                                     src="/img/new-successful-resumes/avatars/steve_jobs/company.png"
                                     alt="Аpple Company Logo"
                                    />
                                </span>
                                <h4 className="resumes--person-name m-top-2">
                                    Steve Jobs
                                </h4>
                                <h5 className="resumes--person-jobtitle">
                                    Former Apple CEO
                                </h5>
                                <div className="resumes--person-description">
                                    <p className="m-top-2">
                                        Accomplishments from a single job, you
                                        can still show your values and what
                                        you're most proud of.
                                    </p>
                                </div>
                            </div>
                            <div className="resumes--hovered">
                                <img
                                 src="/img/new-successful-resumes/placeholders/hover-cv.png"
                                 alt="Steve Jobs CV"
                                />
                            </div>
                        </a>
                        <a
                         href="#"
                         className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1"
                        >
                            <div className="resumes--box">
                                <span className="resumes--person-avatar">
                                    <img
                                     src="/img/new-successful-resumes/avatars/steve_jobs/avatar.jpg"
                                     alt="Steve Jobs Former Apple CEO"
                                    />
                                    <img
                                     className="resumes--person-company"
                                     src="/img/new-successful-resumes/avatars/steve_jobs/company.png"
                                     alt="Аpple Company Logo"
                                    />
                                </span>
                                <h4 className="resumes--person-name m-top-2">
                                    Steve Jobs
                                </h4>
                                <h5 className="resumes--person-jobtitle">
                                    Former Apple CEO
                                </h5>
                                <div className="resumes--person-description">
                                    <p className="m-top-2">
                                        Accomplishments from a single job, you
                                        can still show your values and what
                                        you're most proud of.
                                    </p>
                                </div>
                            </div>
                            <div className="resumes--hovered">
                                <img
                                 src="/img/new-successful-resumes/placeholders/hover-cv.png"
                                 alt="Steve Jobs CV"
                                />
                            </div>
                        </a>
                        <a
                         href="#"
                         className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1"
                        >
                            <div className="resumes--box">
                                <span className="resumes--person-avatar">
                                    <img
                                     src="/img/new-successful-resumes/avatars/steve_jobs/avatar.jpg"
                                     alt="Steve Jobs Former Apple CEO"
                                    />
                                    <img
                                     className="resumes--person-company"
                                     src="/img/new-successful-resumes/avatars/steve_jobs/company.png"
                                     alt="Аpple Company Logo"
                                    />
                                </span>
                                <h4 className="resumes--person-name m-top-2">
                                    Steve Jobs
                                </h4>
                                <h5 className="resumes--person-jobtitle">
                                    Former Apple CEO
                                </h5>
                                <div className="resumes--person-description">
                                    <p className="m-top-2">
                                        Accomplishments from a single job, you
                                        can still show your values and what
                                        you're most proud of.
                                    </p>
                                </div>
                            </div>
                            <div className="resumes--hovered">
                                <img
                                 src="/img/new-successful-resumes/placeholders/hover-cv.png"
                                 alt="Steve Jobs CV"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="text-center m-sm-bottom-4 m-md-bottom-10">
                        <a
                         href="#"
                         className="feature-link"
                        >
                            See more famous resumes &nbsp;→
                        </a>
                    </div>
                </section>

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
                             src="/img/new-successful-resumes/highlighted/hannah_mills.png"
                             alt="Hannah Mills’s story"
                            />
                            <span className="resume--highlighted-preview">
                                <img
                                 src="/img/new-successful-resumes/highlighted/cv.png"
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
                                     src="/img/new-successful-resumes/highlighted/intercom.png"
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

                <section className="resumes--others m-sm-top-4 m-md-top-19 m-sm-bottom-3 m-md-bottom-7">
                    <div className="resumes--list">
                        <h4 className="resumes--others-title text-center">
                            See how others did it
                        </h4>
                        <nav className="resumes--filter m-sm-bottom-2 m-md-bottom-2 m-sm-top-4 m-md-top-4">
                            <button
                             data-className="all"
                             className="resumes--filter-button selected"
                            >
                                All resumes
                            </button>
                            <button
                             data-className="career-change"
                             className="resumes--filter-button"
                            >
                                Careers change
                            </button>
                            <button
                             data-className="job-search"
                             className="resumes--filter-button"
                            >
                                Job search
                            </button>
                            <button
                             data-className="right-next-gig"
                             className="resumes--filter-button"
                            >
                                Right next gig
                            </button>
                        </nav>
                    </div>
                    <div className="resumes--others-wrap Grid">
                        <a
                         data-className="right-next-gig"
                         href="#"
                         className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1"
                        >
                            <div className="resumes--box">
                                <span className="resumes--badge badge--orange">
                                    The right gig
                                </span>
                                <span className="resumes--person-avatar">
                                    <img
                                     src="/img/new-successful-resumes/avatars/barack_obama/avatar.jpg"
                                     alt="Barack Obama President of United States"
                                    />
                                </span>
                                <div className="resumes--others-person-info">
                                    <h4 className="resumes--person-name m-top-2">
                                        Barack Obama
                                    </h4>
                                    <h5 className="resumes--person-jobtitle">
                                        President of United States
                                    </h5>
                                    <div className="resumes--hired m-xs-top-2 m-md-top-4">
                                        <span className="label">Hired at</span>
                                        <img
                                         className="m-xs-left-1 m-md-left-2"
                                         src="/img/new-successful-resumes/avatars/barack_obama/company.png"
                                         alt="Nasa logo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="resumes--hovered">
                                <img
                                 src="/img/new-successful-resumes/placeholders/hover-cv.png"
                                 alt="Steve Jobs CV"
                                />
                            </div>
                        </a>
                        <a
                         data-className="career-change"
                         href="#"
                         className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1"
                        >
                            <div className="resumes--box">
                                <span className="resumes--badge badge--purple">
                                    Career change
                                </span>
                                <span className="resumes--person-avatar">
                                    <img
                                     src="/img/new-successful-resumes/avatars/barack_obama/avatar.jpg"
                                     alt="Barack Obama President of United States"
                                    />
                                </span>
                                <div className="resumes--others-person-info">
                                    <h4 className="resumes--person-name m-top-2">
                                        Barack Obama
                                    </h4>
                                    <h5 className="resumes--person-jobtitle">
                                        President of United States
                                    </h5>
                                    <div className="resumes--hired m-xs-top-2 m-md-top-4">
                                        <span className="label">Hired at</span>
                                        <img
                                         className="m-xs-left-1 m-md-left-2"
                                         src="/img/new-successful-resumes/avatars/barack_obama/company.png"
                                         alt="Nasa logo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="resumes--hovered">
                                <img
                                 src="/img/new-successful-resumes/placeholders/hover-cv.png"
                                 alt="Steve Jobs CV"
                                />
                            </div>
                        </a>
                        <a
                         data-className="career-change"
                         href="#"
                         className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1"
                        >
                            <div className="resumes--box">
                                <span className="resumes--badge badge--purple">
                                    Career change
                                </span>
                                <span className="resumes--person-avatar">
                                    <img
                                     src="/img/new-successful-resumes/avatars/barack_obama/avatar.jpg"
                                     alt="Barack Obama President of United States"
                                    />
                                </span>
                                <div className="resumes--others-person-info">
                                    <h4 className="resumes--person-name m-top-2">
                                        Barack Obama
                                    </h4>
                                    <h5 className="resumes--person-jobtitle">
                                        President of United States
                                    </h5>
                                    <div className="resumes--hired m-xs-top-2 m-md-top-4">
                                        <span className="label">Hired at</span>
                                        <img
                                         className="m-xs-left-1 m-md-left-2"
                                         src="/img/new-successful-resumes/avatars/barack_obama/company.png"
                                         alt="Nasa logo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="resumes--hovered">
                                <img
                                 src="/img/new-successful-resumes/placeholders/hover-cv.png"
                                 alt="Steve Jobs CV"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="text-center m-sm-bottom-4 m-md-bottom-9 m-sm-top-4 m-md-top-10">
                        <a
                         href="#"
                         className="feature-link"
                        >
                            See more real resumes &nbsp;→
                        </a>
                    </div>
                </section>
                <section className="component--subscription Grid p-top-6 p-sm-bottom-7 text-sm-center">
                    <div className="component--subscription-image Grid-cell--md-5 Grid-cell--sm-10 Grid-cell--xs-12">
                        <img
                         src="/img/new-successful-resumes/subscription/1.png"
                         alt="Subscription Illustration"
                        />
                    </div>
                    <div className="component--subscription-form Grid-cell--md-5 Grid-cell--sm-10 Grid-cell--xs-12">
                        <h3 className="h2 m-sm-bottom-1 m-md-bottom-2">
                            Get more inspiration
                        </h3>
                        <p className="m-sm-bottom-4 m-md-bottom-4">
                            No spam, just information that will help you build a
                            resume that makes you feel relevant and well
                            represented.
                        </p>
                        <form id="subscribe-form">
                            <div className="component--subscription-form Grid">
                                <input
                                 type="text"
                                 className="component--subscription-field form-control Grid-cell--md-8 Grid-cell--xs-12 m-sm-bottom-2"
                                 id="subscribe-email"
                                 placeholder="Write your email address"
                                />
                                <button
                                 type="submit"
                                 id="subscribe-btn"
                                 className="component--subscription-button btn btn-big btn-primary cta-button Grid-cell--md-4"
                                 data-track="event"
                                 data-category="Successful Resumes"
                                 data-action="Newsletter Subscription"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

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
                                 src="/img/successful-resumes/famous/casey-neistat/casey-neistat-resume.jpg"
                                 alt="YouTuber Resume, Casey Neistat"
                                />
                            </div>
                            <SocialPanel
                             classNameName="inModal hasBackground"
                             url="famous/casey-neistat.html"
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
