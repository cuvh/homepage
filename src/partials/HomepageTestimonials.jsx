import React from "react";

export default function HomepageTestimonials({ image, text, title }) {
    return (
        <div className="Grid">
            <div className="Grid Grid--alignCenter Grid-cell--xs-12 Grid-cell--sm-3 text-center Grid-cell--sm-offset-1 Grid-cell--lg-offset-1">
                <img
                 className="testimonial-image m-bottom-2"
                 src={`/img/new-homepage/testimonials/${image}@2x.png`}
                />
            </div>
            <div className="Grid testimonial-valign Grid-cell--xs-12 Grid-cell--sm-6 Grid-cell--sm-offset-1 Grid-cell--lg-offset-1">
                <div className="m-left-1 text-center-xs">
                    <h2 className="m-top-no hidden-xs hidden-sm hidden-md">
                        “{text}”
                    </h2>
                    <h3 className="m-top-no hidden-lg">“{text}”</h3>
                    <p className="text-muted m-top-2 text-small">{title}</p>
                </div>
            </div>
        </div>
    );
}
