import React from "react";
import Img from "gatsby-image";
import Subscribe from "utils/Subscribe";

export default class SubscribePanel extends React.PureComponent {
	state = {
		sending: false,
		subscribed: false,
		email: ""
	};

	async subscribe(event) {
		event.preventDefault();

		this.setState({
			sending: true,
			failed: false
		});

		try {
			await Subscribe(this.state.email);
			this.setState({
				subscribed: true,
				sending: false
			});
		} catch (e) {
			this.setState({
				failed: true,
				sending: false
			});
		}
	}

	render() {
		const { image } = this.props;

		return (
			<section className="component--subscription Grid p-top-6 p-sm-bottom-7 text-sm-center">
				<div className="component--subscription-image Grid-cell--md-5 Grid-cell--sm-10 Grid-cell--xs-12">
					<Img
					 resolutions={image.childImageSharp.resolutions}
					 alt="Subscription Illustration"
					/>
				</div>
				<div className="component--subscription-form Grid-cell--md-5 Grid-cell--sm-10 Grid-cell--xs-12">
					<h3 className="h2 m-sm-bottom-1 m-md-bottom-2">
						Get more inspiration
					</h3>
					<p className="m-sm-bottom-4 m-md-bottom-4">
						No spam, just information that will help you build a
						resume that makes you feel relevant and well
						represented.
					</p>
					{!this.state.subscribed ? (
						<form onSubmit={event => this.subscribe(event)}>
							<div className="component--subscription-form Grid">
								<input
								 type="text"
								 className="component--subscription-field form-control Grid-cell--md-8 Grid-cell--xs-12 m-sm-bottom-2"
								 value={this.state.email}
								 onChange={event =>
									this.setState({
										email: event.target.value
									})}
								 placeholder="Write your email address"
								/>
								<button
								 disabled={this.state.sending}
								 type="submit"
								 className="component--subscription-button btn btn-primary cta-button Grid-cell--md-4"
								>
									{this.state.sending
										? "Subscribing.."
										: "Subscribe"}
								</button>
							</div>
							{this.state.failed ? (
								<div
								 className="m-top-1"
								 style={{ color: "red" }}
								>
									Error while subscribing! Make sure your
									email is correct
								</div>
							) : null}
						</form>
					) : (
						<div className="text-highlight-purple">
							You have successfully subscribed!
						</div>
					)}
				</div>
			</section>
		);
	}
}
