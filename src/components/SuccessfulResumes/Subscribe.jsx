import React from "react";

import subscriptionImg from "assets/img/new-successful-resumes/subscription/1.png";

export default function Subscribe() {
	return (
		<section className="component--subscription Grid p-top-6 p-sm-bottom-7 text-sm-center">
			<div className="component--subscription-image Grid-cell--md-5 Grid-cell--sm-10 Grid-cell--xs-12">
				<img
				 src={subscriptionImg}
				 alt="Subscription Illustration"
				/>
			</div>
			<div className="component--subscription-form Grid-cell--md-5 Grid-cell--sm-10 Grid-cell--xs-12">
				<h3 className="h2 m-sm-bottom-1 m-md-bottom-2">
					Get more inspiration
				</h3>
				<p className="m-sm-bottom-4 m-md-bottom-4">
					No spam, just information that will help you build a resume
					that makes you feel relevant and well represented.
				</p>
				<form id="subscribe-form">
					<div className="component--subscription-form Grid">
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
