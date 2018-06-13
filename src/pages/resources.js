import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import Helmet from "react-helmet";
import Track from "utils/Track";
import FooterList from "components/SuccessfulResumes/FooterList";

import Modal from "components/Modal";
import ResourcePreview from "components/Resources/ResourcePreview";

import SubscribeNoImage from "components/SuccessfulResumes/SubscribeNoImage";
import DefaultLayout from "layouts/DefaultLayout";

export default function resources({ data }) {
    return (
        <DefaultLayout className="resumedetail hasBubbulesBackground">
            <Helmet
             title="Learning Through Struggles"
             meta={[
                {
                    name: "description",
                    content:
                        "Struggles shape our skills and who we are. Explore this question to learn more about yourself and what you should be proud of."
                }
             ]}
            />
            <main>
                <section className="resources--head container m-md-bottom-15 m-sm-bottom-10">
                    <div className="Grid resources--head-wrap">
                        <div className="Grid-cell--md-5 Grid-cell--xs-12">
                            <div className="resources--head-image resources--modal-button">
                                <Modal
                                 trigger={
                                    <React.Fragment>
                                        <Img
                                         resolutions={
                                            data.resourcesHeaderImage
                                                .childImageSharp.resolutions
                                         }
                                         alt="Who is this good for? | Image"
                                        />
                                        <button className="btn-resume-preview" />
                                    </React.Fragment>
                                 }
                                >
                                    <ResourcePreview
                                     filled={data.shapeStoryPreviewOne}
                                     empty={data.shapeStoryPreviewTwo}
                                     altText={"Who is this good for? | Image"}
                                    />
                                </Modal>
                            </div>
                        </div>

                        <div className="Grid-cell--md-7 Grid-cell--xs-12 m-sm-bottom-3 p-md-left-10">
                            <div className="text">
                                <span className="text-tag text-highlight-purple">
                                    FREE WORKSHEET
                                </span>
                                <h1 className="h1">
                                    Learning Through Struggles
                                </h1>
                                <div className="m-xs-top-1 m-md-top-3 Grid-cell--md-10">
                                    <p className="p-big">
                                        Struggles shape our skills and who we
                                        are. Explore this question to learn more
                                        about yourself and what you should be
                                        proud of.
                                    </p>
                                </div>
                                <a
                                 target="_blank"
                                 href={data.shapeStory.publicURL}
                                 download
                                 className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
                                >
                                    DOWNLOAD FOR FREE
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="m-md-bottom-13 p-sm-3">
                    <div className="container">
                        <div className="Grid full-width">
                            <div className="Grid-cell--md-7 Grid-cell--xs-12 p-md-left-10 p-md-top-6">
                                <article className="resume-article">
                                    <h2>How is this helpful?</h2>
                                    <br />
                                    <h4>
                                        Understand how struggles have shaped
                                        your skills
                                    </h4>
                                    <p className="p-medium">
                                        Learn about how and why struggles are
                                        often at the core of our successes.
                                    </p>

                                    <h4>Discover your strengths</h4>
                                    <p className="p-medium">
                                        Take those insights and use them to
                                        discover new strengths.
                                    </p>

                                    <h4>
                                        Understand how to use those strengths in
                                        your resume
                                    </h4>
                                    <p className="p-medium">
                                        Apply these learnings to create a resume
                                        that’s more honest and impactful.
                                    </p>
                                </article>
                            </div>
                            <div className="famous-resume--illustration-holder Grid-cell--md-5 Grid-cell--xs-12 m-sm-top-3 m-xs-top-5 m-md-top-6 p-md-left-10 responsive-gatsby">
                                <Img
                                 resolutions={
                                    data.ladderImage.childImageSharp.resolutions
                                 }
                                 alt="Who is this good for? | Image"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="m-sm-top-5 m-md-top-8 m-sm-top-5 m-md-top-8 p-left-1 p-right-1 p-sm-3">
                    <div className="Grid p-md-top-10 p-sm-top-10 p-xs-top-6 p-xs-top-6 p-md-bottom-10 p-sm-bottom-10 p-xs-bottom-6 p-xs-bottom-6">
                        <div className="Grid-cell--md-4 Grid-cell--sm-10 Grid-cell--xs-12 m-sm-bottom-5 m-md-left-10 text-center responsive-gatsby">
                            <Img
                             resolutions={
                                data.peopleImage.childImageSharp.resolutions
                             }
                             alt="Who is this good for? | Image"
                            />
                        </div>
                        <div className="Grid-cell--md-6 Grid-cell--sm-10 Grid-cell--xs-12 p-md-right-15 p-md-left-10">
                            <h3 className="h3 m-sm-bottom-1 m-md-bottom-2">
                                Who is this good for?
                            </h3>
                            <p className="p-medium">
                                Anyone who’ d like to explore their own life
                                struggles to better understand what strengths
                                and skills they can apply to their next job.
                            </p>
                            <a
                             target="_blank"
                             href={data.shapeStory.publicURL}
                             download
                             className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
                            >
                                DOWNLOAD FOR FREE
                            </a>
                        </div>
                    </div>
                </section>
                <section className="m-sm-top-5 m-md-top-8 m-sm-top-5 m-md-top-8 p-left-1 p-right-1 p-sm-3">
                    <div className="resources--discover-box">
                        <div className="component--cta-resume Grid p-md-top-10 p-sm-top-10 p-xs-top-6 p-xs-top-6 p-md-bottom-10 p-sm-bottom-10 p-xs-bottom-6 p-xs-bottom-6">
                            <div className="component--cta-resume-image Grid-cell--md-4 Grid-cell--sm-10 Grid-cell--xs-12 m-sm-bottom-5 m-md-right-10 responsive-gatsby resources--modal-button isModalButtonDiscover">
                                <Modal
                                 trigger={
                                    <React.Fragment>
                                        <Img
                                         resolutions={
                                            data.discoverImage.childImageSharp
                                                .resolutions
                                         }
                                         alt="Discover Your Definition of Success | Image"
                                        />
                                        <button className="btn-resume-preview" />
                                    </React.Fragment>
                                 }
                                >
                                    <ResourcePreview
                                     filled={data.defineSuccessPreviewOne}
                                     empty={data.defineSuccessPreviewTwo}
                                     altText={
                                        "Discover Your Definition of Success | Image"
                                     }
                                    />
                                </Modal>
                            </div>
                            <div className="Grid-cell--md-6 Grid-cell--sm-10 Grid-cell--xs-12 p-md-right-10 p-md-left-10">
                                <h3 className="h3 m-sm-bottom-1 m-md-bottom-2">
                                    Discover Your Definition of Success
                                </h3>
                                <p className="p-medium">
                                    When it comes to success, the reason “why”
                                    you define something as success is
                                    fundamental. Understanding your reason why
                                    can help you make better decisions, find
                                    more satisfaction, and ultimately be truly
                                    successful.
                                </p>
                                <a
                                 target="_blank"
                                 href={data.defineSuccess.publicURL}
                                 download
                                 className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
                                >
                                    TRY IT FOR YOURSELF
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="component--thumbs-list resources--thumbs-list m-sm-top-5 m-md-top-10 m-md-bottom-5 p-sm-3">
                    <div className="container">
                        <div className="Grid text-dark-grey Grid-cell--md-offset-2">
                            <div className="Grid-cell--md-9 Grid-cell--xs-12">
                                <h3 className="h3 m-sm-bottom-3 m-md-bottom-6">
                                    Struggles I learned from
                                </h3>
                                <div className="Grid Grid-cell--xs-12 m-sm-bottom-6 m-md-bottom-5 flex-wrap-nowrap">
                                    <div className="component--thumbs-holder thumb-order-sm-2">
                                        <Img
                                         resolutions={
                                            data.vessyAvatar.childImageSharp
                                                .resolutions
                                         }
                                         alt="Discover Your Definition of Success | Image"
                                        />
                                    </div>
                                    <div className="Grid-cell--xs-11 Grid-cell--sm-10 text-darker-grey p-md-left-3">
                                        <h6 className="h6 text-dark-grey m-top-no">
                                            <span className="text-bold">
                                                Vessy Tasheva
                                            </span>
                                        </h6>
                                        <p>
                                            I help people remember what they
                                            enjoy and encourage them to combine
                                            it with what they are good at.
                                        </p>
                                    </div>
                                </div>
                                <div className="Grid Grid-cell--xs-12 m-sm-bottom-6 m-md-bottom-5 flex-wrap-nowrap resources--thumbs-list-odd">
                                    <div className="component--thumbs-holder thumb-order-sm-2">
                                        <Img
                                         resolutions={
                                            data.ericAvatar.childImageSharp
                                                .resolutions
                                         }
                                         alt="Discover Your Definition of Success | Image"
                                        />
                                    </div>
                                    <div className="Grid-cell--xs-11 Grid-cell--sm-10 text-darker-grey p-md-left-3">
                                        <h6 className="h6 text-dark-grey m-top-no">
                                            <span className="text-bold">
                                                Eric Halsey
                                            </span>
                                        </h6>
                                        <p>
                                            A writer with a passionate belief in
                                            the power of peer to peer learning
                                            and storytelling to change lives.
                                        </p>
                                    </div>
                                </div>
                                <div className="Grid Grid-cell--xs-12 m-sm-bottom-6 m-md-bottom-5 flex-wrap-nowrap">
                                    <div className="component--thumbs-holder thumb-order-sm-2">
                                        <Img
                                         resolutions={
                                            data.valiAvatar.childImageSharp
                                                .resolutions
                                         }
                                         alt="Discover Your Definition of Success | Image"
                                        />
                                    </div>
                                    <div className="Grid-cell--xs-11 Grid-cell--sm-10 text-darker-grey p-md-left-3">
                                        <h6 className="h6 text-dark-grey m-top-no">
                                            <span className="text-bold">
                                                Velina Getova
                                            </span>
                                        </h6>
                                        <p>
                                            LSE graduate, business psychologist,
                                            career & life coach. 7+ years of
                                            cross-industry experience in People
                                            & Culture.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="container">
                <SubscribeNoImage />
                <FooterList list={data.allUserResumesJson.edges} />
            </div>
        </DefaultLayout>
    );
}

