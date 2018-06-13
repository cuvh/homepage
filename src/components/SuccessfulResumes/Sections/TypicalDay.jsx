import React from "react";
import Img from "gatsby-image";

export default function TypicalDay({ image, section, description, data }) {
    return (
        <section
         id={section}
         className="famous-resume--person-time m-md-bottom-3 m-sm-bottom-3 p-sm-3">
            <div className="container">
                <div className="Grid">
                    <div
                     className="Grid-cell--md-6 Grid-cell--sm-10 Grid-cell--xs-12 text-center"
                     style={{
                        margin: "auto 0",
                     }}>
                        <Img
                         style={{
                            width: 420,
                            margin: "0 auto",
                         }}
                         className="famous-resume--person-time-illustration"
                         sizes={image.childImageSharp.sizes}
                         alt="Elon Musk Day Timeline"
                        />
                    </div>
                    <div className="Grid-cell--md-5 Grid-cell--lg-5 Grid-cell--sm-10 Grid-cell--xs-12 p-md-left-13 text-darker-grey">
                        <div className="m-md-bottom-6 m-md-bottom-6 m-sm-bottom-4">
                            <h2 className="h2 m-md-bottom-6 m-sm-bottom-3">{description}</h2>
                            {data.map(item => (
                                <div key={item.title}>
                                    <div
                                     style={{
                                        display: "flex",
                                     }}
                                     className="m-bottom-1">
                                        <span
                                         className="bullet m-top-2"
                                         style={{
                                            backgroundColor: item.backgroundColor,
                                         }}
                                        />{" "}
                                        <h6
                                         style={{
                                            lineHeight: 1.4,
                                         }}>
                                            {item.title}
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
