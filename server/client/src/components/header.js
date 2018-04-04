import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<div>
				<div className="navbar-fixed">
					<nav>
						<div className="nav-wrapper indigo">
							<a href="/" className="brand-logo">
								React News Scraper
							</a>
							<a data-activates="mobile-demo" className="button-collapse">
								<i className="material-icons">menu</i>
							</a>
							<ul className="right hide-on-med-and-down">
								<li key="1">
									<a href="/api/scrape">Scrape</a>
								</li>
								<li key="2">
									<a href="/articles">Articles</a>
								</li>
								<li key="3">
									<a href="/saved">Saved Articles</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<ul className="side-nav blue-grey text-white" id="mobile-demo">
					<li key="4">
						<a href="/api/scrape">Scrape</a>
					</li>
					<li key="5">
						<a href="/articles">Articles</a>
					</li>
					<li key="6">
						<a href="/saved">Saved Articles</a>
					</li>
				</ul>
			</div>
		);
	}
}
