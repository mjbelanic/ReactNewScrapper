import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Instructions from "./components/instructions";
import Articles from "./containers/Articles";
import SavedArticles from "./containers/SavedArticles";
import ArticleComments from "./containers/ArticleComments";
import NewCommentForm from "./containers/NewCommentForm";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact={true} path="/" component={Instructions} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/saved" component={SavedArticles} />
          <Route exact path="/:id/comments" component={ArticleComments} />
          <Route exact path="/:id/newComment" component={NewCommentForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
