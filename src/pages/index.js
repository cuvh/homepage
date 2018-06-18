import "../assets/scss/app.scss";
import React from "react";
import Link from "gatsby-link";
import Meta from "components/Meta";
import Img from "gatsby-image";

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

const IndexPage = ({
	data: {
		headerImage,
		standoutOne,
		standoutTwo,
		standoutThree,
		spotlightFront,
		spotlightBack,
		...rest
	},
}) => (
	<DefaultLayout className="homepage">
		<Meta
		 title="Enhancv | Professional Resume & CV Builder"
		 description="Create your resume with Enhancv to make sure the key things come across. Stand out and get that interview."
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
					 href="https://app.enhancv.com"
					 data-track="event"
					 data-category="Homepage"
					 data-action="Click Signup"
					 data-label="Create Your Resume"
					 className="btn btn-primary btn-lg hidden-xs hidden-sm m-top-2">
						Create Your Resume
					</a>
					<a
					 href="https://app.enhancv.com"
					 data-track="event"
					 data-category="Homepage"
					 data-action="Click Signup"
					 data-label="Create Your Resume"
					 className="btn btn-primary btn-md hidden-md hidden-lg m-top-2">
						Create Your Resume
					</a>
				</div>
			</div>
			<div className="homepage-gatsby-header">
				<Img sizes={headerImage.childImageSharp.sizes} />
			</div>
			{/*<div className="parallax-window homepage-scalable-header" />*/}
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
						Our users got noticed and hired by their top choice companies — read more
						about their journey to the perfect job&nbsp;
						<Link
						 data-track="event"
						 data-category="Homepage"
						 data-action="Click Successful Resumes"
						 to="/successful-resumes"
						 className="feature-link">
							here
						</Link>.
					</p>
				</div>
				<div className="m-top-3 m-bottom-4 hidden-md hidden-lg">
					<p className="text-muted-deep text-small text-center">
						Our users got noticed and hired by their top choice companies — read more
						about their journey to the perfect job&nbsp;
						<Link
						 data-track="event"
						 data-category="Homepage"
						 data-action="Click Successful Resumes"
						 to="/successful-resumes"
						 className="feature-link">
							here
						</Link>.
					</p>
				</div>
			</div>
		</div>

		<Parallax standoutImages={[standoutOne, standoutTwo, standoutThree]} />

		<Spotlight
		 front={spotlightFront}
		 back={spotlightBack}
		/>

		<Customize />

		<Benefits />

		<Testimonials images={rest} />

		<HomepageCTA />
	</DefaultLayout>
);

export default IndexPage;

export const pageQuery = graphql`
	fragment standoutImage on File {
		childImageSharp {
			resolutions(width: 665, height: 560) {
				...GatsbyImageSharpResolutions
			}
		}
	}

	fragment testimonialImage on File {
		childImageSharp {
			resolutions(width: 285, height: 360) {
				...GatsbyImageSharpResolutions
			}
		}
	}

	query Homepage {
		headerImage: file(relativePath: { eq: "new-homepage/header.jpg" }) {
			childImageSharp {
				sizes(maxWidth: 2500) {
					...GatsbyImageSharpSizes
				}
			}
		}
		standoutOne: file(relativePath: { eq: "new-homepage/standout-01-img3-1.png" }) {
			...standoutImage
		}
		standoutTwo: file(relativePath: { eq: "new-homepage/standout-01-img3-2.png" }) {
			...standoutImage
		}
		standoutThree: file(relativePath: { eq: "new-homepage/standout-01-img3-3.png" }) {
			...standoutImage
		}
		danielLogo: file(relativePath: { eq: "new-homepage/testimonials/daniel@2x.png" }) {
			...testimonialImage
		}
		akshayLogo: file(relativePath: { eq: "new-homepage/testimonials/akshay@2x.png" }) {
			...testimonialImage
		}
		zainabLogo: file(relativePath: { eq: "new-homepage/testimonials/zainab@2x.png" }) {
			...testimonialImage
		}
		edwardLogo: file(relativePath: { eq: "new-homepage/testimonials/edward@2x.png" }) {
			...testimonialImage
		}
		claraLogo: file(relativePath: { eq: "new-homepage/testimonials/clara@2x.png" }) {
			...testimonialImage
		}
		spotlightFront: file(relativePath: { eq: "new-homepage/spotlight@2x.png" }) {
			childImageSharp {
				resolutions(width: 255, height: 371) {
					...GatsbyImageSharpResolutions
				}
			}
		}
		spotlightBack: file(relativePath: { eq: "new-homepage/spotlight_back@2x.png" }) {
			childImageSharp {
				resolutions(width: 334, height: 441) {
					...GatsbyImageSharpResolutions
				}
			}
		}
	}
`;
