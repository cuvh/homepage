import React from "react";

export default function Menu({ sections }) {
	return (
		<section className="famous-resume--navbar m-sm-bottom-6">
			<nav className="container">
				<ul className="Grid text-center-xs text-center-sm">
					{sections.map(section => (
						<li
						 key={section}
						 className="Grid-cell--md-2 Grid-cell--xs-12 m-md-right-5"
						>
							<a href={`#${section}`}>
								{section.replace(/([A-Z])/g, " $1")}
							</a>
						</li>
					))}

					<li className="Grid-cell--md-2 Grid-cell--xs-12 m-md-right-5">
						<a href="#famous-resume">Resume</a>
					</li>
				</ul>
			</nav>
		</section>
	);
}
