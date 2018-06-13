import React from "react";
import Img from "gatsby-image";

import strugleImg from "assets/img/new-successful-resumes/placeholders/struggles.jpg";

export default function Strugles({ section, data }) {
    return (
        <section
         id={section}
         className="component--thumbs-list m-sm-top-5 m-md-top-10 m-md-bottom-5"
        >
            <div className="container">
                <div className="Grid text-dark-grey Grid-cell--md-offset-2">
                    <div className="Grid-cell--md-9 Grid-cell--xs-12">
                        <h3 className="h3 m-sm-bottom-3 m-md-bottom-6">
                            Struggles I learned from
                        </h3>
                        {data.map(item => (
                            <div
                             key={item.title}
                             className="Grid Grid-cell--xs-12 m-sm-bottom-6 m-md-bottom-5 flex-wrap-nowrap"
                            >
                                <div className="component--thumbs-holder thumb-order-sm-2">
                                    <Img
                                     style={{ width: "78px", height: "78px" }}
                                     sizes={
                                        item.image.childImageSharp.resolutions
                                     }
                                    />
                                </div>
                                <div className="Grid-cell--xs-11 Grid-cell--sm-10 text-darker-grey p-md-left-2">
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
        </section>
    );
}
