import React from "react";

export default function Member({
	name,
	position,
	description,
	image,
	facebook,
	github,
	dribbble,
	linkedin,
	medium,
	twitter,
	instagram,
	website,
	pdf
}) {
	return (
		<div className="member center-block bottom-md">
			<div
			 className="member-thumb"
			 style={{ backgroundImage: `url(${image})` }}
			/>

			<a
			 className="member-content text-center"
			 data-toggle="modal"
			 data-track="event"
			 data-category="About"
			 data-action="Click Team Member"
			 data-label="{name}"
			 href="#{id}-modal"
			>
				<div className="member-text">
					<p className="member-title bottom-xs">{name}</p>
					<p className="no-margin text-muted">{position}</p>
				</div>
			</a>

			<div
			 id="{id}-modal"
			 tabIndex="-1"
			 className="modal fade"
			>
				<div className="modal-dialog member-modal">
					<div className="modal-content">
						<div className="embed-responsive embed-responsive-member">
							<div
							 style={{
								backgroundImage: `url(${image})`
							 }}
							 className="embed-responsive-item"
							/>
						</div>
						<button
						 type="button"
						 className="close"
						 data-dismiss="modal"
						>
							<span aria-hidden="true">&times;</span>
						</button>

						<div className="modal-body">
							<h5 className="h5">{name}</h5>

							<p className="text-primary">{position}</p>

							{description ? <p>{description}</p> : null}

							<div className="top-sm">
								{pdf ? (
									<a
									 href="/img/about/member/{pdf}"
									 className="btn btn-default right-xs"
									 target="_blank"
									>
										View Resume
									</a>
								) : null}

								{website ? (
									<a
									 href={website}
									 className="btn btn-link btn-member-icon"
									 target="_blank"
									>
										<i className="icon-link" />
									</a>
								) : null}

								{linkedin ? (
									<a
									 href={`https://www.linkedin.com/in/${linkedin}`}
									 className="btn btn-link btn-member-icon"
									 target="_blank"
									>
										<i className="icon-linkedin-alt" />
									</a>
								) : null}

								{medium ? (
									<a
									 href={`https://medium.com/@${medium}`}
									 className="btn btn-link btn-member-icon"
									 target="_blank"
									>
										<i className="icon-social-medium" />
									</a>
								) : null}

								{dribbble ? (
									<a
									 href={`https://dribbble.com/${dribbble}`}
									 className="btn btn-link btn-member-icon"
									 target="_blank"
									>
										<i className="icon-dribbble" />
									</a>
								) : null}

								{github ? (
									<a
									 href={`https://github.com/${github}`}
									 className="btn btn-link btn-member-icon"
									 target="_blank"
									>
										<i className="icon-github-alt" />
									</a>
								) : null}

								{twitter ? (
									<a
									 href={`https://twitter.com/${twitter}`}
									 className="btn btn-link btn-member-icon"
									 target="_blank"
									>
										<i className="icon-twitter" />
									</a>
								) : null}

								{facebook ? (
									<a
									 href={`https://facebook.com/${facebook}`}
									 className="btn btn-link btn-member-icon"
									 target="_blank"
									>
										<i className="icon-facebook" />
									</a>
								) : null}

								{instagram ? (
									<a
									 href={`https://instagram.com/${instagram}`}
									 className="btn btn-link btn-member-icon"
									 target="_blank"
									>
										<i className="icon-instagram" />
									</a>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
