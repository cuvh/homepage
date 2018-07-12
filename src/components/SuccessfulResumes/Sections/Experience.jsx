import React from "react";
import Img from "components/Common/Img";

export default function Experience({ data }) {
    return (
        <section className="m-sm-bottom-4 m-md-bottom-13">
            <div className="container">
                <div className="famous-resume--boxes">
                    <div className="famous-resume--boxes-wrap Grid">
                        {data.map((item, index) => (
                            <div
                             key={index}
                             className="Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1">
                                <div className="famous-resume--box">
                                    {item.image ? (
                                        <Img
                                         resolutions={item.image.childImageSharp.resolutions}
                                         style={{ height: "36px" }}
                                         alt={`${item.title} logo`}
                                        />
                                    ) : (
                                        <h4>{item.title}</h4>
                                    )}
                                    <div className="famous-resume--work-exp m-md-bottom-2 text-gray-1">
                                        {item.position ? <div>{item.position}</div> : null}
                                        {item.startDate && item.endDate ? (
                                            <span>
                                                {item.startDate}-{item.endDate}
                                            </span>
                                        ) : null}
                                        &nbsp; {item.location}
                                    </div>
                                    <p className="text-gray-3">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
