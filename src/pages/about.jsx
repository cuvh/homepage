import React from "react";
import Link from "gatsby-link";
import Meta from "components/Meta";

import Social from "components/About/Social";
import People from "components/About/People";
import Quotes from "components/About/Quotes";
// import Members from "components/About/Members";
// import Images from "components/About/Images";

import DefaultLayout from "layouts/DefaultLayout";

// import experimentIcon from "assets/img/about/experiment@1x.svg";
// import growIcon from "assets/img/about/grow@1x.svg";
// import iterateIcon from "assets/img/about/iterate@1x.svg";
// import keyIcon from "assets/img/about/key@1x.svg";
// import respectIcon from "assets/img/about/respect@1x.svg";

const About = ({
    data: {
        danielAvatar,
        akshayAvatar,
        claraAvatar,
        zainabAvatar,
        teslaLogo,
        intercomLogo,
        rteLogo,
        ...rest
    },
}) => (
    <DefaultLayout className="about-page">
        <Meta
         title="About Enhancv"
         description="Our mission is to help talented people unleash their full potential by giving them the opportunity to create resumes that show who they really are."
        />

        <div className="about-container m-top-10">
            <div className="about-text-container text-left m-left-16 m-top-8">
                <h1 className="about-text-title m-top-0">
                    Enhancv brings resumes that are all about you
                </h1>
                <p className="about-text-content m-top-4">
                    Enhancv is a growing SaaS startup built around a web platform for creating
                    modern resumes. Our tool helps people highlight their achievements, attitude,
                    and personality, so they can tell their story with confidence.
                </p>
            </div>
        </div>

        <Social />

        <Quotes
         avatars={[danielAvatar, akshayAvatar, claraAvatar, zainabAvatar]}
         companies={[teslaLogo, intercomLogo, rteLogo]}
        />

        <People images={rest} />
    </DefaultLayout>
);

export default About;

export const pageQuery = graphql`
    fragment peopleImages on File {
        childImageSharp {
            resolutions(width: 320, height: 328) {
                ...GatsbyImageSharpResolutions
            }
        }
    }

    fragment quotesImages on File {
        childImageSharp {
            resolutions(width: 270, height: 270) {
                ...GatsbyImageSharpResolutions
            }
        }
    }

    fragment companyLogos on File {
        childImageSharp {
            resolutions(height: 30) {
                ...GatsbyImageSharpResolutions
            }
        }
    }

    query About {
        chochoImg: file(relativePath: { eq: "about/people/chocho@2x.png" }) {
            ...peopleImages
        }
        chochoHoverImg: file(relativePath: { eq: "about/people/chocho_hover@2x.png" }) {
            ...peopleImages
        }
        alexImg: file(relativePath: { eq: "about/people/alex@2x.png" }) {
            ...peopleImages
        }
        deniImg: file(relativePath: { eq: "about/people/deni@2x.png" }) {
            ...peopleImages
        }
        vassyImg: file(relativePath: { eq: "about/people/vassy@2x.png" }) {
            ...peopleImages
        }
        vassyHoverImg: file(relativePath: { eq: "about/people/vassy_hover@2x.png" }) {
            ...peopleImages
        }
        radostImg: file(relativePath: { eq: "about/people/radost@2x.png" }) {
            ...peopleImages
        }
        mitkoImg: file(relativePath: { eq: "about/people/mitko@2x.png" }) {
            ...peopleImages
        }
        mitkoHoverImg: file(relativePath: { eq: "about/people/mitko_hover@2x.png" }) {
            ...peopleImages
        }
        danielAvatar: file(relativePath: { eq: "about/quotes/daniel@2x.png" }) {
            ...quotesImages
        }
        akshayAvatar: file(relativePath: { eq: "about/quotes/akshay@2x.png" }) {
            ...quotesImages
        }
        claraAvatar: file(relativePath: { eq: "about/quotes/clara@2x.png" }) {
            ...quotesImages
        }
        zainabAvatar: file(relativePath: { eq: "about/quotes/zainab@2x.png" }) {
            ...quotesImages
        }
        teslaLogo: file(relativePath: { eq: "about/quotes/tesla-logo.png" }) {
            ...companyLogos
        }
        intercomLogo: file(relativePath: { eq: "about/quotes/intercom-logo.png" }) {
            ...companyLogos
        }
        rteLogo: file(relativePath: { eq: "about/quotes/rte-logo.png" }) {
            ...companyLogos
        }
    }
`;
