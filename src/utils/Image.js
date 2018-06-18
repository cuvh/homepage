import React from "react";

import customizeImg from "assets/img/new-homepage/customize.png";

export default class Img extends React.PureComponent {
	state = {
		loaded: false,
	};

	load() {
		const x = new Image();
		x.onload = () => {
			this.setState({ loaded: true });
		};
		x.src = this.props.src;
	}

	componentDidMount() {
		if (!this.props.delay) {
			return this.load();
		}

		setTimeout(() => this.load(), this.props.delay);
	}

	render() {
		if (!this.state.loaded && this.props.hiddenOnLoading) {
			return null;
		}

		if (!this.state.loaded) {
			return (
				<div
				 style={{
					display: "inline-block",
					minHeight: this.props.minHeight,
				 }}
				/>
			);
		}

		let { style, hiddenOnLoading, delay, ...rest } = this.props;

		style = style || {};

		return (
			<img
			 style={{ minHeight: this.props.minHeight, ...style }}
			 {...rest}
			/>
		);
	}
}
