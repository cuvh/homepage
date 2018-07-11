import React from "react";
import Img from "components/Common/Img";
import classnames from "classnames";
import Track from "utils/Track";

import Link from "gatsby-link";
import Helmet from "react-helmet";

import DefaultLayout from "layouts/DefaultLayout";
import FamousHeader from "components/SuccessfulResumes/Sections/FamousHeader";
import Menu from "components/SuccessfulResumes/Sections/Menu";
import LifeProject from "components/SuccessfulResumes/Sections/LifeProject";
import Experience from "components/SuccessfulResumes/Sections/Experience";
import Awards from "components/SuccessfulResumes/Sections/Awards";
import Strengths from "components/SuccessfulResumes/Sections/Strengths";
import Achievements from "components/SuccessfulResumes/Sections/Achievements";
import TypicalDay from "components/SuccessfulResumes/Sections/TypicalDay";
import Strugles from "components/SuccessfulResumes/Sections/Strugles";
import LifePhilosophy from "components/SuccessfulResumes/Sections/LifePhilosophy";
import FamousBottom from "components/SuccessfulResumes/Sections/FamousBottom";
import Languages from "components/SuccessfulResumes/Sections/Languages";
import SocialBar from "components/SuccessfulResumes/SocialBar";

import ResumePreview from "components/SuccessfulResumes/ResumePreview";
import SocialModal from "components/SocialModal";

import Meta from "components/Meta";

export default function FamousResume({ data: { famousResumesJson: { ...data }, list } }) {
    const socialData = {
        facebookText: data.facebookText,
        twitterText: data.twitterText,
        url: data.url,
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
                    Track("Successful Resumes", "Expand Resume", `${data.name} - Sticky click`)}
                 className="component--fast-resume-preview">
                    <Img
                     resolutions={data.resumes[0].image.childImageSharp.thumb}
                     altText={`${data.name}'s resume preview`}
                    />
                    <button className="btn-resume-preview" />
                </a>
             }
             socialData={socialData}>
                <ResumePreview
                 resumePageOne={data.resumes[0].image}
                 altText={`${data.name}'s resume preview`}
                />
            </SocialModal>

            <main className={`famous-resume--container ${data.url}`}>
                <div
                 className={classnames({
                    "famous-resume-inverted": data.lightCover,
                 })}>
                    <FamousHeader
                     name={data.name}
                     cover={data.cover}
                     description={data.headerDescription}
                     smallDescription={data.smallHeaderDescription}
                    />
                </div>

                <Menu sections={data.sections.map(item => item.section)} />

                {data.sections.map(item => {
                    if (item.section === "LifeProject") {
                        return (
                            <div key={item.section}>
                                <LifeProject {...item} />
                                <Experience {...item} />
                            </div>
                        );
                    }

                    if (item.section === "MostProudOf") {
                        return (
                            <Awards
                             key={item.section}
                             {...item}
                            />
                        );
                    }

                    if (item.section === "Languages") {
                        return (
                            <Languages
                             key={item.section}
                             {...item}
                            />
                        );
                    }

                    if (item.section === "Achievements") {
                        return (
                            <Achievements
                             key={item.section}
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
                <FamousBottom
                 list={list.edges}
                 dark={true}
                 name={data.name}
                 finalDescription={data.finalDescription}
                 finalTitle={data.finalTitle}
                 resume={data.resumes[0].image}
                 socialData={socialData}
                 altText={`${data.name}'s resume preview`}
                 photoBy={data.photoBy}
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
            smallHeaderDescription
            headerDescription
            pageDescription
            pageTitle
            facebookText
            twitterText
            finalTitle
            finalDescription
            photoBy
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
                        thumb: resolutions(width: 160, height: 230) {
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
