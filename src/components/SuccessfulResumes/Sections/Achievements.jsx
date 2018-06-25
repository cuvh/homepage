import React from "react";
import Img from "components/Common/Img";

import strugleImg from "assets/img/new-successful-resumes/placeholders/struggles.jpg";

export default function Achievements({ section, data }) {
    let left = data;
    let right = data.splice(0, Math.floor(data.length / 2));

    return (
        <section
         id={section}
         className="component--thumbs-list p-md-top-8 p-md-bottom-5 m-sm-top-5 m-md-top-10 m-md-bottom-5">
            <div className="container">
                <div className="Grid text-dark-grey Grid-cell--md-offset-1">
                    <div className="Grid-cell--md-11 Grid-cell--xs-12">
                        <h3 className="h3 m-sm-bottom-3 m-md-bottom-6">Achievements</h3>
                        <div className="Grid">
                            <div className="Grid-cell--md-6 p-md-right-7">
                                {left.map(item => (
                                    <div className="Grid Grid-cell--xs-12 m-sm-bottom-6 m-md-bottom-5 flex-wrap-nowrap">
                                        <Img
                                         style={{ width: "39px", height: "39px" }}
                                         sizes={item.image.childImageSharp.resolutions}
                                        />
                                        <div className="Grid-cell--xs-9 Grid-cell--sm-10 text-darker-grey p-left-2">
                                            <h6 className="h6 text-dark-grey m-top-no">
                                                {item.title}
                                            </h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="Grid-cell--md-6 p-md-left-7">
                                {right.map(item => (
                                    <div className="Grid Grid-cell--xs-12 m-sm-bottom-6 m-md-bottom-5 flex-wrap-nowrap">
                                        <Img
                                         style={{ width: "39px", height: "39px" }}
                                         sizes={item.image.childImageSharp.resolutions}
                                        />
                                        <div className="Grid-cell--xs-9 Grid-cell--sm-10 text-darker-grey p-left-2">
                                            <h6 className="h6 text-dark-grey m-top-no">
                                                {item.title}
                                            </h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
