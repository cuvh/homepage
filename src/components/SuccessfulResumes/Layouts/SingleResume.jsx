import React from "react";
import Img from "gatsby-image";
import Track from "utils/Track";
import Modal from "components/Modal";

import FeelingInspired from "components/SuccessfulResumes/FeelingInspired";
import FooterList from "components/SuccessfulResumes/FooterList";
import ResumePreview from "components/SuccessfulResumes/ResumePreview";
import SubscribeNoImage from "components/SuccessfulResumes/SubscribeNoImage";

import Meta from "components/Meta";
import DefaultLayout from "layouts/DefaultLayout";

import samOne from "assets/img/new-successful-resumes/problems@2.png";
import samTwo from "assets/img/new-successful-resumes/research@2.png";
import samElement from "assets/img/new-successful-resumes/samsresumeelement@2x.png";

import danielOne from "assets/img/new-successful-resumes/daniel@2.png";
import danielPots from "assets/img/new-successful-resumes/pots@2.png";
import danielPlant from "assets/img/new-successful-resumes/plant@2.png";
import danielElement from "assets/img/new-successful-resumes/danielelement@2.png";

export default class SingleResume extends React.PureComponent {
    render() {
        const { title, description, steps } = this.props.pathContext;
        const data = this.props.data.userResumesJson;
        const allResumes = this.props.data.allUserResumesJson;

        console.log(data.steps);

        const resumePageOne = data.resumes[0].image;
        const resumePageTwo = data.resumes[1] ? data.resumes[1].image : null;
        return (
            <DefaultLayout className="resumedetail">
                <Meta
                 title={data.pageTitle}
                 description={data.pageDescription}
                 metaImage={data.socialImg}
                />
                <div className="hasBubbulesBackground">
                    <main className="container">
                        <section className="resumes--accent isSingle noBackground Grid full-width m-sm-top-3 m-xs-top-5 m-sm-top-5 m-md-top-6 m-sm-bottom-4 m-md-bottom-20">
                            <div className="resumes--content Grid-cell--md-6 Grid-cell--xs-12 m-sm-bottom-3">
                                <div className="text">
                                    <span className="text-tag text-highlight-purple">
                                        {data.label}
                                    </span>
                                    <h1 className="h1">{data.title}</h1>

                                    <div className="m-xs-top-1 m-md-top-3">
                                        <p className="p-big">
                                            {data.description}
                                        </p>
                                    </div>

                                    <Modal
                                     trigger={
                                        <a className="btn btn-big btn-primary m-xs-top-2 m-md-top-6">
                                            See the resume
                                        </a>
                                     }
                                    >
                                        <ResumePreview
                                         resumePageOne={resumePageOne}
                                         resumePageTwo={resumePageTwo}
                                         facebookText={data.facebookText}
                                         twitterText={data.twitterText}
                                         url={data.url}
                                         altText={`${data.name}'s resume`}
                                        />
                                    </Modal>
                                </div>
                            </div>

                            <div className="resumes--preview isSingle Grid-cell--md-6 Grid-cell--xs-12">
                                <span className="resumes--preview-holder">
                                    <Modal
                                     trigger={
                                        <a
                                         onClick={() =>
                                            Track(
                                                "Successful Resumes",
                                                "Expand Resume",
                                                `${data.name} - Top Button Click`
                                            )}
                                         style={{ cursor: "pointer" }}
                                        >
                                            <div className="responsive-gatsby">
                                                <Img
                                                 resolutions={
                                                    resumePageOne
                                                        .childImageSharp.small
                                                 }
                                                 alt={`${data.name}'s resume`}
                                                />
                                            </div>

                                            <button className="btn-resume-preview" />
                                        </a>
                                     }
                                    >
                                        <ResumePreview
                                         resumePageOne={resumePageOne}
                                         resumePageTwo={resumePageTwo}
                                         facebookText={data.facebookText}
                                         twitterText={data.twitterText}
                                         url={data.url}
                                         altText={`${data.name}'s resume`}
                                        />
                                    </Modal>
                                </span>

                                <div className="resumes--accent-hired p-5">
                                    <div className="Grid">
                                        <h5>{data.name}’s career</h5>
                                        <span className="label m-bottom-3">
                                            {data.position}
                                        </span>

                                        {data.companyLogo ? (
                                            <div
                                             style={{
                                                width: "100%",
                                                display: "inline-flex",
                                                flexWrap: "wrap",
                                                alignItems: "center"
                                             }}
                                            >
                                                <span className="label hired-label m-md-right-2">
                                                    Hired at
                                                </span>
                                                <Img
                                                 resolutions={
                                                    data.companyLogo
                                                        .childImageSharp
                                                        .resolutions
                                                 }
                                                 alt="Company logo"
                                                />
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <a
                             href="#article"
                             className="page--scroll"
                            >
                                Read the story
                            </a>
                        </section>

                        {data.url === "sam-young" ? (
                            <article
                             style={{ maxWidth: 765 }}
                             className="resume-article p-md-top-8"
                            >
                                <blockquote
                                 style={{
                                    marginTop: 0,
                                    marginBottom: 0
                                 }}
                                >
                                    I would go to these job fairs and you would
                                    hand over your resume, and people would be
                                    like, “We don’t take resumes.” And I’d be
                                    like [handing resume over] they’re like,
                                    “But we’ll take this one.”
                                </blockquote>
                            </article>
                        ) : null}

                        <article
                         id="article"
                         className="resume-article p-md-top-8"
                        >
                            <h3>{data.stepsTitle}</h3>
                            <p>{data.stepsDescription}</p>

                            {data.url === "daniel-pietersen" ? (
                                <div style={{ textAlign: "center" }}>
                                    <img
                                     style={{ width: 560, margin: "0 auto" }}
                                     src={danielOne}
                                    />
                                </div>
                            ) : null}

                            <ul>
                                {data.steps.map((step, i) => (
                                    <li key={i}>
                                        {step.title ? (
                                            <h4>
                                                Step {i + 1}: {step.title}
                                            </h4>
                                        ) : null}

                                        {data.url === "sam-young" && i === 2 ? (
                                            <img
                                             style={{
                                                marginBottom: 50,
                                                marginTop: 23
                                             }}
                                             src={samTwo}
                                            />
                                        ) : null}

                                        {data.url === "sam-young" && i === 0 ? (
                                            <img
                                             style={{ margin: "50px 0" }}
                                             src={samOne}
                                            />
                                        ) : null}

                                        <p
                                         dangerouslySetInnerHTML={{
                                            __html: step.description
                                         }}
                                        />

                                        {data.url === "daniel-pietersen" &&
                                        i === 2 ? (
                                            <img
                                             style={{ marginBottom: 50 }}
                                             src={danielPots}
                                            />
                                        ) : null}

                                        {data.url === "sam-young" && i === 3 ? (
                                            <blockquote>
                                                I literally am a hiring manager.
                                                I know what it’s like to look at
                                                1000 resumes. One that visually
                                                is not appealing, I won’t even
                                                look at.
                                            </blockquote>
                                        ) : null}

                                        {data.url === "daniel-pietersen" &&
                                        i === 3 ? (
                                            <React.Fragment>
                                                <blockquote>
                                                    Instead of wasting time on
                                                    formatting and styling
                                                    issues, I could focus on
                                                    what matters most - having
                                                    the perfect representation
                                                    of who I am and what I can
                                                    offer.
                                                </blockquote>
                                                <img src={danielPlant} />
                                            </React.Fragment>
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </article>

                        {data.url === "sam-young" ||
                        data.url === "daniel-pietersen" ? (
                            <section className="component--cta-resume Grid m-sm-top-5 m-md-top-8">
                                <div className="component--cta-resume-image Grid-cell--md-4 Grid-cell--sm-10 Grid-cell--xs-12 p-md-right-10 m-sm-bottom-5">
                                    <img
                                     style={{ width: 404, height: 496 }}
                                     src={
                                        data.url === "sam-young" ? (
                                            samElement
                                        ) : (
                                            danielElement
                                        )
                                     }
                                     alt="Image Placeholder"
                                    />
                                </div>
                                <div className="Grid-cell--md-6 Grid-cell--sm-10 Grid-cell--xs-12 p-md-right-13">
                                    <h3 className="h3 m-sm-bottom-1 m-md-bottom-2">
                                        {data.url === "daniel-pietersen" ? (
                                            "New job, new life"
                                        ) : (
                                            "A Hard-Earned Career Change"
                                        )}
                                    </h3>
                                    <p className="p-medium">
                                        {data.url === "daniel-pietersen" ? (
                                            "It’s now a year and a half later and the position I’m in at Intercom has taught me so much, opened so many doors and allowed me to grow a lot faster than I could’ve ever imagined. To give an example, one of my life-long goals was to be able to go to San Francisco and visit the various tech giants Facebook, Google, Apple, etc. It’s such a touristy thing to do but it’s just something I knew I had to tick off my bucket list. Right now it still feels surreal but I was able to tick that off my list a couple of months ago, thanks to Intercom who flew me to visit their San Francisco branch."
                                        ) : (
                                            `It took a lot of hard work and strategizing, but Sam’s story shows that a successful career change is possible with the rights tools. Now that you’ve read Sam’s story, you can see the resume that made recruiters take notice and remember her even years later.`
                                        )}
                                    </p>
                                    <Modal
                                     trigger={
                                        <a className="btn btn-big btn-primary m-xs-top-2 m-md-top-6">
                                            Read the resume
                                        </a>
                                     }
                                    >
                                        <ResumePreview
                                         resumePageOne={resumePageOne}
                                         resumePageTwo={resumePageTwo}
                                         facebookText={data.facebookText}
                                         twitterText={data.twitterText}
                                         url={data.url}
                                         altText={`${data.name}'s resume`}
                                        />
                                    </Modal>

                                    <FeelingInspired
                                     dark={false}
                                     name={data.name}
                                    />
                                </div>
                            </section>
                        ) : null}

                        <SubscribeNoImage />
                        <FooterList list={allResumes.edges} />
                    </main>
                </div>
            </DefaultLayout>
        );
    }
}

export const pageQuery = graphql`
    query SingleResume($url: String!) {
        userResumesJson(url: { eq: $url }) {
            name
            title
            position
            pageTitle
            pageDescription
            socialImg
            description
            label
            url
            stepsTitle
            stepsDescription
            steps {
                title
                description
            }
            resumes {
                image {
                    childImageSharp {
                        large: resolutions(width: 1240) {
                            ...GatsbyImageSharpResolutions
                        }
                        small: resolutions(width: 548) {
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
        }
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
    }
`;
