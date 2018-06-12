import React from "react";
import Link from "gatsby-link";

import instagramImg from "../assets/img/new-homepage/icons/Instagram@2x.png";
import facebookImg from "../assets/img/new-homepage/icons/FB@2x.png";
import twitterImg from "../assets/img/new-homepage/icons/Twitter@2x.png";

import enhancvLogo from "../assets/img/new-homepage/icons/logo-ecv@2x.png";

import FooterLastPosts from "./FooterLastPosts";

export default function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="Grid footer-container m-top-8 m-bottom-3">
					<div className="Grid links-container full-width">
						<div className="Grid-cell--sm-3 Grid-cell--md-3 Grid-cell--xs-6">
							<div className="footer-title m-top-2 m-bottom-4">Get started</div>
							<ul className="list-unstyled">
								<li>
									<a
									 href="https://app.enhancv.com/"
									 className="footer-arrow-link">
										Create Resume &nbsp;&rarr;
									</a>
								</li>
								<li>
									<Link to="/pricing">Pricing</Link>
								</li>
								<li>
									<Link to="/terms">Legal</Link>
								</li>
							</ul>
						</div>
						<div className="Grid-cell--sm-3 Grid-cell--md-3 Grid-cell--xs-6 f-mobile-padding">
							<div className="footer-title m-top-2 m-bottom-4">Goodies</div>
							<ul className="list-unstyled">
								<li>
									<a
									 href="https://help.enhancv.com/"
									 target="_blank">
										FAQ
									</a>
								</li>
								<li>
									<a
									 href="http://careerstack.io/"
									 target="_blank">
										Resources
									</a>
								</li>
								<li>
									<Link to="/successful-resumes">Successful Resumes</Link>
								</li>
								<li>
									<a
									 href="https://blog.enhancv.com/"
									 target="_blank">
										Blog
									</a>
								</li>
							</ul>
						</div>
						<div className="Grid-cell--sm-3 Grid-cell--md-3 Grid-cell--xs-6">
							<div className="footer-title m-top-2 m-bottom-4">About us</div>
							<ul className="list-unstyled">
								<li>
									<Link to="/about">Company</Link>
								</li>
								<li>
									<Link to="/careers">Careers</Link>
								</li>
								<li>
									<a
									 href="https://enhancv.statuspage.io/"
									 target="_blank">
										Status Page
									</a>
								</li>
							</ul>
						</div>

						<FooterLastPosts />

						<div className="Grid-cell--xs-6 hidden-sm hidden-md hidden-lg">
							<div className="Grid social-links-container">
								<div className="Grid-cell--sm-4">
									<a
									 href="https://www.facebook.com/enhancv"
									 className="social-link">
										<img src={facebookImg} />
									</a>
								</div>
								<div className="Grid-cell--sm-4">
									<a
									 href="https://www.instagram.com/enhancv"
									 className="social-link">
										<img src={instagramImg} />
									</a>
								</div>
								<div className="Grid-cell--sm-4">
									<a
									 href="https://twitter.com/enhancv"
									 className="social-link">
										<img src={twitterImg} />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="Grid Grid--spaceBetween m-bottom-2 m-top-9 full-width footer-end">
						<hr className="hidden-sm hidden-md hidden-lg full-width" />
						<div className="Grid-cell Grid-cell--auto text-center-xs  hidden-xs footer-rights">
							<p className="copyright">&copy; 2018. All rights reserved.</p>
						</div>
						<div className="Grid-cell Grid-cell--auto hidden-xs">
							<div className="Grid Grid--justifyCenter">
								<div className="Grid-cell--sm-4">
									<a
									 href="https://www.facebook.com/enhancv"
									 className="social-link">
										<img src={facebookImg} />
									</a>
								</div>
								<div className="Grid-cell--sm-4">
									<a
									 href="https://www.instagram.com/enhancv"
									 className="social-link">
										<img src={instagramImg} />
									</a>
								</div>
								<div className="Grid-cell--sm-4">
									<a
									 href="https://twitter.com/enhancv"
									 className="social-link">
										<img src={twitterImg} />
									</a>
								</div>
							</div>
						</div>
						<div className="Grid-cell Grid-cell--auto text-center-xs">
							<div className="Grid Grid--justifyCenter made-with-love">
								<img
								 className="footer-logo hidden-sm hidden-md hidden-lg m-top-1 m-right-1 m-left-no"
								 src={enhancvLogo}
								/>
								<p className="copyright">Made with love by people who care.</p>
								<img
								 className="footer-logo hidden-xs m-top-1 m-left-2"
								 src={enhancvLogo}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
