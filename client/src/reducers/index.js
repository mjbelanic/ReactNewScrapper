import { combineReducers } from "redux";
import ArticleReducer from "./articleReducer";
//import CommentReducer from "./commentReducer";
import SavedArticleReducer from "./savedArticleReducer";

const rootReducer = combineReducers({
	articles: ArticleReducer,
	//comments: CommentReducer
	savedArticles: SavedArticleReducer
});

export default rootReducer;
