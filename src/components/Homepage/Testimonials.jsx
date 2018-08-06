import React from "react";
import Slider from "react-slick";
import Tilt from "react-tilt";
import LazyImage from "utils/Image";

import Img from "components/Common/Img";

export default function Testimonials({
    images: { danielLogo, akshayLogo, zainabLogo, edwardLogo, claraLogo },
}) {
    const data = [
        {
            text:
                "Enhancv gave me a sense of relief and a feeling of confidence when passing it along to a potential employer.",
            title: "Daniel Pietersen, Senior Customer Support Engineer at Intercom",
            image: danielLogo,
        },
        {
            text:
                "At Tesla, the competition is very high, but Enhancv put me in front of other applicants.",
            title: "Akshay S. Rao, Intern at Tesla",
            image: akshayLogo,
        },
        {
            text: "Before Enhancv I felt like I had so much to offer but it wasn’t coming across.",
            title: "Zainab Boladale, TV News Presenter, RTÉ",
            image: zainabLogo,
        },
        {
            text:
                "A recruiter at a top 5 investment bank in London told me my CV was a breath of fresh air and invited me to my first interview in a bulge bank.",
            title: "Edward Kennedy, Alumnus at University College Dublin",
            image: edwardLogo,
        },
        {
            text:
                "I did not start listing my achievements until I used Enhancv. It really got me thinking about what I’ve done in my career or just in my life.",
            title: "Clara Sophia Lim, Paralegal",
            image: claraLogo,
        },
    ];

    return (
        <div className="slick-arrows-on-hover">
            <div className="container homepage-testimonials homepage-panel">
                <Slider
                 dots={true}
                 infinite={true}
                 className="animate-in carousel-container">
                    {data.map(({ image, text, title }, index) => (
                        <div
                         className="Grid"
                         key={index}>
                            <div className="Grid Grid--alignCenter Grid-cell--xs-12 Grid-cell--sm-3 text-center Grid-cell--sm-offset-1 Grid-cell--lg-offset-1">
                                <Tilt
                                 className="Tilt"
                                 style={{ margin: "0 auto", maxWidth: 280 }}
                                 options={{
                                    glare: true,
                                    maxGlare: 1,
                                    maxTilt: 25,
                                 }}>
                                    <div className="responsive-gatsby">
                                        <Img
                                         className="testimonial-image m-bottom-2"
                                         resolutions={image.childImageSharp.resolutions}
                                         alt={`${title} - photo`}
                                        />
                                    </div>
                                </Tilt>
                            </div>
                            <div className="Grid testimonial-valign Grid-cell--xs-12 Grid-cell--sm-6 Grid-cell--sm-offset-1 Grid-cell--lg-offset-1">
                                <div className="m-left-1 text-center-xs">
                                    <h2 className="m-top-no hidden-xs hidden-sm hidden-md">
                                        “{text}”
                                    </h2>
                                    <h3 className="m-top-no hidden-lg">“{text}”</h3>
                                    <p className="text-muted m-top-2 text-small">{title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
