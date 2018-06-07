import React from "react";
import intercomLogo from "assets/img/new-successful-resumes/highlighted/intercom.png";
import hannah from "assets/img/new-successful-resumes/hannah.png";
import singlepagePlaceholder from "assets/img/new-successful-resumes/elements/sinlepage-placeholder.png";
import singlepagePlaceholderTwo from "assets/img/new-successful-resumes/elements/sinlepage-placeholder-2.jpg";
import imgPlaceholder from "assets/img/new-successful-resumes/placeholders/img-placeholder.png";
import FooterList from "components/SuccessfulResumes/FooterList";
import SubscribeNoImage from "components/SuccessfulResumes/SubscribeNoImage";
import herResume from "assets/img/new-successful-resumes/placeholders/her-resume.png";

import DefaultLayout from "layouts/DefaultLayout";

import Helmet from "react-helmet";

export default function SingleResume() {
    return (
        <DefaultLayout>
            <Helmet
                bodyAttributes={{
                    class: 'resumedetail'
                }}
            />
            <div className="hasBubbulesBackground">
                <main className="container">
                    <section className="resumes--accent isSingle noBackground Grid full-width m-sm-top-3 m-xs-top-5 m-sm-top-5 m-md-top-6 m-sm-bottom-4 m-md-bottom-20">
                        <div className="resumes--content Grid-cell--md-6 Grid-cell--xs-12 m-sm-bottom-3">
                            <div className="text">
                                <span className="text-tag text-highlight-purple">
                                    CAREER CHANGE
                                </span>
                                <h1 className="h1">
                                    From cooking to investment and banking
                                </h1>

                                <div className="m-xs-top-1 m-md-top-3">
                                    <h5 className="h5 text-gray-light m-bottom-3">
                                        <span className="text-gray-light">
                                            A new resume changed her career and
                                            her life
                                        </span>
                                    </h5>

                                    <p className="p-big">
                                        Hannah moved from using a Word resume,
                                        something many of us see as a standard,
                                        and created a document that shows who he
                                        is as both a professional and an
                                        individual.
                                    </p>
                                </div>
                                <a
                                 target="_blank"
                                 href="#"
                                 className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
                                >
                                    See her resume
                                </a>
                            </div>
                        </div>

                        <div className="resumes--preview isSingle Grid-cell--md-6 Grid-cell--xs-12">
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
                                     src={hannah}
                                     alt="Hannah"
                                    />

                                    <button className="btn-resume-preview" />
                                </a>
                            </span>

                            <div className="resumes--accent-hired p-5">
                                <div className="Grid">
                                    <h5>Hannah’s career</h5>
                                    <span className="label m-bottom-3">
                                        Director, Banking, Tech, YouTube
                                        personality, Marketing person
                                    </span>
                                    <span className="label hired-label">
                                        Hired at
                                    </span>
                                    <img
                                     className="m-xs-top-1 m-md-left-2"
                                     src={intercomLogo}
                                     alt="Intercom Company logo"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                         href="#"
                         className="page--scroll"
                        >
                            Read the story
                        </a>
                    </section>

                    <article className="resume-article p-md-top-8">
                        <h3>Hannah’s 4 steps to a successful job hunt</h3>
                        <p>
                            Before looking for companies that would suit his
                            requirements, Daniel thought in more detail about
                            how his skills could match the new desired role. As
                            he’s worked remotely most of his career, he needed a
                            company that would allow for that. Another
                            requirement was a company that’s known for
                            exceptional customer support.
                        </p>

                        <ul
                         style={{
                            backgroundImage: `url(${singlepagePlaceholder})`
                         }}
                        >
                            <li>
                                <h4>Step 1: Passions</h4>
                                <p>
                                    Before looking for companies that would suit
                                    his requirements, Daniel thought in more
                                    detail about how his skills could match the
                                    new desired role. As he’s worked remotely
                                    most of his career, he needed a company that
                                    would allow for that.
                                </p>
                            </li>

                            <li>
                                <h4>Step 2: Learning</h4>
                                <p>
                                    Before looking for companies that would suit
                                    his requirements, Daniel thought in more
                                    detail about how his skills could match the
                                    new desired role. As he’s worked remotely
                                    most of his career, he needed a company that
                                    would allow for that.
                                </p>
                            </li>
                        </ul>

                        <blockquote>
                            My resume gave me a sense of relief and confidence
                            when passing it along to a potential employer.
                        </blockquote>

                        <ul
                         style={{
                            backgroundImage: `url(${singlepagePlaceholderTwo})`
                         }}
                        >
                            <li>
                                <h4>Step 3: Opportunities</h4>
                                <p>
                                    Before looking for companies that would suit
                                    his requirements, Daniel thought in more
                                    detail about how his skills could match the
                                    new desired role. As he’s worked remotely
                                    most of his career, he needed a company that
                                    would allow for that.
                                </p>
                            </li>

                            <li>
                                <h4>Step 4: Kick-ass resume</h4>
                                <p>
                                    Before looking for companies that would suit
                                    his requirements, Daniel thought in more
                                    detail about how his skills could match the
                                    new desired role.
                                </p>
                            </li>
                        </ul>

                        <figure>
                            <img
                             src={imgPlaceholder}
                             alt="Image Placeholder"
                            />
                        </figure>
                    </article>

                    <section className="component--cta-resume Grid m-sm-top-5 m-md-top-8">
                        <div className="component--cta-resume-image Grid-cell--md-4 Grid-cell--sm-10 Grid-cell--xs-12 p-md-right-10 m-sm-bottom-5">
                            <img
                             src={herResume}
                             alt="Image Placeholder"
                            />
                        </div>

                        <div className="Grid-cell--md-6 Grid-cell--sm-10 Grid-cell--xs-12 p-md-right-13">
                            <h3 className="h3 m-sm-bottom-1 m-md-bottom-2">
                                New job, new life
                            </h3>

                            <p className="p-medium">
                                “It’s now a year and a half later and the
                                position I’m in at Intercom has taught me so
                                much, opened so many doors and allowed me to
                                grow a lot faster than I could’ve ever imagined.
                                To give an example, one of my life-long goals
                                was to be able to go to San Francisco and visit
                                the various tech giants Facebook, Google, Apple,
                                etc. It’s such a touristy thing to do but it’s
                                just something I had to tick off my bucket list.
                                “
                            </p>
                            <a
                             target="_blank"
                             href="#"
                             className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
                            >
                                Read her resume
                            </a>

                            <div className="Grid--gutter-md component--feeling feeling-box-light m-md-top-10 m-sm-top-4 m-sm-right-1 m-sm-left-1">
                                <span className="m-right-1 m-left-1">
                                    Feeling inspired?
                                </span>
                                <span className="component--feeling-emotion emotion-smiling" />

                                <span className="component--feeling-emotion emotion-neutral" />

                                <span className="component--feeling-emotion emotion-happy" />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </DefaultLayout>
    );
}
