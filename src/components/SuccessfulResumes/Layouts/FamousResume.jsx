import React from "react";
import Img from "gatsby-image";
import classnames from "classnames";
import Track from "utils/Track";

import Link from "gatsby-link";
import Helmet from "react-helmet";

import DefaultLayout from "layouts/DefaultLayout";
import FamousHeader from "components/SuccessfulResumes/Sections/FamousHeader";
import Menu from "components/SuccessfulResumes/Sections/Menu";
import LifeProject from "components/SuccessfulResumes/Sections/LifeProject";
import Experience from "components/SuccessfulResumes/Sections/Experience";
import BooksTwo from "components/SuccessfulResumes/Sections/BooksTwo";
import Awards from "components/SuccessfulResumes/Sections/Awards";
import Strengths from "components/SuccessfulResumes/Sections/Strengths";
import TypicalDay from "components/SuccessfulResumes/Sections/TypicalDay";
import BooksFour from "components/SuccessfulResumes/Sections/BooksFour";
import Strugles from "components/SuccessfulResumes/Sections/Strugles";
import LifePhilosophy from "components/SuccessfulResumes/Sections/LifePhilosophy";
import FamousContainer from "components/SuccessfulResumes/Sections/ResumeBottom";
import SocialBar from "components/SuccessfulResumes/SocialBar";

import ResumePreview from "components/SuccessfulResumes/ResumePreview";
import SocialModal from "components/SocialModal";

import Meta from "components/Meta";

export default function FamousResume({
    data: { famousResumesJson: { ...data }, list }
}) {
    const socialData = {
        facebookText: data.facebookText,
        twitterText: data.twitterText,
        url: data.url
    };

    return (
        <DefaultLayout className="navbar-light">
            <Meta
             title={data.pageTitle}
             description={data.pageDescription}
             metaImage={data.socialImg.childImageSharp.resolutions.src}
            />

            <SocialBar
             facebookText={data.facebookText}
             twitterText={data.twitterText}
             url={"famous/" + data.url}
            />

            <SocialModal
             trigger={
                <a
                 onClick={() =>
                    Track(
                        "Successful Resumes",
                        "Expand Resume",
                        `${data.name} - Sticky click`
                    )}
                 className="component--fast-resume-preview"
                >
                    <Img
                     resolutions={data.resumes[0].image.childImageSharp.thumb}
                    />
                    <button className="btn-resume-preview" />
                </a>
             }
             socialData={socialData}
            >
                <ResumePreview
                 resumePageOne={data.resumes[0].image}
                 altText={`${data.name}'s resume`}
                />
            </SocialModal>

            <main className="famous-resume--container">
                <div
                 className={classnames({
                    "famous-resume-inverted": data.lightCover
                 })}
                >
                    <FamousHeader
                     name={data.name}
                     cover={data.cover}
                     description={data.pageDescription}
                     smallDescription={data.smallDescription}
                    />
                </div>

                <Menu sections={data.sections.map(item => item.section)} />

                {data.sections.map(item => {
                    if (item.section === "LifeProject") {
                        return (
                            <div key={item.section}>
                                <LifeProject
                                 altText={`${data.name}'s life project`}
                                 {...item}
                                />
                                <Experience {...item} />
                            </div>
                        );
                    }

                    if (
                        item.section === "MostProudOf" ||
                        item.section === "Achievements"
                    ) {
                        return (
                            <Awards
                             key={item.section}
                             altText={`${data.name} feeling proud`}
                             {...item}
                            />
                        );
                    }

                    if (item.section === "TypicalDay") {
                        return (
                            <TypicalDay
                             key={item.section}
                             {...item}
                            />
                        );
                    }

                    if (item.section === "Struggles") {
                        return (
                            <Strugles
                             key={item.section}
                             {...item}
                            />
                        );
                    }

                    if (item.section === "Strengths") {
                        return (
                            <Strengths
                             key={item.section}
                             {...item}
                            />
                        );
                    }
                })}
                <FamousContainer
                 list={list.edges}
                 dark={true}
                 name={data.name}
                 finalDescription={data.finalDescription}
                 resume={data.resumes[0].image}
                 socialData={socialData}
                 altText={`${data.name}'s resume`}
                />
            </main>
        </DefaultLayout>
    );
}

export const pageQuery = graphql`
    query FamousResume($url: String!) {
        famousResumesJson(url: { eq: $url }) {
            lightCover
            name
            url
            smallDescription
            pageDescription
            pageTitle
            facebookText
            twitterText
            finalDescription
            socialImg {
                childImageSharp {
                    resolutions(width: 1200, height: 628) {
                        ...GatsbyImageSharpResolutions_noBase64
                    }
                }
            }
            cover {
                childImageSharp {
                    sizes(maxWidth: 2500) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
            resumes {
                image {
                    childImageSharp {
                        thumb: resolutions(width: 160, height: 220) {
                            ...GatsbyImageSharpResolutions
                        }
                        small: resolutions(width: 884) {
                            ...GatsbyImageSharpResolutions
                        }
                        large: resolutions(width: 2479) {
                            ...GatsbyImageSharpResolutions
                        }
                    }
                }
            }
            sections {
                image {
                    childImageSharp {
                        sizes(maxWidth: 500) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
                section
                description
                data {
                    title
                    description
                    backgroundColor
                    startDate
                    endDate
                    location
                    position
                    image {
                        childImageSharp {
                            resolutions(width: 300) {
                                ...GatsbyImageSharpResolutions
                            }
                        }
                    }
                }
            }
        }
        list: allFamousResumesJson(limit: 200) {
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
                    resumes {
                        image {
                            childImageSharp {
                                resolutions(width: 240, height: 329) {
                                    ...GatsbyImageSharpResolutions
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
