import React from "react";

import customizeImg from "assets/img/new-homepage/customize.png";
import monitorGif from "assets/img/new-homepage/monitor_gif.gif";

export default class Customize extends React.PureComponent {
	state = {
		monitor: false
	};

	componentDidMount() {
		const image = new Image();
		image.onload = () => this.setState({ monitor: true });
		image.src = monitorGif;
	}

	render() {
		return (
			<div className="container homepage-panel homepage-customize">
				<div className="animate-in Grid m-top-2 m-bottom-2">
					<div className="Grid Grid--alignCenter Grid-cell--xs-12 Grid-cell--lg-5 Grid-cell--sm-5">
						<div
						 className="vertical-center-m-negative text-center-xs"
						 style={{ width: "100%" }}
						>
							<h2 className="m-top-no">
								Building a resume shouldn’t be frustrating
							</h2>
							<p className="text-muted m-top-2 m-bottom-7">
								With Enhancv, editing your resume is easy.{" "}
								<br />Just focus on the content and let us take
								care of the formatting.
							</p>
							<a
							 data-track="event"
							 data-category="Homepage"
							 data-action="Click New Features"
							 data-label="See it in action with our free trial"
							 href="{{ urls.builder }}"
							 className="feature-link"
							>
								See it in action with our free trial
								&nbsp;&rarr;
							</a>
						</div>
					</div>
					<div className="Grid Grid--alignCenter Grid-cell--lg-6 Grid-cell--sm-6 Grid-cell--sm-offset-1 Grid-cell--lg-offset-1 relative">
						<div className="relative">
							<img
							 className="static-monitor"
							 src={customizeImg}
							/>

							{this.state.monitor ? (
								<img
								 className="gif-monitor"
								 src={monitorGif}
								/>
							) : null}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
