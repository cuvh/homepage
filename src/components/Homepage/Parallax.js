import React from "react";

import parallaxImgOne from "assets/img/new-homepage/standout-01-img3-1.png";
import parallaxImgTwo from "assets/img/new-homepage/standout-01-img3-2.png";
import parallaxImgThree from "assets/img/new-homepage/standout-01-img3-3.png";

import browserWidth from "utils/browserWidth";
import isTouchDevice from "utils/isTouchDevice";

export default class Parallax extends React.PureComponent {
	constructor(props) {
		super(props);

		this.onMouseMove = this.MouseMove.bind(this);
	}

	state = {
		firstImage: { left: 0, top: 0 },
		secondImage: { left: 0, top: 0 }
	};

	componentDidMount() {
		document.addEventListener("mousemove", this.onMouseMove);
	}

	componentWillUnmount() {
		document.removeEventListener("mousemove", this.onMouseMove);
	}

	MouseMove(e) {
		if (browserWidth() < 768 || isTouchDevice()) {
			return;
		}

		var x = e.clientX;
		var y = e.clientY;

		var pageWidth = browserWidth();

		var margin = pageWidth > 768 && pageWidth < 1200 ? 90 : 0;

		this.setState({
			firstImage: {
				left: -(pageWidth / 40 / 2) + x / 40,
				top: margin + y / 55
			},

			secondImage: {
				left: -(pageWidth / 15 / 2) + x / 15,
				top: margin + y / 35
			}
		});
	}

	render() {
		return (
			<div className="container homepage-panel second">
				<div className="animate-in Grid m-top-2 m-bottom-2">
					<div className="Grid Grid--alignCenter Grid-cell--lg-4 Grid-cell--sm-4">
						<div className="vertical-center-m-negative text-center-xs">
							<h2 className="m-top-no">
								A resume that simply stands out
							</h2>
							<p className="text-muted m-top-2 m-bottom-7">
								90% of applicants use a word-editing software
								and traditional templates. <br />Don’t rely on a
								bland resume - get the recruiter’s attention
								with a visually appealing format.
							</p>
							<a
							 data-track="event"
							 data-category="Homepage"
							 data-action="Click New Features"
							 data-label="Build a modern resume"
							 href="{{ urls.builder }}"
							 className="feature-link"
							>
								Build a modern resume &nbsp;&rarr;
							</a>
						</div>
					</div>
					<div className="Grid Grid--alignCenter Grid-cell--lg-7 Grid-cell--sm-7 relative homepage-standout Grid-cell--sm-offset-1 Grid-cell--lg-offset-1">
						<div className="inline-block">
							<img
							 id="parallax-1"
							 className="bg-image"
							 style={{
								left: this.state.firstImage.left,
								top: this.state.firstImage.top
							 }}
							 src={parallaxImgOne}
							/>
							<img
							 id="parallax-2"
							 className="bg-image"
							 style={{
								left: this.state.secondImage.left,
								top: this.state.secondImage.top
							 }}
							 src={parallaxImgTwo}
							/>
							<img
							 id="parallax-3"
							 className="relative"
							 src={parallaxImgThree}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
