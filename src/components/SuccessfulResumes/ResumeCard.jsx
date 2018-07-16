import React from "react";

export default function ResumeCard({ url, name, position }) {
    return (
        <a
         href={url}
         className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1">
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
                <h4 className="resumes--person-name m-top-2">{name}</h4>
                <h5 className="resumes--person-jobtitle">{position}</h5>
                <div className="resumes--person-description">
                    <p className="m-top-2">
                        Accomplishments from a single job, you can still show your values and what
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
    );
}
