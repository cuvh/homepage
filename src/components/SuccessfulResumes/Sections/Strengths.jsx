import React from "react";
import Img from "components/Common/Img";

import strengthImg from "assets/img/new-successful-resumes/famous/elon-musk/ornaments/strenghts.jpg";

export default function Strengths({ section, description, image, data }) {
    return (
        <section
         id={section}
         className="m-md-bottom-13">
            <div className="container">
                <div className="Grid full-width">
                    <div className="Grid-cell--md-6 Grid-cell--xs-12 p-md-left-10">
                        <article className="resume-article">
                            <h2>Strenghts</h2>
                            <p>{description}</p>

                            {data.map((item, index) => (
                                <div key={index}>
                                    <h6>{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </article>
                    </div>
                    <div className="famous-resume--illustration-holder Grid-cell--md-6 Grid-cell--xs-12 m-sm-top-3 m-xs-top-5 m-md-top-6 p-md-left-10 m-bottom-7 Grid--selfCenter">
                        <Img
                         width="595"
                         sizes={image.childImageSharp.sizes}
                         alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
