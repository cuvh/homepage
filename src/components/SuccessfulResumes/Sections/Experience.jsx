import React from "react";

import spaceX from "assets/img/new-successful-resumes/famous/elon-musk/spacex-logo.jpg";
import tesla from "assets/img/new-successful-resumes/famous/elon-musk/tesla-logo.jpg";
import neuraLink from "assets/img/new-successful-resumes/famous/elon-musk/neuralink-logo.jpg";

export default function Experience() {
    return (
        <section className="m-sm-bottom-4 m-md-bottom-13">
            <div className="container">
                <div className="famous-resume--boxes">
                    <div className="famous-resume--boxes-wrap Grid">
                        <div className="Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1">
                            <div className="famous-resume--box">
                                <img
                                 width="304"
                                 src={spaceX}
                                 alt="SpaceX Logo"
                                />
                                <div className="famous-resume--work-exp m-md-bottom-2 text-white-smoke">
                                    Founder, CEO, Lead designer <br />2012-2019
                                    &nbsp; California, USA
                                </div>
                                <p className="text-dark-grey">
                                    Space Exploration Technologies Corp., doing
                                    business as SpaceX, is a private American
                                    aerospace manufacturer and space
                                    transportation services company
                                    headquartered in Hawthorne, CA.
                                </p>
                            </div>
                        </div>
                        <div className="Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1">
                            <div className="famous-resume--box">
                                <img
                                 width="304"
                                 src={tesla}
                                 alt="SpaceX Logo"
                                />
                                <div className="famous-resume--work-exp m-md-bottom-2 text-white-smoke">
                                    Co-founder, CEO, Product architect <br />2012-2019
                                    &nbsp; California, USA
                                </div>
                                <p className="text-dark-grey">
                                    Tesla, Inc. is an American company that
                                    specializes in electric vehicles, energy
                                    storage and solar panel manufacturing based
                                    in Palo Alto, California.
                                </p>
                            </div>
                        </div>
                        <div className="Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-1">
                            <div className="famous-resume--box">
                                <img
                                 width="304"
                                 src={neuraLink}
                                 alt="SpaceX Logo"
                                />
                                <div className="famous-resume--work-exp m-md-bottom-2 text-white-smoke">
                                    Co-founder, CEO <br />2012-2019 &nbsp;
                                    California, USA
                                </div>
                                <p className="text-dark-grey">
                                    Neuralink is an American neurotechnology
                                    company founded by Elon Musk and eight
                                    others, reported to be developing
                                    implantable interfaces.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
