import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";

class SavedArticles extends Component {
	componentDidMount() {
		this.props.fetchSavedArticles();
	}

	renderSavedArticles() {
		return this.props.savedArticles.map(article => {
			return (
				<div>
					<div className="panel panel-info">
						<div className="panel-heading">{article.title}</div>
						<div className="panel-body">
							<a href={article.link}>Link: {article.link}</a>
							<p>Author: {article.author}</p>
							<button
								className="red btn-flat white-text"
								onClick={() => this.props.removeSavedArticle(article)}
							>
								Remove from Saved Articles
							</button>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="container" style={{ marginTop: "75px" }}>
				<div className="jumbotron bg-primary">
					<h1>Saved Articles</h1>
				</div>
				{this.renderSavedArticles()}
			</div>
		);
	}
}

function mapStateToProps({ savedArticles }) {
	return { savedArticles };
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchComments: fetchComments }, dispatch);
// }

export default connect(mapStateToProps, actions)(SavedArticles);
