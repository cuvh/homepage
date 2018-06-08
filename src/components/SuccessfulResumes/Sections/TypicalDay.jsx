import React from "react";
import Img from "gatsby-image";

export default function TypicalDay({ image, section, data }) {
    return (
        <section
         id={section}
         className="famous-resume--person-time Grid m-md-bottom-3 m-sm-bottom-3 p-sm-3"
        >
            <div className="Grid-cell--md-6 Grid-cell--sm-10 Grid-cell--xs-12 text-center">
                <Img
                 width="700"
                 className="famous-resume--person-time-illustration"
                 sizes={image.childImageSharp.sizes}
                 alt="Elon Musk Day Timeline"
                />
                <p className="text-white-smoke text-center full-width">
                    Photo attribution: Cover Image by James Stringer, REUTERS
                </p>
            </div>
            <div className="Grid-cell--md-5 Grid-cell--lg-4 Grid-cell--sm-10 Grid-cell--xs-12 p-md-left-13 p-md-top-10 text-darker-grey">
                <div className="m-md-bottom-6 m-md-bottom-6 m-sm-bottom-4">
                    <h2 className="h2 m-md-bottom-6 m-sm-bottom-3">
                        His typical day
                    </h2>
                    {data.map(item => (
                        <div key={item.title}>
                            <h6>
                                <span
                                 className="bullet mobile-hide"
                                 style={{
                                    backgroundColor: item.backgroundColor
                                 }}
                                />{" "}
                                {item.title}
                            </h6>

                            {item.description ? (
                                <p>
                                    Gave three engagement rings to his wife
                                    Tallulah, one of them designed by him.
                                </p>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
