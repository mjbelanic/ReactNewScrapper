import React, { Component } from "react";

export default class Instructions extends Component {
	render() {
		return (
			<div className="container" style={{ marginTop: "75px" }}>
				<div className="jumbotron indigo white-text">
					<h1>React News Scraper</h1>
					<h5>Hit the Scrape button to Scrape Articles</h5>
					<p>By: Matthew Belanic</p>
				</div>
			</div>
		);
	}
}
