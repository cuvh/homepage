import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";

import spotifyLogo from "data/successful-resumes/company-logos/2x-spotify-logo.png";

import Subscribe from "components/SuccessfulResumes/Subscribe";
import FamousResumesList from "components/SuccessfulResumes/FamousResumesList";
import ResumeList from "components/SuccessfulResumes/List";
import ResumePreview from "components/SuccessfulResumes/ResumePreview";
import Modal from "components/Modal";

import Meta from "components/Meta";
import DefaultLayout from "layouts/DefaultLayout";

const IMAGE_KEYS = ["subImageOne", "subImageTwo", "subImageThree"];

export default function FeaturedResume({ data }) {
    const subImageId = Math.floor(Math.random() * 3);
    const subImage = data[IMAGE_KEYS[subImageId]];

    return (
        <DefaultLayout>
            <Meta
             bodyAttributes={{
                class: "resumeslist"
             }}
             title="Real Resume Examples that Got People Hires | Enhancv"
             description="Ditch lifeless resume templates and see a collection of real resume examples to show you how to stand out, get inspired, and get the job"
            />
            <main className="container">
                <section className="page--head">
                    <h1 className="h1">
                        Resume examples that get people like you hired
                    </h1>
                    <h5 className="h5 text-gray-light m-xs-top-1 m-md-top-3">
                        Get inspired and learn from these real life examples
                    </h5>
                </section>

                <section className="resume--highlighted m-sm-top-4 m-md-top-5 m-sm-bottom-4 m-md-bottom-10">
                    <div className="Grid p-xs-top-4 p-md-top-5">
                        <div className="resume--highlighted-image Grid-cell--md-5 Grid-cell--sm-10 Grid-cell--xs-12">
                            <Img
                             className="resume--highlighted-person-image"
                             resolutions={
                                data.mainImage.childImageSharp.resolutions
                             }
                             alt="Hannah Mills’s story"
                            />
                            <span className="resume--highlighted-preview">
                                <Img
                                 resolutions={
                                    data.mainResumePreview.childImageSharp
                                        .resolutions
                                 }
                                />

                                <Modal
                                 trigger={
                                    <a
                                     className="btn-resume-preview"
                                     data-track="event"
                                     data-category="Successful Resumes"
                                     data-action="Click Full Resume"
                                     data-label="Casey Neistat"
                                    />
                                 }
                                >
                                    <ResumePreview
                                     resumePageOne={data.mainResume}
                                     socials={false}
                                    />
                                </Modal>
                            </span>
                        </div>
                        <div className="resume--highlighted-content Grid Grid--alignCenter Grid-cell--md-7 Grid-cell--xs-12">
                            <div className="text-center-sm-max full-width">
                                <h3 className="h3">
                                    From investment banking to Spotify - Sam’s
                                    career change
                                </h3>
                                <div className="resume--highlighted-text m-top-4">
                                    <p>
                                        It took a lot of planning, hard work,
                                        and an amazing resume to get Sam her
                                        dream job at Spotify. We break down how
                                        she did it step by step.
                                    </p>
                                </div>
                                <div className="resume--highlighted-hired m-xs-top-2 m-md-top-4">
                                    <span className="label">Hired at</span>
                                    <img
                                     style={{ height: 30 }}
                                     src={spotifyLogo}
                                     alt="Spotify Company logo"
                                    />
                                    <span className="line m-left-2 m-right-2" />
                                    <span className="jobtitle m-xs-top-2">
                                        IT, Senior, Operations
                                    </span>
                                </div>
                                <Link
                                 to="/successful-resumes/sam-young"
                                 className="btn btn-big btn-primary m-top-4"
                                >
                                    SEE HOW SHE DID IT
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <ResumeList data={data.allUserResumesJson.edges} />

                <section className="text-center m-sm-bottom-4 m-md-bottom-6">
                    <h2 className="h2">They changed the world</h2>
                    <h5 className="h5 text-gray-light m-sm-top-1 m-md-top-2">
                        Learn from famous resume examples
                    </h5>
                </section>

                <section className="resumes--accent accent--reverse Grid full-width noBackground">
                    <div className="resumes--preview Grid-cell--md-6 Grid-cell--xs-12 m-sm-top-3 m-xs-top-5 m-md-top-6">
                        <span className="resumes--preview-holder">
                            <Modal
                             trigger={
                                <a>
                                    <Img
                                     resolutions={
                                        data.famousResume.childImageSharp.small
                                     }
                                    />
                                    <button className="btn-resume-preview" />
                                </a>
                             }
                            >
                                <ResumePreview
                                 resumePageOne={data.famousResume}
                                 socials={false}
                                />
                            </Modal>
                        </span>
                    </div>
                    <div className="resumes--content Grid-cell--md-6 Grid-cell--xs-12">
                        <div className="text Grid-cell--md-9">
                            <h3 className="h3 m-xs-top-6">
                                From dishwasher to iconic Youtube filmmaker
                            </h3>
                            <div className="m-xs-top-1 m-md-top-3">
                                <p className="p-big">
                                    Every time he tries something new, Casey
                                    shows the importance of knowing why you do
                                    what you do. He also shows why success can
                                    be dangerous. His unique example of a
                                    filmmaker resume tells that story.
                                </p>
                            </div>
                            <Link
                             to="/successful-resumes/famous/casey-neistat"
                             className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
                            >
                                Read Resume
                            </Link>

                            <a
                             href="#explore-more-resumes"
                             className="page--scroll"
                            >
                                Explore more resumes
                            </a>
                        </div>
                    </div>
                </section>

                <FamousResumesList data={data.allFamousResumesJson.edges} />

                <Subscribe image={subImage} />
            </main>
        </DefaultLayout>
    );
}

