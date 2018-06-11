import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import classnames from "classnames";

import ResumeBadge from "components/SuccessfulResumes/ResumeBadge";

export default class List extends React.PureComponent {
	state = {
		revealed: false,
		filter: null
	};

	filter(type) {
		this.setState({
			filter: type
		});
	}

	reveal(e) {
		e.preventDefault();
		this.setState({
			revealed: true
		});
	}

	render() {
		const { data } = this.props;
		const { filter, revealed } = this.state;

		let items;
		if (filter) {
			items = data.filter(item => item.node.label === filter);
		} else {
			items = this.state.revealed ? data : data.slice(0, 3);
		}

		return (
			<section className="resumes--others m-sm-top-4 m-md-top-19 m-sm-bottom-3 m-md-bottom-7">
				<div className="resumes--list">
					<h4 className="resumes--others-title text-center">
						See how others did it
					</h4>
					<nav className="resumes--filter m-sm-bottom-2 m-md-bottom-2 m-sm-top-4 m-md-top-4">
						<button
						 onClick={() => this.filter(null)}
						 className={classnames("resumes--filter-button", {
							selected: filter === null
						 })}
						>
							All resumes
						</button>
						<button
						 onClick={() => this.filter("Career Change")}
						 className={classnames("resumes--filter-button", {
							selected: filter === "Career Change"
						 })}
						>
							Career change
						</button>
						<button
						 onClick={() => this.filter("New Role")}
						 className={classnames("resumes--filter-button", {
							selected: filter === "New Role"
						 })}
						>
							New Role
						</button>
						<button
						 onClick={() => this.filter("Industry Switch")}
						 className={classnames("resumes--filter-button", {
							selected: filter === "Industry Switch"
						 })}
						>
							Industry Switch
						</button>
						<button
						 onClick={() => this.filter("First Job")}
						 className={classnames("resumes--filter-button", {
							selected: filter === "First Job"
						 })}
						>
							First Job
						</button>
					</nav>
				</div>
				<div className="resumes--others-wrap Grid">
					{items.map(({ node }, index) => (
						<Link
						 key={node.url + index}
						 to={`/successful-resumes/${node.url}`}
						 className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1"
						>
							<div className="resumes--box">
								<ResumeBadge label={node.label} />
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
									<div className="resumes--hired resumes--hired-list-item m-xs-top-2 m-md-top-4">
										<span className="label">Hired at</span>
										<Img
										 style={{
											display: "inline-block"
										 }}
										 className="m-top-1"
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
				{!filter && !revealed ? (
					<div className="text-center m-sm-bottom-4 m-md-bottom-9 m-sm-top-4 m-md-top-10">
						<a
						 onClick={event => this.reveal(event)}
						 href="#"
						 className="feature-link"
						>
							See more real resumes &nbsp;→
						</a>
					</div>
				) : null}
			</section>
		);
	}
}
