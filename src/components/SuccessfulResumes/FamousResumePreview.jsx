import React from "react";

export default function FamousResumePreview() {
    return (
        <a href="#view-resume" data-toggle="modal" class="component--fast-resume-preview">
            <img
                src="/static/new-successful-resumes/placeholders/hover-cv.png"
                alt="Steve Jobs CV"
            />
            <button class="btn-resume-preview"></button>
        </a>
    );
}
