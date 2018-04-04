import { FETCH_SAVED_ARTICLES } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_SAVED_ARTICLES:
			return action.payload;
		default:
			return state;
	}
}
