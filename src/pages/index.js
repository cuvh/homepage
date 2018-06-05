import "../assets/scss/app.scss";
import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import DefaultLayout from "layouts/DefaultLayout";

import teslaImg from "assets/img/new-homepage/company-logos/tesla.svg";
import googleImg from "assets/img/new-homepage/company-logos/google.svg";
import facebookImg from "assets/img/new-homepage/company-logos/facebook.svg";
import spotifyImg from "assets/img/new-homepage/company-logos/spotify.svg";
import intercomImg from "assets/img/new-homepage/company-logos/intercom.svg";

import Parallax from "components/Homepage/Parallax";
import Spotlight from "components/Homepage/Spotlight";
import Customize from "components/Homepage/Customize";
import Benefits from "components/Homepage/Benefits";
import HomepageCTA from "components/Homepage/HomepageCTA";
import Testimonials from "components/Homepage/Testimonials";

const IndexPage = () => (
	<DefaultLayout className="homepage">
		<Helmet
		 title={"Enhancv | Professional Resume & CV Builder"}
		 meta={[
			{
				name: "description",
				content:
					"Create your resume with Enhancv to make sure the key things come across. Stand out and get that interview."
			}
		 ]}
		/>
		<div className="homepage-intro m-top-3">
			<div className="container text-center">
				<h1 className="hidden-xs hidden-sm md-lg-heading-margin">
					A resume to be proud of
				</h1>
				<h2 className="hidden-md hidden-lg xs-sm-heading-margin">
					A resume<span className="hidden-br">to be proud of</span>
				</h2>

				<div className="m-top-0">
					<h5 className="hidden-xs hidden-sm m-top-0 text-gray-light">
						Stand out and make sure the key things come across
					</h5>
					<h5 className="hidden-md hidden-lg m-top-1 text-gray-light">
						Stand out and make sure the key things come across
					</h5>
				</div>
				<div>
					<a
					 href="{{ urls.builder }}"
					 data-track="event"
					 data-category="Homepage"
					 data-action="Click Signup"
					 data-label="Create Your Resume"
					 className="btn btn-primary btn-lg hidden-xs hidden-sm m-top-2"
					>
						Create Your Resume
					</a>
					<a
					 href="{{ urls.builder }}"
					 data-track="event"
					 data-category="Homepage"
					 data-action="Click Signup"
					 data-label="Create Your Resume"
					 className="btn btn-primary btn-md hidden-md hidden-lg m-top-2"
					>
						Create Your Resume
					</a>
				</div>
			</div>
			<div
			 className="parallax-window homepage-scalable-header"
			 data-parallax="scroll"
			 data-image-src="/img/new-homepage/header.jpg"
			/>
		</div>

		<div className="homepage-logos">
			<div className="container animate-in">
				<div className="Grid m-top-10 hidden-sm hidden-xs">
					<div className="Grid-cell text-center">
						<img src={teslaImg} />
					</div>
					<div className="Grid-cell text-center">
						<img src={googleImg} />
					</div>
					<div className="Grid-cell text-center">
						<img src={facebookImg} />
					</div>
					<div className="Grid-cell text-center">
						<img src={spotifyImg} />
					</div>
					<div className="Grid-cell text-center">
						<img src={intercomImg} />
					</div>
				</div>
				<div className="Grid m-top-6 hidden-md hidden-lg">
					<div className="Grid-cell--xs-6 text-center">
						<img src={teslaImg} />
					</div>
					<div className="Grid-cell--xs-6 text-center">
						<img src={googleImg} />
					</div>
					<div className="Grid-cell--xs-6 m-top-4 text-center">
						<img src={facebookImg} />
					</div>
					<div className="Grid-cell--xs-6 m-top-4 text-center">
						<img src={spotifyImg} />
					</div>
				</div>

				<div className="m-top-5 m-bottom-6 hidden-xs hidden-sm">
					<p className="text-muted-deep text-small text-center">
						Our users got noticed and hired by their top choice
						companies — read more about their journey to the perfect
						job&nbsp;
						<Link
						 data-track="event"
						 data-category="Homepage"
						 data-action="Click Successful Resumes"
						 to="/successful-resumes"
						 className="feature-link"
						>
							here
						</Link>.
					</p>
				</div>
				<div className="m-top-3 m-bottom-4 hidden-md hidden-lg">
					<p className="text-muted-deep text-small text-center">
						Our users got noticed and hired by their top choice
						companies — read more about their journey to the perfect
						job&nbsp;
						<Link
						 data-track="event"
						 data-category="Homepage"
						 data-action="Click Successful Resumes"
						 to="/successful-resumes"
						 className="feature-link"
						>
							here
						</Link>.
					</p>
				</div>
			</div>
		</div>

		<Parallax />

		<Spotlight />

		<Customize />

		<Benefits />

		<Testimonials />

		<HomepageCTA />
	</DefaultLayout>
);

export default IndexPage;
