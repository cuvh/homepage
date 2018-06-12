import React from "react";

export default function SocialBar({ facebookText, twitterText, url }) {
    return (
        <div class="component--social-bar">
            <div class="component--social-bar-wrap">
                <a
                 href={`https://www.facebook.com/sharer.php?u=https://enhancv.com/successful-resumes/${encodeURI(
                    url
                 )}&message=${encodeURI(facebookText)}`}
                 data-track="event"
                 data-category="Successful Resumes"
                 data-action="Social Share"
                 data-label="Facebook"
                 class="component--social-button btn-facebook"
                 target="_blank"
                >
                    <i class="icon-facebook pull-right" />
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
                 class="component--social-button btn-twitter"
                >
                    <i class="icon-twitter pull-right" />
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
                 class="component--social-button btn-linkedin"
                >
                    <i class="icon-linkedin-alt pull-right" />
                </a>
            </div>

            <div class="component--social-bar-vertical-view">
                <span class="line" />
                <span class="label">Appreciate</span>
                <a class="btn-wow btn-wow-reverse" />
            </div>
            <div class="component--social-bar-horizontal-view">
                Do you like this article? Appreciate it, so we can make more
                like it
                <a class="btn-wow-default" />
            </div>
        </div>
    );
}
