import React from "react";
import classnames from "classnames";
import { chunk, slice, flow } from "lodash/fp";

const INSTAGRAM_FEED_URL =
	process.env.INSTAGRAM_FEED_URL || "https://s3.amazonaws.com/enhancv.com/instagramfeed.json";

const IMAGE_DIMENTION = 360;

export default class Images extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			images: [],
			perRow: this.calculatePerRow(),
		};

		this.onResize = this.resize.bind(this);
	}

	async componentDidMount() {
		const res = await fetch(INSTAGRAM_FEED_URL);
		const data = await res.json();
		this.setState({ images: data });

		window.addEventListener("resize", this.onResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.onResize);
	}

	resize() {
		this.setState({
			perRow: this.calculatePerRow(),
		});
	}

	calculatePerRow() {
		return Math.max(2, Math.ceil(document.body.offsetWidth / IMAGE_DIMENTION));
	}

	render() {
		const chunks = flow(chunk(this.state.perRow), slice(0, 3))(this.state.images);

		return (
			<div className="about-photos">
				{chunks.map((chunk, chunkIndex) => (
					<div
					 key={chunkIndex}
					 className={classnames("photos-wrapper", { "m-top-2": chunkIndex !== 0 })}
					 style={{ marginLeft: chunkIndex % 2 !== 0 ? -100 : -30 }}>
						{chunk.map((image, imageIndex) => (
							<img
							 key={imageIndex}
							 className="m-left-1 m-right-1"
							 style={{ width: IMAGE_DIMENTION, height: IMAGE_DIMENTION }}
							 src={image.standard_resolution.url}
							/>
						))}
					</div>
				))}
			</div>
		);
	}
}
