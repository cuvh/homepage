import React from "react";
import Modal from "components/Modal";

export default class Member extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			modalShowed: false,
		};
	}

	onClickShowModal() {
		this.setState({
			modalShowed: true,
		});
	}

	onClickHiddenModal() {
		this.setState({
			modalShowed: false,
		});
	}

	render() {
		return (
			<div className="member center-block bottom-md">
				<div
				 className="member-thumb"
				 style={{ backgroundImage: `url(${this.props.image})` }}
				/>
				<a
				 className="member-content text-center"
				 data-toggle="modal"
				 data-track="event"
				 data-category="About"
				 data-action="Click Team Member"
				 data-label={this.props.name}
				 onClick={() => this.onClickShowModal()}>
					<div className="member-text">
						<p className="member-title bottom-xs">{this.props.name}</p>
						<p className="no-margin text-muted">{this.props.position}</p>
					</div>
				</a>

				<Modal modalShowed={this.state.modalShowed}>
					<div
					 tabIndex="-1"
					 className={this.state.modalShowed ? "modal in" : "modal fade"}>
						<div
						 id={`${this.props.id}`}
						 className="modal-dialog member-modal">
							<div className="modal-content">
								<div className="embed-responsive embed-responsive-member">
									<div
									 style={{
										backgroundImage: `url(${this.props.image})`,
									 }}
									 className="embed-responsive-item"
									/>
								</div>
								<button
								 type="button"
								 className="close"
								 data-dismiss="modal"
								 onClick={() => this.onClickHiddenModal()}>
									<span aria-hidden="true">&times;</span>
								</button>

								<div className="modal-body">
									<h5 className="h5">{this.props.name}</h5>

									<p className="text-primary">{this.props.position}</p>

									{this.props.description ? (
										<p>{this.props.description}</p>
									) : null}

									<div className="top-sm">
										{this.props.pdf ? (
											<a
											 href={`/img/about/member/${this.props.pdf}`}
											 className="btn btn-default right-xs"
											 target="_blank">
												View Resume
											</a>
										) : null}

										{this.props.website ? (
											<a
											 href={this.props.website}
											 className="btn btn-link btn-member-icon"
											 target="_blank">
												<i className="icon-link" />
											</a>
										) : null}

										{this.props.linkedin ? (
											<a
											 href={`https://www.linkedin.com/in/${this.props
												.linkedin}`}
											 className="btn btn-link btn-member-icon"
											 target="_blank">
												<i className="icon-linkedin-alt" />
											</a>
										) : null}

										{this.props.medium ? (
											<a
											 href={`https://medium.com/@${this.props.medium}`}
											 className="btn btn-link btn-member-icon"
											 target="_blank">
												<i className="icon-social-medium" />
											</a>
										) : null}

										{this.props.dribbble ? (
											<a
											 href={`https://dribbble.com/${this.props.dribbble}`}
											 className="btn btn-link btn-member-icon"
											 target="_blank">
												<i className="icon-dribbble" />
											</a>
										) : null}

										{this.props.github ? (
											<a
											 href={`https://github.com/${this.props.github}`}
											 className="btn btn-link btn-member-icon"
											 target="_blank">
												<i className="icon-github-alt" />
											</a>
										) : null}

										{this.props.twitter ? (
											<a
											 href={`https://twitter.com/${this.props.twitter}`}
											 className="btn btn-link btn-member-icon"
											 target="_blank">
												<i className="icon-twitter" />
											</a>
										) : null}

										{this.props.facebook ? (
											<a
											 href={`https://facebook.com/${this.props.facebook}`}
											 className="btn btn-link btn-member-icon"
											 target="_blank">
												<i className="icon-facebook" />
											</a>
										) : null}

										{this.props.instagram ? (
											<a
											 href={`https://instagram.com/${this.props.instagram}`}
											 className="btn btn-link btn-member-icon"
											 target="_blank">
												<i className="icon-instagram" />
											</a>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}
