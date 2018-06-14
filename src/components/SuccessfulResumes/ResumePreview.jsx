import React from "react";
import Img from "gatsby-image";

export default function ResumePreview({
    resumePageOne,
    resumePageTwo,
    altText
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
        </React.Fragment>
    );
}
