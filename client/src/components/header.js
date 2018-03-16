import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default props => {
	return (
		<Navbar inverse collapseOnSelect fixedTop fluid>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/">React News Scraper</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href="/api/scrape">
						Scrape
					</NavItem>
					<NavItem eventKey={2} href="/articles">
						Articles
					</NavItem>
					<NavItem eventKey={3} href="/saved">
						Saved Articles
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
