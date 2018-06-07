import React from "react";
import Img from "gatsby-image";

export default function FamousHeader({
	name,
	cover,
	description,
	smallDescription
}) {
	return (
		<section className="famous-resume--head relative">
			<Img
			 sizes={cover.childImageSharp.sizes}
			 style={{
				position: "absolute",
				left: 0,
				top: 0,
				width: "100%",
				height: "100%"
			 }}
			/>

			<div className="container">
				<div className="resumes--content Grid-cell--lg-6 Grid-cell--md-5 Grid-cell--xs-12">
					<div className="text text-dark-grey text-center-xs text-center-sm">
						<h1 className="h1 text-md-white">{name}</h1>
						<div className="m-xs-top-1 m-md-top-3 text-darker-grey">
							<h5 className="h5 text-md-white-smoke m-bottom-3">
								{smallDescription}
							</h5>
							<p className="p-big text-md-white-smoke">
								{description}
							</p>
						</div>
						<a
						 target="_blank"
						 href="#"
						 className="btn btn-big btn-primary m-xs-top-2 m-md-top-6"
						>
							See the resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
