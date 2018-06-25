import React from "react";
import Img from "components/Common/Img";

export default function Awards({ image, section, data, altText = "Person feeling proud" }) {
    let left = data;
    let right = data.splice(0, Math.floor(data.length / 2));

    return (
        <section
         id={section}
         className="component m-sm-top-5 m-md-top-10 m-md-bottom-5">
            <div className="container">
                <h3 className="h3">Most proud of</h3>
                <div className="Grid text-dark-grey m-sm-top-3 m-md-top-6">
                    <div className="Grid-cell--md-4 Grid-cell--xs-12">
                        <article className="resume-article">
                            {left.map(item => (
                                <div key={item.title}>
                                    <h6 className="text-dark-grey">{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </article>
                    </div>
                    <div className="Grid-cell--md-4 Grid-cell--xs-12 text-center m-sm-bottom-4 m-bottom-7 Grid--selfCenter">
                        {image ? (
                            <Img
                             style={{ maxWidth: 266, margin: "0 auto" }}
                             sizes={image.childImageSharp.sizes}
                             alt={altText}
                            />
                        ) : null}
                    </div>
                    <div className="Grid-cell--md-4 Grid-cell--xs-12">
                        <article className="resume-article">
                            {right.map(item => (
                                <div key={item.title}>
                                    <h6 className="text-dark-grey">{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
