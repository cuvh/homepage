import React from "react";

export default function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="Grid footer-container m-top-8 m-bottom-3">
					<div className="Grid links-container full-width">
						<div className="Grid-cell--sm-3 Grid-cell--md-3 Grid-cell--xs-6">
							<div className="footer-title m-top-2 m-bottom-4">
								Get started
							</div>
							<ul className="list-unstyled">
								<li>
									<a
									 href="https://app.enhancv.com/"
									 className="footer-arrow-link"
									>
										Create Resume &nbsp;&rarr;
									</a>
								</li>
								<li>
									<a href="/pricing.html">Pricing</a>
								</li>
								<li>
									<a
									 href="/enhancv-button.html"
									 target="_blank"
									>
										For Companies
									</a>
								</li>
								<li>
									<a href="/terms.html">Legal</a>
								</li>
							</ul>
						</div>
						<div className="Grid-cell--sm-3 Grid-cell--md-3 Grid-cell--xs-6 f-mobile-padding">
							<div className="footer-title m-top-2 m-bottom-4">
								Goodies
							</div>
							<ul className="list-unstyled">
								<li>
									<a
									 href="{{ urls.faq }}"
									 target="_blank"
									>
										FAQ
									</a>
								</li>
								<li>
									<a
									 href="http://careerstack.io/"
									 target="_blank"
									>
										Resources
									</a>
								</li>
								<li>
									<a href="/successful-resumes.html">
										Successful Resumes
									</a>
								</li>
								<li>
									<a href="https://blog.enhancv.com/">Blog</a>
								</li>
							</ul>
						</div>
						<div className="Grid-cell--sm-3 Grid-cell--md-3 Grid-cell--xs-6">
							<div className="footer-title m-top-2 m-bottom-4">
								About us
							</div>
							<ul className="list-unstyled">
								<li>
									<a
									 href="/about.html"
									 target="_blank"
									>
										Company
									</a>
								</li>
								<li>
									<a href="/careers.html">Careers</a>
								</li>
								<li>
									<a href="https://enhancv.statuspage.io/">
										Status Page
									</a>
								</li>
							</ul>
						</div>
						<div className="Grid-cell--sm-3 Grid-cell--md-3 Grid-cell--xs-6 hidden-xs">
							<div className="footer-title m-top-2 m-bottom-4">
								From the blog
							</div>
							<ul className="list-unstyled homepage-blog-latest-short">
								<li className="articles-short">Loading..</li>
								<li>
									<a
									 className="footer-arrow-link"
									 href="https://blog.enhancv.com/"
									>
										Read more &nbsp;&rarr;
									</a>
								</li>
							</ul>
						</div>
						<div className="Grid-cell--xs-6 hidden-sm hidden-md hidden-lg">
							<div className="Grid social-links-container">
								<div className="Grid-cell--sm-4">
									<a
									 href="{{ urls.facebook }}"
									 className="social-link"
									>
										<img src="/img/new-homepage/icons/FB@2x.png" />
									</a>
								</div>
								<div className="Grid-cell--sm-4">
									<a
									 href="{{ urls.instagram }}"
									 className="social-link"
									>
										<img src="/img/new-homepage/icons/Instagram@2x.png" />
									</a>
								</div>
								<div className="Grid-cell--sm-4">
									<a
									 href="{{ urls.twitter }}"
									 className="social-link"
									>
										<img src="/img/new-homepage/icons/Twitter@2x.png" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="Grid Grid--spaceBetween m-bottom-2 m-top-9 full-width footer-end">
						<hr className="hidden-sm hidden-md hidden-lg full-width" />
						<div className="Grid-cell Grid-cell--auto text-center-xs  hidden-xs footer-rights">
							<p className="copyright">
								&copy; 2018. All rights reserved.
							</p>
						</div>
						<div className="Grid-cell Grid-cell--auto hidden-xs">
							<div className="Grid Grid--justifyCenter">
								<div className="Grid-cell--sm-4">
									<a
									 href="{{ urls.facebook }}"
									 className="social-link"
									>
										<img src="/img/new-homepage/icons/FB@2x.png" />
									</a>
								</div>
								<div className="Grid-cell--sm-4">
									<a
									 href="{{ urls.instagram }}"
									 className="social-link"
									>
										<img src="/img/new-homepage/icons/Instagram@2x.png" />
									</a>
								</div>
								<div className="Grid-cell--sm-4">
									<a
									 href="{{ urls.twitter }}"
									 className="social-link"
									>
										<img src="/img/new-homepage/icons/Twitter@2x.png" />
									</a>
								</div>
							</div>
						</div>
						<div className="Grid-cell Grid-cell--auto text-center-xs">
							<div className="Grid Grid--justifyCenter made-with-love">
								<img
								 className="footer-logo hidden-sm hidden-md hidden-lg m-top-1 m-right-1 m-left-no"
								 src="/img/new-homepage/icons/logo-ecv@2x.png"
								/>
								<p className="copyright">
									Made with love by people who care.
								</p>
								<img
								 className="footer-logo hidden-xs m-top-1 m-left-2"
								 src="/img/new-homepage/icons/logo-ecv@2x.png"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
