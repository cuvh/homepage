import React from "react";
import Helmet from "react-helmet";

import DefaultLayout from "../layouts/DefaultLayout";

// <script>
// // default preview
// !function(e,n){"undefined"==typeof e[n]&&(e[n]={}),e[n]={type:"standard",wording:"resume",style:"light",element:"#enhancv-widget"}}(window,"ENHANCV_WIDGET_OPTIONS");
// </script>
// <script src="https://enhancv.com/widgets/button.js"></script>

import resumeImg from "assets/img/widget/resume@2x.png";

export default function Pricing() {
	return (
		<DefaultLayout>
			<Helmet
			 title={"Enhancv | Professional Resume & CV Builder"}
			 meta={[
				{
					name: "description",
					content: "Enhancv: A resume to be proud of"
				}
			 ]}
			/>

			<div className="widget-header">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 col-sm-12 text-center">
							<h3>
								Our resumes help you spot the right applicants
								at a glimpse
							</h3>
						</div>
					</div>
					<div>
						<a
						 href="#resume"
						 className="scroll-down"
						>
							<i className="icon-angle-down" />
						</a>
					</div>
				</div>
			</div>

			<div
			 className="widget-resume"
			 id="resume"
			>
				<div className="container">
					<div className="row">
						<div
						 className="col-sm-12 col-md-5 bullets-panel"
						 style={{ padding: 50 }}
						>
							<h4>
								Encourage applications in a format that allows
								you to make faster and more accurate decisions
							</h4>
							<div className="line" />
							<div className="widget-resume-bullet">
								<div className="circle">1</div>
								<div className="widget-resume-bullets-text">
									Professional achievements
								</div>
							</div>
							<div className="widget-resume-bullet">
								<div className="circle">2</div>
								<div className="widget-resume-bullets-text">
									Attitude
								</div>
							</div>
							<div className="widget-resume-bullet">
								<div className="circle">3</div>
								<div className="widget-resume-bullets-text">
									Personality
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-7 widget-header-image">
							<div className="widget-resume-image-wrapper">
								<img
								 width="768"
								 height="747"
								 src={resumeImg}
								 alt="Condensed resume"
								 className="img-responsive"
								/>
								<div
								 className="circle positioned-circle"
								 style={{ top: "40.5%", left: "4.8%" }}
								>
									1
								</div>
								<div
								 className="circle positioned-circle"
								 style={{ top: "43%", right: "4.8%" }}
								>
									2
								</div>
								<div
								 className="circle positioned-circle"
								 style={{ top: "84%", left: "4.8%" }}
								>
									3
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="widget-screen">
				<div className="container">
					<div className="row">
						<div className="hidden-sm hidden-xs col-md-6 col-md-offset-1 widget-screen-image">
							<img
							 width="573"
							 height="343"
							 src="/img/widget/screen.png"
							 srcSet="/img/widget/screen.png 1x, /img/widget/screen@2x.png 2x"
							 alt="Widget preview"
							/>
						</div>
						<div className="hidden-sm hidden-xs col-md-5 widget-screen-text">
							<h3>
								Place an Enhancv button on your job page and
								streamline your selection process
							</h3>
						</div>

						<div className="col-sm-12 visible-sm visible-xs widget-screen-mobile-text">
							<h3>
								Place an Enhancv button on your job page and
								streamline your selection process
							</h3>
						</div>
						<div className="col-sm-12 visible-sm visible-xs widget-header-image">
							<img
							 width="573"
							 height="343"
							 src="/img/widget/screen.png"
							 srcSet="/img/widget/screen.png 1x, /img/widget/screen@2x.png 2x"
							 className="img-responsive"
							 alt="Widget preview"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="code-generator m-bottom-6">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-4 col-md-offset-1">
							<h4>Generate button</h4>
							<div className="widget-generate">
								<div className="row radio-button-group">
									<div className="col-xs-5 col-md-3">
										Size
									</div>
									<div className="col-xs-3 col-md-4">
										<div
										 className="radio-button checked"
										 data-name="type"
										 data-value="standard"
										/>

										<span
										 className="radio-button-label"
										 data-for-value="standard"
										>
											Standard
										</span>
									</div>
									<div className="col-xs-3 col-md-4">
										<div
										 className="radio-button"
										 data-name="type"
										 data-value="compact"
										/>

										<span
										 className="radio-button-label"
										 data-for-value="compact"
										>
											Compact
										</span>
									</div>
								</div>
								<div className="row radio-button-group">
									<div className="col-xs-5 col-md-3">
										Wording
									</div>
									<div className="col-xs-3 col-md-4">
										<div
										 className="radio-button checked"
										 data-name="wording"
										 data-value="resume"
										/>

										<span
										 className="radio-button-label"
										 data-for-value="resume"
										>
											Resume
										</span>
									</div>
									<div className="col-xs-3 col-md-4">
										<div
										 className="radio-button"
										 data-name="wording"
										 data-value="cv"
										/>

										<span
										 className="radio-button-label"
										 data-for-value="cv"
										>
											CV
										</span>
									</div>
								</div>
								<div className="row radio-button-group">
									<div className="widget-disabled disabled-on-compact hidden" />

									<div className="col-xs-5 col-md-3">
										Style
									</div>
									<div className="col-xs-3 col-md-4">
										<div
										 className="radio-button checked"
										 data-name="style"
										 data-value="light"
										/>

										<span
										 className="radio-button-label"
										 data-for-value="light"
										>
											Light
										</span>
									</div>
									<div className="col-xs-3 col-md-4">
										<div
										 className="radio-button"
										 data-name="style"
										 data-value="dark"
										/>

										<span
										 className="radio-button-label"
										 data-for-value="dark"
										>
											Dark
										</span>
									</div>
								</div>
								<div className="row radio-button-group">
									<div className="widget-disabled disabled-on-compact hidden" />

									<div className="col-xs-5 col-md-3">
										Text
									</div>
									<div className="col-xs-3 col-md-4">
										<div
										 className="radio-button checked"
										 hide-custom-text-textarea
										 data-name="text"
										 data-value="default"
										/>

										<span
										 className="radio-button-label"
										 hide-custom-text-textarea
										 data-for-value="default"
										>
											Default
										</span>
									</div>
									<div className="col-xs-3 col-md-5">
										<div
										 className="radio-button"
										 show-custom-text-textarea
										 data-name="text"
										 data-value="custom"
										/>

										<span
										 className="radio-button-label"
										 show-custom-text-textarea
										 data-for-value="custom"
										>
											Custom
										</span>

										<span className="pull-right hidden-xs">
											<div
											 className="icon icon-info-circle widget-info-circle"
											 data-container="body"
											 data-toggle="tooltip"
											 data-placement="top"
											 title="You can tailor a message to your applicants or ask them to include specific sections, e.g. “We'd love to learn how a day of your life looks like”."
											/>
										</span>
									</div>
								</div>
							</div>

							<div className="widget-custom-text-container hidden">
								<textarea
								 className="widget-custom-text"
								 placeholder="Enter your custom text"
								 maxLength="70"
								/>

								<span className="widget-custom-counter">
									70
								</span>
							</div>

							<button className="btn btn-primary widget-generate-button">
								Generate Button
							</button>
						</div>
						<div className="col-sm-12 col-md-7">
							<h4>Preview</h4>
							<div
							 className="widget-preview-container"
							 id="enhancv-widget"
							/>

							<div
							 id="copy-code-wrapper"
							 className="hidden"
							>
								<h4>Code</h4>
								<textarea
								 className="widget-code"
								 id="widget-code"
								 readOnly="readonly"
								/>
								<button
								 className="btn btn-default pull-left"
								 data-copy-from="#widget-code"
								>
									Copy Code
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}
