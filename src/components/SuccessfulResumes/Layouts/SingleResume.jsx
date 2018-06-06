import React from "react";
import intercomLogo from "assets/img/new-successful-resumes/highlighted/intercom.png";
import hannah from "assets/img/new-successful-resumes/hannah.png";
import imgPlaceholder from "assets/img/new-successful-resumes/placeholders/img-placeholder.png";
import FooterList from "components/SuccessfulResumes/FooterList";
import Subscribe from "components/SuccessfulResumes/Subscribe";
import herResume from "assets/img/new-successful-resumes/placeholders/her-resume.png";

import DefaultLayout from "layouts/DefaultLayout";

export default function SingleResume({
    pathContext: { title, description, steps },
    ...rest
}) {
    return (
        <DefaultLayout>
            <div className="hasBubbulesBackground">
                <main className="container">
                    <section className="resumes--accent isSingle noBackground Grid full-width m-sm-top-3 m-xs-top-5 m-sm-top-5 m-md-top-6 m-sm-bottom-4 m-md-bottom-20">
                        <div className="resumes--content Grid-cell--md-6 Grid-cell--xs-12 m-sm-bottom-3">
                            <div className="text">
                                <span className="text-tag text-highlight-purple">
                                    CAREER CHANGE
                                </span>
                                <h1 className="h1">{title}</h1>

                                <div className="m-xs-top-1 m-md-top-3">
                                    <h5 className="h5 text-gray-light m-bottom-3">
                                        <span className="text-gray-light">
                                            A new resume changed her career and
                                            her life
                                        </span>
                                    </h5>

                                    <p className="p-big">{description}</p>
                                </div>
                                <a
                                 target="_blank"
                                 href="#"
                                 className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
                                >
                                    See the resume
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

                        <ul>
                            {steps.map((step, i) => (
                                <li key={i}>
                                    <h4>
                                        Step {i + 1}: {step.title}
                                    </h4>
                                    <p>{step.description}</p>
                                </li>
                            ))}
                        </ul>

                        <figure>
                            <img
                             src={imgPlaceholder}
                             alt="Image Placeholder"
                            />
                        </figure>
                    </article>

                    <Subscribe />
                </main>
            </div>
        </DefaultLayout>
    );
}
