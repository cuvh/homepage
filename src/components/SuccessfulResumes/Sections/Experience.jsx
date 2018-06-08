import React from "react";

import spaceX from "assets/img/new-successful-resumes/famous/elon-musk/spacex-logo.jpg";
import tesla from "assets/img/new-successful-resumes/famous/elon-musk/tesla-logo.jpg";
import neuraLink from "assets/img/new-successful-resumes/famous/elon-musk/neuralink-logo.jpg";

export default function Experience({ data }) {
    console.log(data);
    return (
        <section className="m-sm-bottom-4 m-md-bottom-13">
            <div className="container">
                <div className="famous-resume--boxes">
                    <div className="famous-resume--boxes-wrap Grid">
                        {data.map(item => (
                            <div className="Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1">
                                <div className="famous-resume--box">
                                    <img
                                     width="304"
                                     src={spaceX}
                                     alt="SpaceX Logo"
                                    />
                                    <div className="famous-resume--work-exp m-md-bottom-2 text-white-smoke">
                                        Founder, CEO, Lead designer <br />
                                        {item.startDate}-{item.endDate}
                                        &nbsp; {item.location}
                                    </div>
                                    <p className="text-dark-grey">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
