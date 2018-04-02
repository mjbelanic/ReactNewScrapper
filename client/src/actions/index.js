import {
	FETCH_ARTICLES,
	FETCH_COMMENTS,
	GET_ARTICLES,
	FETCH_SAVED_ARTICLES
} from "./types";
import axios from "axios";

// Scrape website for articles and save them to database
export const getArticles = () => async dispatch => {
	const request = await axios.get("/api/scrape");
	return {
		type: GET_ARTICLES,
		payload: request
	};
};

// Get articles from database
export const fetchArticles = () => async dispatch => {
	const res = await axios.get("/api/articles");
	dispatch({ type: FETCH_ARTICLES, payload: res });
};

// Get saved articles from database
export const fetchSavedArticles = () => async dispatch => {
	const res = await axios.get("/api/saved");
	dispatch({ type: FETCH_SAVED_ARTICLES, payload: res.data });
};

// Alter status from unsaved to saved or vice versa.
export const changeStatus = article => async dispatch => {
	const res = await axios.post("/api/changeStatus", article);
	dispatch({ type: FETCH_ARTICLES, payload: res });
};

// Remove a saved article from the saved article page.
export const removeSavedArticle = article => async dispatch => {
	const res = await axios.post("/api/removeSavedArticle", article);
	dispatch({ type: FETCH_SAVED_ARTICLES, payload: res.data });
};

// Fetch article and comments relating to article
export const fetchComments = id => async dispatch => {
	const res = await axios.get(`/api/${id}/comments`);
	dispatch({ type: FETCH_COMMENTS, payload: res });
};

// Add a comment to a specific article in the database.
export const createComment = (id, values, callback) => async dispatch => {
	await axios.post(`/api/${id}`, values).then(() => callback(id));
};
