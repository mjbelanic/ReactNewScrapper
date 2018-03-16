import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Articles from "./containers/Articles";
import SavedArticles from "./containers/SavedArticles";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route exact={true} path="/articles" component={Articles} />
					<Route exact path="/saved" component={SavedArticles} />
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
