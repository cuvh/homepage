import React from "react";

import img from "assets/img/new-successful-resumes/famous/elon-musk/ornaments/illustration.jpg";

export default function LifeProject() {
	return (
		<section
		 id="life-project"
		 className="m-md-top-15 m-sm-bottom-3 m-md-bottom-7"
		>
			<div className="container">
				<div className="Grid full-width">
					<div className="Grid-cell--md-6 Grid-cell--xs-12 p-md-left-10">
						<article className="resume-article">
							<h2>Life projects</h2>
							<p>
								As he’s worked remotely most of his career, he
								needed a company that would allow for that.
								Another requirement was a company that’s known
								for exceptional customer support.{" "}
							</p>
						</article>
					</div>
					<div className="famous-resume--illustration-holder Grid-cell--md-6 Grid-cell--xs-12 m-sm-top-3 m-xs-top-5 m-md-top-6 p-md-left-10">
						<img
						 className="famous-resume--illustration"
						 src={img}
						 alt="Elon Musk illustration"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
