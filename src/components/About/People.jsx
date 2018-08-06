import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";

export default function People({
    images: {
        chochoImg,
        chochoHoverImg,
        alexImg,
        deniImg,
        vassyImg,
        vassyHoverImg,
        radostImg,
        mitkoImg,
        mitkoHoverImg,
    },
}) {
    const data = [
        {
            name: "Chocho",
            image: chochoImg,
            hoverImage: chochoHoverImg,
            keywords: "#apps #trading #books #training #development",
        },
        {
            name: "Alex",
            image: alexImg,
            hoverImage: alexImg,
            keywords: "#business #ows #numbers #events #science",
        },
        {
            name: "Deni",
            image: deniImg,
            hoverImage: deniImg,
            keywords: "#people #ows #numbers #events #science",
        },
        {
            name: "Vassy",
            image: vassyImg,
            hoverImage: vassyHoverImg,
            keywords: "#planning #ows #numbers #events #science",
        },
        {
            name: "Radost",
            image: radostImg,
            hoverImage: radostImg,
            keywords: "#design #ows #numbers #events #science",
        },
        {
            name: "Mitko",
            image: mitkoImg,
            hoverImage: mitkoHoverImg,
            keywords: "#people #ows #numbers #events #science",
        },
    ];

    return (
        <div className="people-container m-top-16">
            <h2 className="people-title m-left-20">Our people</h2>
            <p className="people-description m-top-5 m-left-20 m-bottom-0">
                We’re a team of 16 passionately driven people. Spread across Sofia and Dublin we're
                united around the idea that everyone deserves a meaningful professional path.
            </p>
            <div className="people-slider-container">
                <Slider
                 className="carousel-container center p-top-4 p-left-1"
                 lazyLoad={true}
                 autoplay={true}
                 autoplaySpeed={2500}
                 pauseOnHover={true}
                 speed={200}
                 slidesToShow={5}
                 swipeToSlide={true}>
                    {data.map(({ image, hoverImage, name, keywords }, index) => (
                        <div
                         className="cell-container text-center p-left-1 p-right-1"
                         key={index}>
                            <div className="image-container text-center m-top-2">
                                <Img
                                 className="image"
                                 resolutions={image.childImageSharp.resolutions}
                                 alt={`${name}'s photo`}
                                />
                            </div>
                            <div className="hover-image-container text-center m-top-2">
                                <Img
                                 className="hover-image"
                                 resolutions={hoverImage.childImageSharp.resolutions}
                                 alt={`${name}'s hover photo`}
                                />
                            </div>
                            <div className="image-title m-top-2">{name}</div>
                            <div className="keywords m-top-2">{keywords}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
