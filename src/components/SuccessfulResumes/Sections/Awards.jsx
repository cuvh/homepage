import React from "react";

import illustration from "assets/img/new-successful-resumes/famous/elon-musk/ornaments/illustration.jpg";

export default function Awards({ data }) {
	return (
		<section className="component m-sm-top-5 m-md-top-10 m-md-bottom-5">
			<div className="container">
				<h3 className="h3">Most proud of / Аwards</h3>
				<div className="Grid text-dark-grey m-sm-top-3 m-md-top-6">
					<div className="Grid-cell--md-4 Grid-cell--xs-12">
						<article className="resume-article">
							{data.map(item => (
								<div key={item.title}>
									<h6 className="text-dark-grey">
										{item.title}
									</h6>
									<p>{item.description}</p>
								</div>
							))}
						</article>
					</div>
					{/*<div className="Grid-cell--md-4 Grid-cell--xs-12 text-center m-sm-bottom-4">
						<img
						 src={illustration}
						 alt="Elon Musk illustration"
						/>
					</div>*/}
				</div>
			</div>
		</section>
	);
}
