import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";

import teslaLogo from "assets/img/about/quotes/tesla-logo.png";
import intercomLogo from "assets/img/about/quotes/intercom-logo.png";
import rteLogo from "assets/img/about/quotes/rte-logo.png";
import keywordsAnimation from "assets/img/about/quotes/keywords_video.mp4";

export default function Quotes({
    avatars: [danielAvatar, akshayAvatar, claraAvatar, zainabAvatar],
    companies: [teslaLogo, intercomLogo, rteLogo],
}) {
    const items = [
        {
            name: "Daniel Pietersen",
            avatar: danielAvatar,
            position: "Senior Customer Support Engineer",
            companyLogo: intercomLogo,
            quote:
                '"Enhancv gave me a sense of relief and a feeling of confidence when passing it along to a potential employer."',
        },
        {
            name: "Akshay S. Rao",
            avatar: akshayAvatar,
            position: "Intern",
            companyLogo: teslaLogo,
            quote:
                '"At Tesla, the competition is very high, but Enhancv put me in front of other applicants."',
        },
        {
            name: "Clara Sophia Lim",
            avatar: claraAvatar,
            position: "Paralegal",
            companyLogo: null,
            quote:
                '"I did not start listing my achievements until I used Enhancv. It really got me thinking about what I’ve done in my career or just in my life."',
        },
        {
            name: "Zainab Boladale",
            avatar: zainabAvatar,
            position: "TV News Presenter",
            companyLogo: rteLogo,
            quote:
                '"Before Enhancv I felt like I had so much to offer but it wasn’t coming across."',
        },
    ];
    return (
        <div className="quotes-container m-left-16 m-top-20">
            <div className="make-your-move-container m-top-8 m-bottom-10 m-right-5">
                <h2 className="make-your-move-title m-bottom-5">Make your move</h2>
                <p className="make-your-move-description">
                    A meaningful professional path should be a human right. We extend a hand in the
                    moments when you prepare to take your next big leap.{" "}
                </p>
            </div>

            <div className="quotes-card-slider-container">
                <Slider
                 className="quotes-card-carousel-container center"
                 lazyLoad={true}
                 autoplay={false}
                 autoplaySpeed={2500}
                 pauseOnHover={true}
                 speed={200}
                 arrows={false}
                 swipeToSlide={true}>
                    {items.map(({ name, avatar, position, companyLogo, quote }, index) => (
                        <div
                         key={index}
                         className="quotes-card-cell p-top-3">
                            <div className="quotes-card-box text-center">
                                <Img
                                 className="quotes-card-image"
                                 resolutions={avatar.childImageSharp.resolutions}
                                 alt={`${name}'s photo`}
                                />
                                <div className="quotes-card-person-info">
                                    <h4 className="quotes-card-person-name">{name}</h4>
                                    <h5 className="quotes-card-person-jobtitle">{position}</h5>
                                    {companyLogo ? (
                                        <div className="quotes-card-hired">
                                            <span className="label">Hired at</span>
                                            <Img
                                             className="quotes-card-company-image"
                                             resolutions={companyLogo.childImageSharp.resolutions}
                                             alt="Company logo"
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/*<div className="placeholder  m-bottom-10">TODO: Quote card</div>*/}

            <div className="keywords-animation-container m-top-16 m-right-16">
                <video
                 className="keywords-animation m-auto"
                 autoPlay
                 playsInline
                 muted
                 loop>
                    <source
                     src={keywordsAnimation}
                     type="video/mp4"
                    />
                    {/*<img src={keywordsAnimationPng} />*/}
                </video>
            </div>

            <div className="we-believe-container m-top-16">
                <h2 className="we-believe-title m-bottom-5">We believe...</h2>
                <p className="we-believe-description">
                    that earning and keeping customer trust is the key to success.<br />
                    <br />
                    We stay curious for new opportunities, challenge ourselves and learn from
                    mistakes.<br />
                    <br />
                    At Enhancv we speak candidly and threat our people respectfully.
                </p>
            </div>
        </div>
    );
}
