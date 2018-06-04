import "../assets/scss/app.scss";
import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import DefaultLayout from "../layouts/DefaultLayout";

import HomepageTestimonials from "../partials/HomepageTestimonials";

import teslaImg from "../assets/img/new-homepage/company-logos/tesla.svg";
import googleImg from "../assets/img/new-homepage/company-logos/google.svg";
import facebookImg from "../assets/img/new-homepage/company-logos/facebook.svg";
import spotifyImg from "../assets/img/new-homepage/company-logos/spotify.svg";
import intercomImg from "../assets/img/new-homepage/company-logos/intercom.svg";

import parallaxImgOne from "../assets/img/new-homepage/standout-01-img3-1.png";
import parallaxImgTwo from "../assets/img/new-homepage/standout-01-img3-2.png";
import parallaxImgThree from "../assets/img/new-homepage/standout-01-img3-3.png";

import Spotlight from "./Homepage/Spotlight";
import Customize from "./Homepage/Customize";
import Benefits from "./Homepage/Benefits";
import HomepageCTA from "./Homepage/HomepageCTA";

// ---
// isHomepage: true
// socialTitle: "Enhancv: A resume to be proud of"
// title: "Enhancv | Professional Resume & CV Builder"
// socialDescription: "Create your resume with Enhancv to make sure the key things come across. Stand out and get that interview."
// ---

const IndexPage = () => (
	<DefaultLayout>
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
						job
						<a
						 data-track="event"
						 data-category="Homepage"
						 data-action="Click Successful Resumes"
						 href="/successful-resumes.html"
						 className="feature-link"
						>
							here
						</a>.
					</p>
				</div>
				<div className="m-top-3 m-bottom-4 hidden-md hidden-lg">
					<p className="text-muted-deep text-small text-center">
						Our users got noticed and hired by their top choice
						companies — read more about their journey to the perfect
						job
						<a
						 data-track="event"
						 data-category="Homepage"
						 data-action="Click Successful Resumes"
						 href="/successful-resumes.html"
						 className="feature-link"
						>
							here
						</a>.
					</p>
				</div>
			</div>
		</div>

		<div className="container homepage-panel second">
			<div className="animate-in Grid m-top-2 m-bottom-2">
				<div className="Grid Grid--alignCenter Grid-cell--lg-4 Grid-cell--sm-4">
					<div className="vertical-center-m-negative text-center-xs">
						<h2 className="m-top-no">
							A resume that simply stands out
						</h2>
						<p className="text-muted m-top-2 m-bottom-7">
							90% of applicants use a word-editing software and
							traditional templates. <br />Don’t rely on a bland
							resume - get the recruiter’s attention with a
							visually appealing format.
						</p>
						<a
						 data-track="event"
						 data-category="Homepage"
						 data-action="Click New Features"
						 data-label="Build a modern resume"
						 href="{{ urls.builder }}"
						 className="feature-link"
						>
							Build a modern resume &nbsp;&rarr;
						</a>
					</div>
				</div>
				<div className="Grid Grid--alignCenter Grid-cell--lg-7 Grid-cell--sm-7 relative homepage-standout Grid-cell--sm-offset-1 Grid-cell--lg-offset-1">
					<div className="inline-block">
						<img
						 id="parallax-1"
						 className="bg-image"
						 src={parallaxImgOne}
						/>
						<img
						 id="parallax-2"
						 className="bg-image"
						 src={parallaxImgTwo}
						/>
						<img
						 id="parallax-3"
						 className="relative"
						 src={parallaxImgThree}
						/>
					</div>
				</div>
			</div>
		</div>

		<Spotlight />

		<Customize />

		<Benefits />

		<div className="slick-arrows-on-hover">
			<div className="container homepage-testimonials homepage-panel">
				<div className="animate-in carousel-container">
					<HomepageTestimonials
					 text="Enhancv gave me a sense of relief and a feeling of confidence when passing it along to a potential employer."
					 title="Daniel Pietersen, Senior Customer Support Engineer at Intercom"
					 image="daniel"
					/>

					<HomepageTestimonials
					 text="At Tesla, the competition is very high, but Enhancv put me in front of other applicants."
					 title="Akshay S. Rao, Intern at Tesla"
					 image="akshay"
					/>

					<HomepageTestimonials
					 text="Before Enhancv I felt like I had so much to offer but it wasn’t coming across."
					 title="Zainab Boladale, TV News Presenter, RTÉ"
					 image="zainab"
					/>

					<HomepageTestimonials
					 text="A recruiter at a top 5 investment bank in London told me my CV was a breath of fresh air and invited me to my first interview in a bulge bank."
					 title="Edward Kennedy, Alumnus at University College Dublin"
					 image="edward"
					/>

					<HomepageTestimonials
					 text="I did not start listing my achievements until I used Enhancv. It really got me thinking about what I’ve done in my career or just in my life."
					 title="Clara Sophia Lim, Paralegal"
					 image="clara"
					/>
				</div>
			</div>
		</div>

		<HomepageCTA />
	</DefaultLayout>
);

export default IndexPage;
