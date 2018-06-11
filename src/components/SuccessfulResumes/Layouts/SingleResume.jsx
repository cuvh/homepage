import React from "react";
import Img from "gatsby-image";

import intercomLogo from "assets/img/new-successful-resumes/highlighted/intercom.png";
import hannah from "assets/img/new-successful-resumes/hannah.png";
import imgPlaceholder from "assets/img/new-successful-resumes/placeholders/img-placeholder.png";
import FooterList from "components/SuccessfulResumes/FooterList";
import ResumePreview from "components/SuccessfulResumes/ResumePreview";
import Modal from "components/Modal";
import SubscribeNoImage from "components/SuccessfulResumes/SubscribeNoImage";
import herResume from "assets/img/new-successful-resumes/placeholders/her-resume.png";

import DefaultLayout from "layouts/DefaultLayout";

export default class SingleResume extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            preview: false
        };
    }

    togglePreview() {
        this.setState({ preview: !this.state.preview });
    }

    onKeyUp(e) {
        if (e.keyCode === 27 && this.state.preview) {
            this.togglePreview();
        }
    }

    render() {
        const { title, description, steps } = this.props.pathContext;
        const data = this.props.data.userResumesJson;
        const allResumes = this.props.data.allUserResumesJson;

        const resumePageOne = data.resumes[0].image;
        const resumePageTwo = data.resumes[1] ? data.resumes[1].image : null;
        return (
            <DefaultLayout>
                <div
                 className="hasBubbulesBackground"
                 onKeyUp={e => this.onKeyUp(e)}
                >
                    <main className="container">
                        <section className="resumes--accent isSingle noBackground Grid full-width m-sm-top-3 m-xs-top-5 m-sm-top-5 m-md-top-6 m-sm-bottom-4 m-md-bottom-20">
                            <div className="resumes--content Grid-cell--md-6 Grid-cell--xs-12 m-sm-bottom-3">
                                <div className="text">
                                    <span className="text-tag text-highlight-purple">
                                        CAREER CHANGE
                                    </span>
                                    <h1 className="h1">{data.title}</h1>

                                    <div className="m-xs-top-1 m-md-top-3">
                                        <h5 className="h5 text-gray-light m-bottom-3">
                                            <span className="text-gray-light">
                                                A new resume changed her career
                                                and her life
                                            </span>
                                        </h5>

                                        <p className="p-big">
                                            {data.description}
                                        </p>
                                    </div>
                                    <a
                                     onClick={() => this.togglePreview()}
                                     target="_blank"
                                     className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
                                    >
                                        See the resume
                                    </a>
                                </div>
                            </div>

                            <div className="resumes--preview isSingle Grid-cell--md-6 Grid-cell--xs-12">
                                <span className="resumes--preview-holder">
                                    <a
                                     onClick={() => this.togglePreview()}
                                     data-track="event"
                                     data-category="Successful Resumes"
                                     data-action="Click Full Resume"
                                     data-label="Casey Neistat"
                                    >
                                        <Img
                                         resolutions={
                                            resumePageOne.childImageSharp.small
                                         }
                                        />

                                        <button className="btn-resume-preview" />
                                    </a>
                                </span>

                                <div className="resumes--accent-hired p-5">
                                    <div className="Grid">
                                        <h5>{data.name}’s career</h5>
                                        <span className="label m-bottom-3">
                                            Director, Banking, Tech, YouTube
                                            personality, Marketing person
                                        </span>
                                        <span className="label hired-label">
                                            Hired at
                                        </span>
                                        <div style={{ width: "100%" }}>
                                            <Img
                                             resolutions={
                                                data.companyLogo.childImageSharp
                                                    .resolutions
                                             }
                                             alt="Intercom Company logo"
                                            />
                                        </div>
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

                        <article
                         id="article"
                         className="resume-article p-md-top-8"
                        >
                            <h3>{data.stepsTitle}</h3>
                            <p>{data.stepsDescription}</p>

                            <ul>
                                {data.steps.map((step, i) => (
                                    <li key={i}>
                                        <h4>
                                            Step {i + 1}: {step.title}
                                        </h4>
                                        <p>{step.description}</p>
                                    </li>
                                ))}
                            </ul>

                            <figure>
                                <img
                                 src={imgPlaceholder}
                                 alt="Image Placeholder"
                                />
                            </figure>
                        </article>

                        <SubscribeNoImage />
                        <FooterList list={allResumes.edges} />
                        <Modal isModalShowed={this.state.preview}>
                            <ResumePreview
                             resumePageOne={resumePageOne}
                             resumePageTwo={resumePageTwo}
                             facebookText={data.facebookText}
                             twitterText={data.twitterText}
                             url={data.url}
                             altText={data.altText}
                             togglePreview={() => this.togglePreview()}
                            />
                        </Modal>
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
