import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";

import spotifyLogo from "data/successful-resumes/company-logos/2x-spotify-logo.png";

import Subscribe from "components/SuccessfulResumes/Subscribe";
import FamousResumesList from "components/SuccessfulResumes/FamousResumesList";
import ResumeList from "components/SuccessfulResumes/List";

import DefaultLayout from "layouts/DefaultLayout";

export default function FeaturedResume({ data, ...rest }) {
    return (
        <DefaultLayout>
            <Helmet
             bodyAttributes={{
                class: "resumeslist"
             }}
            />
            <main className="container">
                <section className="page--head">
                    <h1 className="h1">
                        Real Resume examples that got people like you hired at
                        top companies
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
                                    data.mainResume.childImageSharp.resolutions
                                 }
                                />
                                <a
                                 href="#view-resume-highlighted"
                                 className="btn-resume-preview"
                                 data-toggle="modal"
                                 data-track="event"
                                 data-category="Successful Resumes"
                                 data-action="Click Full Resume"
                                 data-label="Casey Neistat"
                                />
                            </span>
                        </div>
                        <div className="resume--highlighted-content Grid Grid--alignCenter Grid-cell--md-7 Grid-cell--xs-12">
                            <div className="text-center-sm-max full-width">
                                <h3 className="h3">
                                    From investment banking to Spotify
                                </h3>
                                <h5 className="h5 text-gray-light m-xs-top-1 m-md-top-2">
                                    See the story of Sam’s career change
                                </h5>
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
                                 target="_blank"
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
                    <h2 className="h2">
                        Looking for your next gig? Get inspired
                    </h2>
                    <h5 className="h5 text-gray-light m-sm-top-1 m-md-top-2">
                        Go through our resume gallery.
                    </h5>
                </section>

                <section className="resumes--accent accent--reverse Grid full-width noBackground">
                    <div className="resumes--preview Grid-cell--md-6 Grid-cell--xs-12 m-sm-top-3 m-xs-top-5 m-md-top-6">
                        <span className="resumes--preview-holder">
                            <a href="#view-resume">
                                <Img
                                 resolutions={
                                    data.famousResume.childImageSharp
                                        .resolutions
                                 }
                                />
                                <button className="btn-resume-preview" />
                            </a>
                        </span>
                    </div>
                    <div className="resumes--content Grid-cell--md-6 Grid-cell--xs-12">
                        <div className="text Grid-cell--md-9">
                            <h3 className="h3 m-xs-top-6">
                                From dishwasher to iconic Youtube filmmaker
                            </h3>
                            <div className="m-xs-top-1 m-md-top-3">
                                <p className="p-big">
                                    You don’t get more than 9 million Youtube
                                    subscribers without learning a few lessons
                                    along the way.<br />
                                    <br />
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

                <Subscribe />
            </main>
        </DefaultLayout>
    );
}

export const pageQuery = graphql`
    query AllResumes {
        allUserResumesJson(limit: 20) {
            edges {
                node {
                    url
                    label
                    name
                    title
                    image {
                        childImageSharp {
                            resolutions(width: 240, height: 329) {
                                ...GatsbyImageSharpResolutions
                            }
                        }
                    }
                    companyLogo {
                        childImageSharp {
                            resolutions(width: 100) {
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
        allFamousResumesJson(limit: 20) {
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
        mainResume: file(
            relativePath: { eq: "successful-resumes/sam_resume@2.png" }
        ) {
            childImageSharp {
                resolutions(width: 214, height: 281) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        famousResume: file(
            relativePath: { eq: "famous-resumes/youtuber-casey-neistat.jpg" }
        ) {
            childImageSharp {
                resolutions(width: 535, height: 741) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
    }
`;
