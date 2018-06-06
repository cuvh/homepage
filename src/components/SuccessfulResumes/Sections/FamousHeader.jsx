import React from "react";

import headerImg from "assets/img/new-successful-resumes/famous/elon-musk/header.jpg";

export default function FamousHeader() {
	return (
		<section
		 className="famous-resume--head"
		 style={{ backgroundImage: `url(${headerImg})` }}
		>
			<div className="container">
				<div className="resumes--content Grid-cell--lg-6 Grid-cell--md-5 Grid-cell--xs-12">
					<div className="text text-dark-grey text-center-xs text-center-sm">
						<h1 className="h1 text-md-white">Elon Musk</h1>
						<div className="m-xs-top-1 m-md-top-3 text-darker-grey">
							<h5 className="h5 text-md-white-smoke m-bottom-3">
								What ties all of his ventures together is his
								personality, values, and passions.
							</h5>
							<p className="p-big text-md-white-smoke">
								When you've founded companies in fields as
								diverse as car manufacturing, space exploration,
								and online payments, it's hard to show it all on
								one cohesive resume. But Musk's shows how it's
								possible.
							</p>
						</div>
						<a
						 target="_blank"
						 href="#"
						 className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
						>
							See her resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
