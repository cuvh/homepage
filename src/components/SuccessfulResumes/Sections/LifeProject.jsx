import React from "react";
import Img from "components/Common/Img";

import img from "assets/img/new-successful-resumes/famous/elon-musk/ornaments/illustration.jpg";

export default function LifeProject({ image, description, section, ...rest }) {
    return (
        <section
         id={section}
         className="m-md-top-15 m-sm-bottom-3 m-md-bottom-7">
            <div className="container">
                <div className="Grid full-width">
                    <div className="Grid-cell--md-6 Grid-cell--xs-12 p-md-left-10">
                        <article className="resume-article">
                            <h2>Life projects</h2>
                            <p>{description}</p>
                        </article>
                    </div>
                    <div className="famous-resume--illustration-holder Grid-cell--md-6 Grid-cell--xs-12 p-md-left-10">
                        <Img
                         style={{ width: 300 }}
                         className="famous-resume--illustration"
                         sizes={image.childImageSharp.sizes}
                         alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
