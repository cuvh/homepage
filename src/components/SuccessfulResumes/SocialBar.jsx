import React from "react";

export default function SocialBar({ facebookText, twitterText, url }) {
    return (
        <div className="component--social-bar">
            <div className="component--social-bar-wrap">
                <a
                 href={`https://www.facebook.com/sharer.php?u=https://enhancv.com/successful-resumes/${encodeURI(
                    url
                 )}&message=${encodeURI(facebookText)}`}
                 data-track="event"
                 data-category="Successful Resumes"
                 data-action="Social Share"
                 data-label="Facebook"
                 className="component--social-button btn-facebook"
                 target="_blank"
                >
                    <i className="icon-facebook pull-right" />
                </a>
                <a
                 href={`https://twitter.com/share?url=https://enhancv.com/successful-resumes/${encodeURI(
                    url
                 )}&text=${encodeURI(twitterText)}`}
                 target="_blank"
                 data-track="event"
                 data-category="Successful Resumes"
                 data-action="Social Share"
                 data-label="Twitter"
                 className="component--social-button btn-twitter"
                >
                    <i className="icon-twitter pull-right" />
                </a>
                <a
                 href={`https://www.linkedin.com/shareArticle?mini=true&url=https://enhancv.com/successful-resumes/${encodeURI(
                    url
                 )}&text=${encodeURI(facebookText)}`}
                 target="_blank"
                 data-track="event"
                 data-category="Successful Resumes"
                 data-action="Social Share"
                 data-label="LinkedIn"
                 className="component--social-button btn-linkedin"
                >
                    <i className="icon-linkedin-alt pull-right" />
                </a>
            </div>

            <div className="component--social-bar-vertical-view">
                <span className="line" />
                <span className="label">Appreciate</span>
            </div>
            <div className="component--social-bar-horizontal-view">
                Do you like this article? Appreciate it, so we can make more
                like it
            </div>
        </div>
    );
}
