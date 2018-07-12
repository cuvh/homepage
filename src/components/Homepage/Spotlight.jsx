import React from "react";
import Img from "gatsby-image";

export default function SportLight({ back, front }) {
    return (
        <div className="homepage-spotlight">
            <div className="container homepage-panel">
                <div className="animate-in Grid">
                    <div className="Grid Grid--alignCenter Grid-cell--xs-12 Grid-cell--sm-6 Grid-cell--lg-6 Grid-cell--sm-offset-1 Grid-cell--lg-offset-1 spotlight-image">
                        <div className="relative m-top-1 spotlight-stacked-images">
                            <div
                             className="responsive-gatsby"
                             style={{
                                width: "100%",
                                position: "absolute",
                                top: "13px",
                                left: "3px",
                                background: "white",
                                zIndex: 1,
                             }}>
                                <Img
                                 resolutions={back.childImageSharp.resolutions}
                                 alt="Text block representing your achievements throughout the day that don't stand out"
                                />
                            </div>
                            <div
                             className="responsive-gatsby"
                             style={{
                                width: "131%",
                                position: "relative",
                                top: "23px",
                                left: "64%",
                                zIndex: 2,
                             }}>
                                <Img
                                 resolutions={front.childImageSharp.resolutions}
                                 alt="Standing-out pie representing your achievements throughout the day"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Grid Grid--alignCenter Grid-cell--xs-12 Grid-cell--sm-5 spotlight-text">
                        <div className="m-left-1 text-center-xs">
                            <h2 className="m-top-no">Put your achievements in the spotlight</h2>
                            <p className="text-muted m-top-2 m-bottom-7">
                                With most resumes, the key things don't come across. <br />Bring
                                your most important accomplishments forward and show what you’re
                                capable of achieving.
                            </p>
                            <a
                             data-track="event"
                             data-category="Homepage"
                             data-action="Click New Features"
                             data-label="Show them what you have to offer"
                             href="https://app.enhancv.com"
                             className="feature-link">
                                Show them what you have to offer &nbsp;&rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