export const pageQuery = graphql`
    query AllResumes {
        allUserResumesJson(limit: 200) {
            edges {
                node {
                    url
                    label
                    name
                    title
                    resumes {
                        image {
                            childImageSharp {
                                resolutions(width: 240, height: 329) {
                                    ...GatsbyImageSharpResolutions
                                }
                            }
                        }
                    }
                    companyLogo {
                        childImageSharp {
                            resolutions(width: 200) {
                                ...GatsbyImageSharpResolutions
                            }
                        }
                    }
                    avatar {
                        childImageSharp {
                            resolutions(width: 126) {
                                ...GatsbyImageSharpResolutions
                            }
                        }
                    }
                }
            }
        }
        allFamousResumesJson(limit: 200) {
            edges {
                node {
                    url
                    name
                    description
                    avatar {
                        childImageSharp {
                            resolutions(width: 126) {
                                ...GatsbyImageSharpResolutions
                            }
                        }
                    }
                    resume {
                        childImageSharp {
                            resolutions(width: 240, height: 329) {
                                ...GatsbyImageSharpResolutions
                            }
                        }
                    }
                }
            }
        }
        mainImage: file(
            relativePath: { eq: "successful-resumes/Sam_photo@2.png" }
        ) {
            childImageSharp {
                resolutions(width: 475, height: 370) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        mainResumePreview: file(
            relativePath: { eq: "successful-resumes/sam_resume@2.png" }
        ) {
            childImageSharp {
                resolutions(width: 214, height: 281) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        mainResumeOne: file(
            relativePath: { eq: "successful-resumes/sam-young-resume-1.jpg" }
        ) {
            childImageSharp {
                large: resolutions(width: 1240) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        mainResumeTwo: file(
            relativePath: { eq: "successful-resumes/sam-young-resume-2.jpg" }
        ) {
            childImageSharp {
                large: resolutions(width: 1240) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        famousResume: file(
            relativePath: { eq: "famous-resumes/youtuber-casey-neistat.jpg" }
        ) {
            childImageSharp {
                small: resolutions(width: 535, height: 741) {
                    ...GatsbyImageSharpResolutions
                }
                large: resolutions(width: 1240) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        subImageOne: file(
            relativePath: { eq: "man_subscribe_illustration@2.png" }
        ) {
            childImageSharp {
                resolutions(width: 475, height: 404) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        subImageTwo: file(
            relativePath: { eq: "mulat_girl_subscribe_illustration.png" }
        ) {
            childImageSharp {
                resolutions(width: 475, height: 404) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        subImageThree: file(
            relativePath: { eq: "white_girl_subscribe_illustration@2.png" }
        ) {
            childImageSharp {
                resolutions(width: 475, height: 404) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
    }
`;
