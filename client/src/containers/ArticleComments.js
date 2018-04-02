import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions";
import { Link } from "react-router-dom";
import _ from "lodash";

class ArticleComments extends Component {
	componentDidMount() {
		if (this.props.match.params) {
			const { id } = this.props.match.params;
			this.props.fetchComments(id);
		}
	}

	renderArticleComments(comments) {
		return _.map(comments.comments, comment => {
			return (
				<div key={comment._id} className="row">
					<div>
						<div className="card panel amber accent-4">
							<div className="card-content black-text">
								<span className="card-title">{comment.title}</span>
								<p>{comment.body}</p>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		if (!this.props.comments.articleTitle) {
			return <div>Loading</div>;
		}
		return (
			<div className="container " style={{ marginTop: "25px" }}>
				<div className="jumbotron indigo white-text">
					<h1>Comments for {this.props.comments.articleTitle}</h1>
				</div>
				<div>
					<Link className="red darken-4 btn btn-flat white-text" to="/articles">
						Back to Article List
					</Link>
					<Link
						className="indigo btn btn-flat right white-text"
						to={`/${this.props.comments.id}/newComment`}
					>
						<i className=" small material-icons right">comment</i>
						Add a Comment
					</Link>
				</div>
				{this.renderArticleComments(this.props.comments)}
			</div>
		);
	}
}

function mapStateToProps({ comments }) {
	return { comments };
}

export default connect(mapStateToProps, { fetchComments })(ArticleComments);
