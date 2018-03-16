import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";

class Articles extends Component {
	componentDidMount() {
		this.props.fetchArticles();
	}

	isSaved(article) {
		if (article.saved) {
			return (
				<button
					className="red btn-flat white-text"
					onClick={() => this.props.changeStatus(article)}
				>
					Remove from Saved Articles
				</button>
			);
		} else {
			return (
				<button
					className="teal btn-flat right white-text"
					onClick={() => this.props.changeStatus(article)}
				>
					Save Article
				</button>
			);
		}
	}

	renderArticles() {
		return this.props.articles.map(article => {
			return (
				<div key={article._id} className="panel panel-info">
					<div className="panel-heading">{article.title}</div>
					<div className="panel-body">
						<a href={article.link}>Link: {article.link}</a>
						<p>Author: {article.author}</p>
						{this.isSaved(article)}
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="container" style={{ marginTop: "75px" }}>
				<div className="jumbotron bg-primary">
					<h1>Scraped Articles</h1>
				</div>
				{this.renderArticles()}
			</div>
		);
	}
}

function mapStateToProps({ articles }) {
	return { articles };
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchComments: fetchComments }, dispatch);
// }

export default connect(mapStateToProps, actions)(Articles);
