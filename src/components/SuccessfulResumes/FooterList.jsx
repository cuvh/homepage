import React from "react";

import barackObama from "assets/img/new-successful-resumes/avatars/barack_obama/avatar.jpg";
import barackCompany from "assets/img/new-successful-resumes/avatars/barack_obama/company.png";
import hoverResume from "assets/img/new-successful-resumes/placeholders/hover-cv.png";

export default function FooterList() {
	return (
		<section className="resumes--others m-sm-top-4 m-md-top-13 m-sm-bottom-3 m-md-bottom-7">
			<div className="resumes--list">
				<p className="big-p text-center text-gray-light text-white-smoke">
					Other successful resumes made on Enhancv
				</p>
			</div>
			<div className="resumes--others-wrap noBackground Grid">
				<a
				 data-className="right-next-gig"
				 href="#"
				 className="resumes--box-holder Grid-cell--md-4 Grid-cell--sm-4 Grid-cell--xs-12 p-md-3 p-sm-1"
				>
					<div className="resumes--box">
						<span className="resumes--badge badge--purple">
							Career change
						</span>
						<span className="resumes--person-avatar">
							<img
							 src={barackObama}
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
								 src={barackCompany}
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
						<span className="resumes--badge badge--orange">
							DREAM JOB
						</span>
						<span className="resumes--person-avatar">
							<img
							 src={barackObama}
							 alt="Junior designer"
							/>
						</span>
						<div className="resumes--others-person-info">
							<h4 className="resumes--person-name m-top-2">
								Kasia Blimel
							</h4>
							<h5 className="resumes--person-jobtitle">
								Junior designer
							</h5>
							<div className="resumes--hired m-xs-top-2 m-md-top-4">
								<span className="label">Hired at</span>
								<img
								 className="m-xs-left-1 m-md-left-2"
								 src={barackCompany}
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
							 src={barackObama}
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
								 src={barackCompany}
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
		</section>
	);
}
