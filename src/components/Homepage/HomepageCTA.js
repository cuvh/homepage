import React from "react";

export default function HomepageCTA() {
	return (
		<div className="homepage-cta">
			<div className="container">
				<div className="Grid">
					<div className="Grid Grid-cell Grid--alignCenter text-center">
						<div className="Grid-cell">
							<h2 className="m-top-no">
								Not happy with your current resume?
							</h2>
							<a
							 href="https://app.enhancv.com"
							 data-track="event"
							 data-category="Homepage"
							 data-action="Click Signup"
							 data-label="Create Your Resume"
							 className="btn btn-default btn-lg m-top-2"
							>
								Try free for 14 days
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
