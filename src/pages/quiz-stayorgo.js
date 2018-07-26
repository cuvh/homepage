import React from "react";
import Link from "gatsby-link";
import Meta from "components/Meta";
import Img from "gatsby-image";

const StayOrGoQuiz = ({ data: { fishImage } }) => (
    <div className="career-page">
        <Meta
         title="Quiz: Should I stay or should I go?"
         description="Quiz - Evaluate your current job in 3 minutes or less"
        />
        <div className="quiz-stayorgo">
            <div className="q-left-container">
                <Img
                 className="fish-img"
                 sizes={fishImage.childImageSharp.sizes}
                 alt="Proudly holding resume photo"
                />
            </div>
            <div className="q-right-container"> jskdnfjksdfnskjdfksdfksdf</div>
        </div>
    </div>
);

export default StayOrGoQuiz;

export const pageQuery = graphql`
    query StayOrGoQuiz {
        fishImage: file(relativePath: { eq: "landing-pages/fish.png" }) {
            childImageSharp {
                sizes(maxWidth: 2500) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
    }
`;
