import React from "react";

import illustration from "assets/img/new-successful-resumes/famous/elon-musk/ornaments/illustration.jpg";

export default function Awards() {
	return (
		<section className="component m-sm-top-5 m-md-top-10 m-md-bottom-5">
			<div className="container">
				<h3 className="h3">Most proud of / Аwards</h3>
				<div className="Grid text-dark-grey m-sm-top-3 m-md-top-6">
					<div className="Grid-cell--md-4 Grid-cell--xs-12">
						<article className="resume-article">
							<h6 className="text-dark-grey">
								Becoming an autodidact
							</h6>
							<p>
								Gave three engagement rings to his wife
								Tallulah, one of them designed by him.
							</p>

							<h6 className="text-dark-grey">Preserving</h6>
							<p>
								Gave three engagement rings to his wife
								Tallulah, one of them designed by him.
							</p>
						</article>
					</div>
					<div className="Grid-cell--md-4 Grid-cell--xs-12 text-center m-sm-bottom-4">
						<img
						 src={illustration}
						 alt="Elon Musk illustration"
						/>
					</div>
					<div className="Grid-cell--md-4 Grid-cell--xs-12">
						<article className="resume-article">
							<h6 className="h6 text-dark-grey">Saving NeXT</h6>
							<p>
								Gave three engagement rings to his wife
								Tallulah, one of them designed by him.
							</p>

							<h6 className="h6 text-dark-grey">Preserving</h6>
							<p>
								Gave three engagement rings to his wife
								Tallulah, one of them designed by him.
							</p>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}
