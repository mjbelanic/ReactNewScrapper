import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { Link } from "react-router-dom";

class SavedArticles extends Component {
  componentDidMount() {
    this.props.fetchSavedArticles();
  }

  renderSavedArticles() {
    return this.props.savedArticles.map(article => {
      return (
        <div key={article._id} className="row">
          <div>
            <div className="card panel amber accent-4">
              <div className="card-content black-text">
                <span className="card-title">{article.title}</span>
                <p>Link:</p>
                <a href={article.link}>{article.link}</a>
                <p>Author: {article.author}</p>
              </div>
              <div className="card-action">
                <button
                  className="red darken-4 btn-flat white-text"
                  style={{ marginRight: "10px" }}
                  onClick={() => this.props.removeSavedArticle(article)}
                >
                  <i className=" small material-icons right">save</i>
                  Remove from Saved Articles
                </button>
                <Link
                  className="indigo btn btn-flat  white-text"
                  to={`/${article._id}/comments`}
                >
                  <i className=" small material-icons right">comment</i>
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

export default connect(mapStateToProps, actions)(SavedArticles);
