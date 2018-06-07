import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

export default class List extends React.PureComponent {
	state = {
		revealed: false
	};

	reveal(e) {
		e.preventDefault();
		this.setState({
			revealed: true
		});
	}

	render() {
		const { data } = this.props;

		const items = this.state.revealed ? data : data.slice(0, 3);

		return (
			<section className="resumes--others m-sm-top-4 m-md-top-19 m-sm-bottom-3 m-md-bottom-7">
				<div className="resumes--list">
					<h4 className="resumes--others-title text-center">
						See how others did it
					</h4>
					<nav className="resumes--filter m-sm-bottom-2 m-md-bottom-2 m-sm-top-4 m-md-top-4">
						<button
						 data-className="all"
						 className="resumes--filter-button selected"
						>
							All resumes
						</button>
						<button
						 data-className="career-change"
						 className="resumes--filter-button"
						>
							Careers change
						</button>
						<button
						 data-className="job-search"
						 className="resumes--filter-button"
						>
							Job search
						</button>
						<button
						 data-className="right-next-gig"
						 className="resumes--filter-button"
						>
							Right next gig
						</button>
					</nav>
				</div>
				<div className="resumes--others-wrap Grid">
					{items.map(({ node }) => (
						<Link
						 key={node.url}
						 to={`/successful-resumes/${node.url}`}
						 className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1"
						>
							<div className="resumes--box">
								<span className="resumes--badge badge--orange">
									The right gig
								</span>
								<span className="resumes--person-avatar">
									<Img
									 className="m-xs-left-1 m-md-left-2"
									 resolutions={
										node.avatar.childImageSharp.resolutions
									 }
									/>
								</span>
								<div className="resumes--others-person-info">
									<h4 className="resumes--person-name m-top-2">
										{node.name}
									</h4>
									<h5 className="resumes--person-jobtitle">
										{node.title}
									</h5>
									<div className="resumes--hired m-xs-top-2 m-md-top-4">
										<span className="label">Hired at</span>
										<Img
										 className="m-xs-left-1 m-md-left-2"
										 resolutions={
											node.companyLogo.childImageSharp
												.resolutions
										 }
										/>
									</div>
								</div>
							</div>
							<div className="resumes--hovered">
								<Img
								 className="m-xs-left-1 m-md-left-2"
								 resolutions={
									node.image.childImageSharp.resolutions
								 }
								/>
							</div>
						</Link>
					))}
				</div>
				<div className="text-center m-sm-bottom-4 m-md-bottom-9 m-sm-top-4 m-md-top-10">
					<a
					 onClick={event => this.reveal(event)}
					 href="#"
					 className="feature-link"
					>
						See more real resumes &nbsp;→
					</a>
				</div>
			</section>
		);
	}
}
