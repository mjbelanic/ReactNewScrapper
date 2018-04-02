import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticles, changeStatus } from "../actions/index";
import _ from "lodash";

class Articles extends Component {
	componentDidMount() {
		this.props.fetchArticles();
	}

	isSaved(article) {
		if (article.saved) {
			return (
				<button
					className="red darken-4 btn-flat white-text"
					style={{ marginRight: "10px" }}
					onClick={() => this.props.changeStatus(article)}
				>
					<i class=" small material-icons right">save</i>
					Remove from Saved Articles
				</button>
			);
		} else {
			return (
				<button
					className="indigo btn-flat  white-text"
					style={{ marginRight: "10px" }}
					onClick={() => this.props.changeStatus(article)}
				>
					<i class=" small material-icons right">save</i>
					Save Article
				</button>
			);
		}
	}

	renderArticles() {
		if (!this.props.articles) {
			return <div>Loading</div>;
		}
		return _.map(this.props.articles, article => {
			return (
				<div key={article._id} className="row">
					<div>
						<div className="card panel amber accent-4">
							<div className="card-content black-text">
								<span className="card-title">{article.title}</span>
								<p>
									Link:
									<a href={article.link}>{article.link}</a>{" "}
								</p>
								<p>Author: {article.author}</p>
							</div>
							<div className="card-action">
								{this.isSaved(article)}
								<Link
									className="indigo btn btn-flat  white-text"
									to={`/${article._id}/comments`}
								>
									<i class=" small material-icons right">comment</i>
									View Comments
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="container" style={{ marginTop: "25px" }}>
				<div className="jumbotron indigo white-text">
					<h1>Scraped Articles</h1>
				</div>
				{this.renderArticles()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { articles: state.articles };
}

export default connect(mapStateToProps, { fetchArticles, changeStatus })(
	Articles
);
