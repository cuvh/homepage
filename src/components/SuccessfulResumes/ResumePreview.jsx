import React from "react";
import SocialPanel from "./SocialPanel";
import Img from "gatsby-image";

export default function ResumePreview({
    resumePageOne,
    resumePageTwo,
    altText,
    url,
    facebookText,
    twitterText,
    socials = true
}) {
    return (
        <React.Fragment>
            <div className="modal-body resume-preview responsive-gatsby">
                <Img
                 resolutions={resumePageOne.childImageSharp.large}
                 alt={altText}
                 style={{
                    width: "100%",
                    position: "initial"
                 }}
                 imgStyle={{ height: "auto", borderRadius: "5px" }}
                />

                {resumePageTwo ? (
                    <Img
                     resolutions={resumePageTwo.childImageSharp.large}
                     alt={altText}
                     style={{
                        width: "100%",
                        position: "initial"
                     }}
                     imgStyle={{ height: "auto", borderRadius: "5px" }}
                    />
                ) : null}
            </div>
            {socials ? (
                <SocialPanel
                 className="inModal hasBackground"
                 facebookText={facebookText}
                 twitterText={twitterText}
                 url={url}
                />
            ) : null}
        </React.Fragment>
    );
}
