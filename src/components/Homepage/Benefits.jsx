import React from "react";

import editIcon from "assets/img/new-homepage/icons/edit.svg";
import learningcurveIcon from "assets/img/new-homepage/icons/learningcurve.svg";
import balanceIcon from "assets/img/new-homepage/icons/balance.svg";
import memorableIcon from "assets/img/new-homepage/icons/memorable.svg";

const BENEFITS = [
	{
		id: "1",
		title: "Simple editing",
		description:
			"Make changes straight on the page and see a preview of the resume without downloading it.",
		icon: editIcon
	},
	{
		id: "2",
		title: "No learning curve",
		description:
			"Each step of building your resume is so natural, you don’t have to figure things out on your own.",
		icon: learningcurveIcon
	},
	{
		id: "3",
		title: "Balance the personal and the professional",
		description:
			"Showcase personal strengths and key drivers in addition to your skills to demonstrate culture fit.",
		icon: balanceIcon
	},
	{
		id: "4",
		title: "A memorable resume",
		description:
			"The distinct visual style will make people remember you and the key things about you, even in a pile of resumes.",
		icon: memorableIcon
	}
];

export default function Benefits() {
	return (
		<div className="homepage-benefits">
			<div className="container">
				<div className="benefits-spacer Grid">
					{BENEFITS.map((benefit, index) => (
						<div
						 key={index}
						 id={`benefits-item-${benefit.id}`}
						 className="Grid-cell--md-3 Grid-cell--sm-6 Grid-cell--xs-12 m-top-4 text-center benefits-item"
						>
							<div>
								<img src={benefit.icon} />
							</div>
							<h5 className="m-top-3 m-bottom-2">
								{benefit.title}
							</h5>
							<p className="text-muted">{benefit.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
