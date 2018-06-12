import React from "react";

const ITEMS_COUNT = 2;

export default class FooterLastPosts extends React.PureComponent {
	state = {
		posts: [],
	};

	async componentDidMount() {
		const response = await fetch("https://blog.enhancv.com/feed/json");
		const data = await response.json();

		this.setState({
			posts: data.items.slice(0, ITEMS_COUNT),
		});
	}

	render() {
		const { posts } = this.state;

		return (
			<div className="Grid-cell--sm-3 Grid-cell--md-3 Grid-cell--xs-6 hidden-xs">
				<div className="footer-title m-top-2 m-bottom-4">From the blog</div>
				<ul className="list-unstyled homepage-blog-latest-short">
					{posts.length === 0 ? (
						<li className="articles-short">Loading..</li>
					) : (
						<li className="articles-short">
							<div>
								{posts.map(item => (
									<a
									 key={item.url}
									 target="_blank"
									 className="inline-block m-bottom-1"
									 href={item.url}>
										{item.title}
									</a>
								))}
							</div>
						</li>
					)}

					<li>
						<a
						 className="footer-arrow-link"
						 href="https://blog.enhancv.com/"
						 target="_blank">
							Read more &nbsp;&rarr;
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
