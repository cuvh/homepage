import React from "react";

import strengthImg from "assets/img/new-successful-resumes/famous/elon-musk/ornaments/strenghts.jpg";

export default function Strengths() {
	return (
		<section
		 id="strenghts"
		 className="m-md-bottom-13"
		>
			<div className="container">
				<div className="Grid full-width">
					<div className="Grid-cell--md-6 Grid-cell--xs-12 p-md-left-10">
						<article className="resume-article">
							<h2>Strenghts</h2>
							<p>
								He transferred to the University of Pennsylvania
								two years later, where he received an economics
								degree from the Wharton School and a degree in
								physics from the College of Arts and Sciences.{" "}
							</p>

							<h6>Enthusiastic learner</h6>
							<p>
								Got the full 6month Commodore manual in 3 days,
								made a game, sold it for $500 at age 12.
							</p>

							<h6>Excellent at budget management</h6>
							<p>
								A private American aerospace manufacturer and
								space transportation services company
								headquartered in Hawthorne, CA.
							</p>

							<h6>Lord of the rings</h6>
							<p>
								Gave three engagement rings to his wife
								Tallulah, one of them designed by him.
							</p>
						</article>
					</div>
					<div className="famous-resume--illustration-holder Grid-cell--md-6 Grid-cell--xs-12 m-sm-top-3 m-xs-top-5 m-md-top-6 p-md-left-10">
						<img
						 width="595"
						 src={strengthImg}
						 alt="Elon Musk"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
