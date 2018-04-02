import { combineReducers } from "redux";
import ArticleReducer from "./articleReducer";
import CommentReducer from "./commentReducer";
import SavedArticleReducer from "./savedArticleReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
	articles: ArticleReducer,
	comments: CommentReducer,
	savedArticles: SavedArticleReducer,
	form: formReducer
});

export default rootReducer;
