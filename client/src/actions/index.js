import {
	FETCH_ARTICLES,
	FETCH_COMMENTS,
	GET_ARTICLES,
	FETCH_SAVED_ARTICLES
} from "./types";
import axios from "axios";

//Scrape website for articles and save them to database
export const getArticles = () => async dispatch => {
	const request = await axios.get("/api/scrape");
	return {
		type: GET_ARTICLES,
		payload: request
	};
};

//get articles from database
export const fetchArticles = () => async dispatch => {
	const res = await axios.get("/api/articles");
	dispatch({ type: FETCH_ARTICLES, payload: res.data });
};

//get saved articles from database
export const fetchSavedArticles = () => async dispatch => {
	const res = await axios.get("/api/saved");
	dispatch({ type: FETCH_SAVED_ARTICLES, payload: res.data });
};

export const changeStatus = article => async dispatch => {
	const res = await axios.post("/api/changeStatus", article);
	dispatch({ type: FETCH_ARTICLES, payload: res.data });
};

export const removeSavedArticle = article => async dispatch => {
	const res = await axios.post("/api/removeSavedArticle", article);
	dispatch({ type: FETCH_SAVED_ARTICLES, payload: res.data });
};

// export function fetchComments(articleId) {
// 	//get comments for article
// 	let comments = axios.get(articleId);
// 	//return object which will have all comments
// 	return {
// 		type: FETCH_ARTICLES,
// 		payload: comments
// 	};
// }
