import React from "react";

export default function SubscribeNoImage() {
    return (
        <section className="component--subscription Grid Grid--justifyCenter p-sm-top-6 p-md-top-9 p-sm-bottom-7 text-center m-top-8">
            <div className="component--subscription-form Grid-cell--md-7 Grid-cell--sm-10 Grid-cell--xs-12">
                <h3 className="h2 m-sm-bottom-1 m-md-bottom-2">
                    Get more inspiration & free resources
                </h3>
                <p className="m-sm-bottom-4 m-md-bottom-4 p-md-left-9 p-md-right-9">
                    No spam, just information that will help you build a resume
                    that makes you feel relevant and well represented.
                </p>
                <form
                 id="subscribe-form"
                 className="Grid Grid--justifyCenter"
                >
                    <div className="component--subscription-form Grid Grid-cell--md-8">
                        <input
                         type="text"
                         className="component--subscription-field form-control Grid-cell--md-8 Grid-cell--xs-12 m-sm-bottom-2"
                         id="subscribe-email"
                         placeholder="Write your email address"
                        />
                        <button
                         type="submit"
                         id="subscribe-btn"
                         className="component--subscription-button btn btn-big btn-primary cta-button Grid-cell--md-4"
                         data-track="event"
                         data-category="Successful Resumes"
                         data-action="Newsletter Subscription"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
