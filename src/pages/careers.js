import React from "react";
import classnames from "classnames";
import Helmet from "react-helmet";

import DefaultLayout from "layouts/DefaultLayout";

// metaImage: "/img/career/share-image.jpg"

import vouldjeffImage from "assets/img/about/member/dimitar-vouldjeff@2x.jpg";
import irinaImage from "assets/img/about/member/irina-lilova@2x.jpg";
import volenImage from "assets/img/about/member/volen-valkov@2x.jpg";
import colmImage from "assets/img/about/member/colm-roche@2x.jpg";
import ginovskiImage from "assets/img/about/member/aleksander-ginovski@2x.jpg";
import vassyImage from "assets/img/about/member/vassilena-valchanova@2x.jpg";

const Faces = [
    vouldjeffImage,
    irinaImage,
    volenImage,
    colmImage,
    ginovskiImage,
    vassyImage
];
const SHOW_ON_MOBILE = 3;

export default function Careers() {
    return (
        <DefaultLayout>
            <div className="career-page p-bottom-7">
                <Helmet
                 title={"Careers at Enhancv"}
                 meta={[
                    {
                        name: "description",
                        content: "Join our team of superheroes"
                    }
                 ]}
                />
                <div className="career-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 col-sm-12 text-center">
                                <h3>
                                    We are on a mission to help talented people
                                    believe in themselves and unleash their full
                                    potential.
                                </h3>
                            </div>
                        </div>
                        <div>
                            <a
                             href="#list"
                             className="scroll-down"
                            >
                                <i className="icon-angle-down" />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                 className="jobs-list"
                 id="list"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <h4 className="h5">Current job openings</h4>
                            </div>
                            <div className="col-md-10 col-md-offset-1">
                                <ul className="list-group">
                                    <li className="list-group-item row">
                                        <div className="full-width secondary-text text-center">
                                            There are currently no positions
                                            available.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-8 col-md-offset-2">
                                <div className="info-group">
                                    <div className="text-center main-text">
                                        Submit a general application
                                    </div>
                                    <div className="secondary-text">
                                        If you see yourself as a part of our
                                        team but there's currently no job
                                        opening that matches your profile, reach
                                        out to us anyway: our email is{" "}
                                        <a href="mailto:work@enhancv.com">
                                            <strong>work@enhancv.com</strong>
                                        </a>. Our two offices are centrally
                                        located in Sofia and Dublin, and we're
                                        always keen to meet interesting people!
                                    </div>
                                </div>
                                <div className="info-group">
                                    <div className="text-center main-text">
                                        Our team
                                    </div>
                                    <div className="text-center">
                                        {Faces.map((image, i) => (
                                            <div
                                             className={classnames(
                                                "member-thumb ",
                                                {
                                                    "hide-xs-min":
                                                        i > SHOW_ON_MOBILE - 1
                                                }
                                             )}
                                             style={{
                                                backgroundImage: `url(${image})`
                                             }}
                                            />
                                        ))}
                                    </div>
                                    <div className="secondary-text">
                                        Achievers, daydreamers, believers in the
                                        mankind – but also, ving tsun masters,
                                        yoga pros, book lovers, party animals.
                                        We know it takes all kinds to make a
                                        world, and we truly embrace that.
                                    </div>
                                    <div className="text-center">
                                        <a
                                         href="/about.html"
                                         className="btn btn-muted"
                                        >
                                            See the rest of the team
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10 col-md-offset-1 text-center">
                                <div className="row">
                                    <div className="info-group no-top">
                                        <div className="col-xs-12 text-center main-text">
                                            Why join Enhancv
                                        </div>
                                    </div>
                                </div>
                                BENEFITS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
