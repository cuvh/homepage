import React from "react";
import Helmet from "react-helmet";
import classnames from "classnames";

import DefaultLayout from "layouts/DefaultLayout";

import PricingBenefits from "components/Pricing/PricingBenefits";
import PricingTabs from "components/Pricing/PricingTabs";
import HomepageCTA from "components/Homepage/HomepageCTA";

// noNavigation: true
// socialTitle: "Enhancv: A resume to be proud of"
// title: "Enhancv | Professional Resume & CV Builder"
// socialDescription: "Create your resume with Enhancv to make sure the key things come across. Stand out and get that interview."

const BASIC = "basic";
const PRO = "pro";

const MONTHLY = "monthly";
const QUARTERLY = "quarterly";
const SEMIANNUALLY = "semiannually";

export default class PricingB extends React.PureComponent {
	state = {
		type: PRO,
		selectedPlan: QUARTERLY
	};

	render() {
		const { type, selectedPlan } = this.state;

		return (
			<DefaultLayout className="homepage">
				<Helmet
				 title={"Enhancv | Professional Resume & CV Builder"}
				 meta={[
					{
						name: "description",
						content: "Enhancv: A resume to be proud of"
					}
				 ]}
				/>
				<div className="pricing-header">
					<div className="container text-center">
						<h1 className="hidden-xs hidden-sm md-lg-heading-margin">
							Are you proud when you show your resume?
						</h1>
						<h2 className="hidden-md hidden-lg xs-sm-heading-margin m-top-3 text-bold">
							Are you proud when<br /> you show your resume?
						</h2>

						<div className="m-top-2">
							<p className="p-big">
								Sign up now, decide on your plan later.
							</p>
						</div>
						<div>
							<div className="m-top-3 " />
							<a
							 href="{{ urls.builder }}"
							 data-track="event"
							 data-category="Pricing V2"
							 data-action="Start Trial"
							 data-label="Header button"
							 className="btn btn-primary btn-lg"
							>
								Try free for 14 days
							</a>
						</div>
						<div className="m-top-2">
							<p
							 className="text-muted-deep m-top-0"
							 style={{ fontSize: 12 }}
							>
								* No credit card required.
							</p>
						</div>
					</div>
				</div>

				<div className="pricing-tabs-2">
					<div className="container">
						<PricingTabs
						 type={type}
						 onChange={type => this.setState({ type })}
						/>

						{type === BASIC ? (
							<div className="pricing-wrapper m-top-7 Grid basic-tabs">
								<div className="left-wrapper Grid-cell--xs-12 Grid-cell--sm-7">
									<h2>Basic Plan</h2>
									<p className="m-top-1 text-muted">
										Get the basics of a new, more memorable
										resume that sets you apart from other
										candidates.
									</p>

									<p className="m-top-4 text-muted">
										Not sure if you want to buy?&nbsp;
										<a
										 data-track="event"
										 data-category="Pricing V2"
										 data-action="Start Trial"
										 data-label="Text link in basic plan"
										 href="https://app.enhancv.com/"
										 className="text-muted feature-link underlined"
										>
											Try free for 14 days
										</a>
									</p>
								</div>
								<div className="right-wrapper text-center Grid-cell--xs-12 Grid-cell--sm-5">
									<div className="price-field m-top-1">
										<span className="currency">$</span>
										<span className="big-price">4</span>
										<span className="small-price">
											.99/m
										</span>
									</div>
									<a
									 href="https://app.enhancv.com/checkout/basic"
									 data-track="event"
									 data-category="Pricing V2"
									 data-action="Start Trial"
									 data-label="Basic plan button"
									 className="m-top-2 btn btn-primary btn-lg"
									>
										Try free for 14 days
									</a>
								</div>
							</div>
						) : (
							<div className="pricing-wrapper m-top-7 Grid pro-tabs m-bottom-2">
								<div className="left-wrapper Grid-cell--xs-12 Grid-cell--sm-7">
									<h2>Pro Plan</h2>
									<p className="m-top-1 text-muted">
										Stand out with a visual resume that
										highlights the key things about you and
										shows you're relevant.
									</p>

									<div className="Grid m-top-5 change-plan-buttons">
										<div
										 data-plan="monthly"
										 className="v2-plan-picker Grid-cell--xs-4 text-center"
										 onClick={() =>
											this.setState({
												selectedPlan: MONTHLY
											})}
										>
											<div
											 className="right-border m-top-1"
											 style={{ height: 85 }}
											>
												<div>
													<div
													 className={classnames(
														"v2-switch-pro radio-box-pricing",
														{
															active:
																selectedPlan ===
																MONTHLY
														}
													 )}
													/>
												</div>
												<div className="m-top-2 text-muted plan-name">
													Monthly
												</div>
											</div>
										</div>
										<div
										 data-plan="quarterly"
										 className="v2-plan-picker Grid-cell--xs-4 text-center"
										 onClick={() =>
											this.setState({
												selectedPlan: QUARTERLY
											})}
										>
											<div className="right-border m-top-1">
												<div>
													<div
													 className={classnames(
														"v2-switch-pro radio-box-pricing",
														{
															active:
																selectedPlan ===
																QUARTERLY
														}
													 )}
													/>
												</div>
												<div className="m-top-2 text-muted plan-name">
													Quarterly
												</div>
												<p className="text-muted m-top-1 save-price">
													<span>SAVE 25%</span>
												</p>
											</div>
										</div>
										<div
										 data-plan="semiannually"
										 className="v2-plan-picker Grid-cell--xs-4 text-center"
										 onClick={() =>
											this.setState({
												selectedPlan: SEMIANNUALLY
											})}
										>
											<div className="m-top-1">
												<div>
													<div
													 className={classnames(
														"v2-switch-pro radio-box-pricing",
														{
															active:
																selectedPlan ===
																SEMIANNUALLY
														}
													 )}
													/>
												</div>
												<div className="m-top-2 text-muted plan-name">
													Semi-annually
												</div>
												<p className="text-muted m-top-1 save-price">
													<span>SAVE 45%</span>
												</p>
											</div>
										</div>
									</div>

									<div
									 className="plan-green-notification m-top-2"
									 style={{ display: "none" }}
									>
										Finding the right next gig takes time.{" "}
										<br />
										Save more with our Quarterly and
										Semi-annual plans.
									</div>
								</div>
								<div className="right-wrapper text-center Grid-cell--xs-12 Grid-cell--sm-5">
									<div
									 data-plan="monthly"
									 className="v2-price"
									 style={{ display: "none" }}
									>
										<div className="price-field m-top-1">
											<span className="currency">$</span>
											<span className="big-price">
												19
											</span>
											<span className="small-price">
												.99/m
											</span>
										</div>
										<div className="text-muted m-top-1 m-bottom-1">
											you will be billed<br />
											once a month
										</div>
										<a
										 href="https://app.enhancv.com/checkout/pro-monthly"
										 data-track="event"
										 data-category="Pricing V2"
										 data-action="Buy Pro Monthly"
										 className="m-top-2 btn btn-primary btn-lg btn-checkout-big"
										>
											Buy Pro Monthly
										</a>
									</div>

									<div
									 data-plan="quarterly"
									 className="v2-price"
									>
										<div className="price-field m-top-1">
											<span className="currency">$</span>
											<span className="big-price">
												14
											</span>
											<span className="small-price">
												.99/m
											</span>
										</div>
										<div className="text-muted m-top-1 m-bottom-1">
											<span className="text-muted-deep line-through">
												$59.97
											</span>{" "}
											$44.97<br />
											billed every 3 months
										</div>
										<a
										 href="https://app.enhancv.com/checkout/pro-quarterly"
										 data-track="event"
										 data-category="Pricing V2"
										 data-action="Buy Pro Quarterly"
										 className="m-top-2 btn btn-primary btn-lg btn-checkout-big"
										>
											Buy Pro Quarterly
										</a>
									</div>

									<div
									 data-plan="semiannually"
									 className="v2-price"
									 style={{ display: "none" }}
									>
										<div className="price-field m-top-1">
											<span className="currency">$</span>
											<span className="big-price">
												10
											</span>
											<span className="small-price">
												.99/m
											</span>
										</div>
										<div className="text-muted m-top-1 m-bottom-1">
											<span className="text-muted-deep line-through">
												$119.94
											</span>{" "}
											$65.94<br />
											billed every 6 months
										</div>
										<a
										 href="https://app.enhancv.com/checkout/pro-semiannual"
										 data-track="event"
										 data-category="Pricing V2"
										 data-action="Buy Pro Semiannually"
										 className="m-top-2 btn btn-primary btn-lg btn-checkout-big"
										>
											Buy Pro Semi-Annual
										</a>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>

				<PricingBenefits type={type} />

				<HomepageCTA />
			</DefaultLayout>
		);
	}
}
