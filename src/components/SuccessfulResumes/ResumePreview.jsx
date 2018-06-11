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
    togglePreview,
    socials
}) {
    return (
        <div
         id="view-resume"
         tabIndex="-1"
         className="modal"
        >
            <div className="modal-dialog modal-lg modal-example">
                <div className="modal-content">
                    <div className="modal-body">
                        <Img
                         resolutions={resumePageOne.childImageSharp.large}
                         alt={altText}
                         style={{ width: "100%", position: "initial" }}
                         imgStyle={{ height: "auto", borderRadius: "5px" }}
                        />
                    </div>
                    {socials ? (
                        <SocialPanel
                         className="inModal hasBackground"
                         facebookText={facebookText}
                         twitterText={twitterText}
                         url={url}
                        />
                    ) : null}
                </div>
            </div>
            <button
             type="button"
             onClick={() => togglePreview()}
             className="close close-example"
            >
                <i className="icon-times" />
            </button>
        </div>
    );
}
