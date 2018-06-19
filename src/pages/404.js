import React from "react";
import Link from "gatsby-link";

export default function Page404() {
	return (
		<div className="container container-page page-not-found bottom-lg">
			<h3 className="text-center">
				Error 404<br />
				<small>This is not the page you are looking for :/</small>
				<br />
				<Link
				 className="btn btn-primary m-top-4"
				 to="/">
					Back to safety
				</Link>
			</h3>
		</div>
	);
}
