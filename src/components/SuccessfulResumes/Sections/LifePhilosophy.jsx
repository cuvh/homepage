import React from "react";

import quotesImg from "assets/img/new-successful-resumes/elements/component-testimonial-quotes.png";

export default function LifePhilosophy() {
    return (
        <section className="component--testimonial m-sm-top-5 m-md-top-10 m-md-bottom-5 p-sm-bottom-4 p-md-bottom-4">
            <div className="container text-center">
                <img
                 className="m-sm-bottom-3 m-md-bottom-3"
                 src={quotesImg}
                 alt=""
                />
                <blockquote className="m-sm-bottom-4 m-md-bottom-3 p-sm-left-3 p-sm-right-3 p-md-left-14 p-md-right-14">
                    Brand is just a perception, and perception will match reality over time.
                    Sometimes it will be ahead, other times it will be behind. But brand is simply a
                    collective impression some have about a product.
                </blockquote>
                <p className="component--testimonial-autor text-white-smoke">
                    ELON MUSK’S Life Philosophy
                </p>
            </div>
        </section>
    );
}
