import React from "react";

import steveJobs from "assets/img/new-successful-resumes/avatars/steve_jobs/avatar.jpg";
import steveJobsCompany from "assets/img/new-successful-resumes/avatars/steve_jobs/company.png";
import hoverResume from "assets/img/new-successful-resumes/placeholders/hover-cv.png";

export default function FamousResumesList() {
    return (
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
                             src={steveJobs}
                             alt="Steve Jobs Former Apple CEO"
                            />
                            <img
                             className="resumes--person-company"
                             src={steveJobsCompany}
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
                                Accomplishments from a single job, you can still
                                show your values and what you're most proud of.
                            </p>
                        </div>
                    </div>
                    <div className="resumes--hovered">
                        <img
                         src={hoverResume}
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
                             src={steveJobs}
                             alt="Steve Jobs Former Apple CEO"
                            />
                            <img
                             className="resumes--person-company"
                             src={steveJobsCompany}
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
                                Accomplishments from a single job, you can still
                                show your values and what you're most proud of.
                            </p>
                        </div>
                    </div>
                    <div className="resumes--hovered">
                        <img
                         src={hoverResume}
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
                             src={steveJobs}
                             alt="Steve Jobs Former Apple CEO"
                            />
                            <img
                             className="resumes--person-company"
                             src={steveJobsCompany}
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
                                Accomplishments from a single job, you can still
                                show your values and what you're most proud of.
                            </p>
                        </div>
                    </div>
                    <div className="resumes--hovered">
                        <img
                         src={hoverResume}
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
    );
}