export const pageQuery = graphql`
    query AllResources {
        allUserResumesJson(limit: 20) {
            edges {
                node {
                    url
                    name
                    label
                    title
                    tags
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
        twitter: file(relativePath: { eq: "resources/icons/twitter@2x.png" }) {
            childImageSharp {
                resolutions(width: 118, height: 118) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        defineSuccess: file(
            relativePath: { eq: "worksheets/define_success.pdf" }
        ) {
            publicURL
        }
        defineSuccessPreviewOne: file(
            relativePath: { eq: "worksheets/define_success_1.jpg" }
        ) {
            childImageSharp {
                resolutions(width: 1240) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        defineSuccessPreviewTwo: file(
            relativePath: { eq: "worksheets/define_success_2.jpg" }
        ) {
            childImageSharp {
                resolutions(width: 1240) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        shapeStory: file(
            relativePath: { eq: "worksheets/shape_of_story.pdf" }
        ) {
            publicURL
        }
        shapeStoryPreviewOne: file(
            relativePath: { eq: "worksheets/shape_story_1.jpg" }
        ) {
            childImageSharp {
                resolutions(width: 1240) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        shapeStoryPreviewTwo: file(
            relativePath: { eq: "worksheets/shape_story_2.jpg" }
        ) {
            childImageSharp {
                resolutions(width: 1240) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        linkedin: file(relativePath: { eq: "resources/icons/linkdin@2x.png" }) {
            childImageSharp {
                resolutions(width: 118, height: 118) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        vessyAvatar: file(
            relativePath: { eq: "resources/authors/vesi@2x.png" }
        ) {
            childImageSharp {
                resolutions(width: 118, height: 118) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        ericAvatar: file(
            relativePath: { eq: "resources/authors/erik@2x.png" }
        ) {
            childImageSharp {
                resolutions(width: 118, height: 118) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        valiAvatar: file(
            relativePath: { eq: "resources/authors/veli@2x.png" }
        ) {
            childImageSharp {
                resolutions(width: 118, height: 118) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        discoverImage: file(
            relativePath: { eq: "resources/worksheet_bg_illustration.png" }
        ) {
            childImageSharp {
                resolutions(width: 483, height: 407) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        peopleImage: file(relativePath: { eq: "resources/people@2.png" }) {
            childImageSharp {
                resolutions(width: 311, height: 293) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        ladderImage: file(relativePath: { eq: "resources/ladder@2.png" }) {
            childImageSharp {
                resolutions(width: 480, height: 519) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        resourcesHeaderImage: file(
            relativePath: { eq: "resources/worksheet_preview_up@2x.png" }
        ) {
            childImageSharp {
                resolutions(width: 572, height: 454) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
    }
`;
