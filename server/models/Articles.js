var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: false
	},
	saved: {
		type: Boolean,
		required: true,
		default: false
	},
	comments: {
		type: [Schema.Types.ObjectId],
		ref: "Comment"
	}
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
