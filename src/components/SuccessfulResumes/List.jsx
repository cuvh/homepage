import React from "react";

import steveJobs from "assets/img/new-successful-resumes/avatars/steve_jobs/avatar.jpg";
import steveJobsCompany from "assets/img/new-successful-resumes/avatars/steve_jobs/company.png";
import hoverResume from "assets/img/new-successful-resumes/placeholders/hover-cv.png";

export default function List() {
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
				<a
				 data-className="right-next-gig"
				 href="#"
				 className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1"
				>
					<div className="resumes--box">
						<span className="resumes--badge badge--orange">
							The right gig
						</span>
						<span className="resumes--person-avatar">
							<img
							 src={steveJobs}
							 alt="Barack Obama President of United States"
							/>
						</span>
						<div className="resumes--others-person-info">
							<h4 className="resumes--person-name m-top-2">
								Barack Obama
							</h4>
							<h5 className="resumes--person-jobtitle">
								President of United States
							</h5>
							<div className="resumes--hired m-xs-top-2 m-md-top-4">
								<span className="label">Hired at</span>
								<img
								 className="m-xs-left-1 m-md-left-2"
								 src={steveJobsCompany}
								 alt="Nasa logo"
								/>
							</div>
						</div>
					</div>
					<div className="resumes--hovered">
						<img
						 src={hoverResume}
						 alt="Steve Jobs CV"
						/>
					</div>
				</a>
				<a
				 data-className="career-change"
				 href="#"
				 className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1"
				>
					<div className="resumes--box">
						<span className="resumes--badge badge--purple">
							Career change
						</span>
						<span className="resumes--person-avatar">
							<img
							 src={steveJobs}
							 alt="Barack Obama President of United States"
							/>
						</span>
						<div className="resumes--others-person-info">
							<h4 className="resumes--person-name m-top-2">
								Barack Obama
							</h4>
							<h5 className="resumes--person-jobtitle">
								President of United States
							</h5>
							<div className="resumes--hired m-xs-top-2 m-md-top-4">
								<span className="label">Hired at</span>
								<img
								 className="m-xs-left-1 m-md-left-2"
								 src={steveJobsCompany}
								 alt="Nasa logo"
								/>
							</div>
						</div>
					</div>
					<div className="resumes--hovered">
						<img
						 src={hoverResume}
						 alt="Steve Jobs CV"
						/>
					</div>
				</a>
				<a
				 data-className="career-change"
				 href="#"
				 className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1"
				>
					<div className="resumes--box">
						<span className="resumes--badge badge--purple">
							Career change
						</span>
						<span className="resumes--person-avatar">
							<img
							 src={steveJobs}
							 alt="Barack Obama President of United States"
							/>
						</span>
						<div className="resumes--others-person-info">
							<h4 className="resumes--person-name m-top-2">
								Barack Obama
							</h4>
							<h5 className="resumes--person-jobtitle">
								President of United States
							</h5>
							<div className="resumes--hired m-xs-top-2 m-md-top-4">
								<span className="label">Hired at</span>
								<img
								 className="m-xs-left-1 m-md-left-2"
								 src={steveJobsCompany}
								 alt="Nasa logo"
								/>
							</div>
						</div>
					</div>
					<div className="resumes--hovered">
						<img
						 src={hoverResume}
						 alt="Steve Jobs CV"
						/>
					</div>
				</a>
			</div>
			<div className="text-center m-sm-bottom-4 m-md-bottom-9 m-sm-top-4 m-md-top-10">
				<a
				 href="#"
				 className="feature-link"
				>
					See more real resumes &nbsp;→
				</a>
			</div>
		</section>
	);
}
