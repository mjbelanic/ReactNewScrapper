import { FETCH_ARTICLES } from "../actions/types";
import _ from "lodash";

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_ARTICLES:
			return _.mapKeys(action.payload.data, "_id");
		default:
			return state;
	}
}
