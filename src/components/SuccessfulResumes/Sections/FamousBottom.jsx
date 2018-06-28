import React from "react";
import Img from "components/Common/Img";
import classnames from "classnames";
import Track from "utils/Track";
import FeelingInspired from "components/SuccessfulResumes/FeelingInspired";

import SubscribeNoImage from "components/SuccessfulResumes/SubscribeNoImage";
import FooterList from "components/SuccessfulResumes/FooterList";

import ResumePreview from "components/SuccessfulResumes/ResumePreview";
import SocialModal from "components/SocialModal";

export default function FamousBottom({
    name,
    resume,
    finalDescription,
    list,
    altText,
    socialData,
    finalTitle,
    photoBy,
}) {
    const firstName = name.split(" ")[0];

    return (
        <div
         id="famous-resume"
         className="p-md-top-10 famous-resume--container-dark">
            <div className="container">
                <section className="resumes--accent accent--reverse Grid full-width noBackground p-md-left-10">
                    <div className="resumes--preview Grid-cell--md-6 Grid-cell--xs-12 m-sm-top-3 m-xs-top-5 m-md-top-6">
                        <span className="resumes--preview-holder">
                            <SocialModal
                             trigger={
                                <a
                                 onClick={() =>
                                    Track(
                                        "Successful Resumes",
                                        "Expand Resume",
                                        `${name} - Page Bottom Image`
                                    )}>
                                    <div className="responsive-gatsby">
                                        <Img
                                         resolutions={resume.childImageSharp.small}
                                         style={{ width: "442px" }}
                                         alt={altText}
                                        />
                                    </div>
                                    <button className="btn-resume-preview" />
                                </a>
                             }
                             socialData={socialData}>
                                <ResumePreview
                                 resumePageOne={resume}
                                 altText={altText}
                                />
                            </SocialModal>
                        </span>
                    </div>
                    <div className="resumes--content Grid-cell--md-6 Grid-cell--xs-12">
                        <div className="m-md-top-15">
                            <h2 className="h2 m-xs-top-6 text-white">{finalTitle}</h2>
                            <div className="m-xs-top-1 m-md-top-3">
                                <p className="p-big text-white-smoke">{finalDescription}</p>
                            </div>
                            <SocialModal
                             trigger={
                                <a
                                 onClick={() =>
                                    Track(
                                        "Successful Resumes",
                                        "Expand Resume",
                                        `${name} - Page Bottom Button`
                                    )}
                                 className="btn btn-big btn-primary m-xs-top-2 m-md-top-6">
                                    See the Resume
                                </a>
                             }
                             socialData={socialData}>
                                <ResumePreview
                                 resumePageOne={resume}
                                 altText={altText}
                                />
                            </SocialModal>
                            <div className="full-width">
                                <FeelingInspired
                                 dark={true}
                                 name={name}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Grid Grid-cell--xs-12 Grid--justifyEnd famous-resume--attribution text-white-smoke">
                        Photo attribution: Cover photo by {photoBy}
                    </div>
                </section>

                <SubscribeNoImage dark={true} />

                <FooterList
                 list={list}
                 famousPrefix="famous/"
                />
            </div>
        </div>
    );
}
