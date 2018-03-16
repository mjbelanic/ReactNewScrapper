const path = require("path");
var request = require("request");
var cheerio = require("cheerio");
var Article = require("../models/Articles");
var Comment = require("../models/Comments");
const mongoose = require("mongoose");

module.exports = app => {
	//Scrape function
	mongoose.Promise = global.Promise;
	mongoose.connect(
		process.env.MONGODB_URI || "mongodb://localhost/newScrapper",
		{
			useMongoClient: true
		}
	);
	const db = mongoose.connection;

	app.get("/api/scrape", async (req, res) => {
		//remove all articles the user has not saved.
		var count = 0;
		var collection = db.collection("articles");
		collection.deleteMany({ saved: false }, function(err, result) {
			console.log("Unsaved articles removed.");
		});
		await request("https://news.ycombinator.com/", function(
			error,
			response,
			html
		) {
			var $ = cheerio.load(html);
			$("span.comhead").each(function(i, element) {
				var title = $(this).prev();
				var subtext = title
					.parent()
					.parent()
					.next()
					.children(".subtext")
					.children();
				var results = {};
				results.title = title.text();
				results.link = title.attr("href");
				results.author = $(subtext)
					.eq(1)
					.text();
				// Using our Article model, create a new entry
				// This effectively passes the result object to the entry (and the title and link)
				var entry = new Article(results);
				// Now, save that entry to the db
				entry.save(function(err, doc, next) {
					// Log any errors
					if (err) {
						console.log(err);
					}
				});
			});
			res.redirect("/articles");
		});
	});

	//Get Articles
	app.get("/api/articles", async (req, res) => {
		// Grab every doc in the Articles array
		const articleList = await Article.find({}).select({});
		res.send(articleList);
	});

	//find saved articles
	app.get("/api/saved", async (req, res) => {
		// Grab every doc in the Articles array
		const savedArticleList = await Article.find({ saved: true }).select({});
		res.send(savedArticleList);
	});

	// Get a document item and change its saved value to the opposite
	app.post("/api/changeStatus", async (req, res) => {
		Article.updateOne(
			{ _id: req.body._id },
			{ $set: { saved: !req.body.saved } }
		).exec();
		const articleList = await Article.find({}).select({});
		res.send(articleList);
	});

	app.post("/api/removeSavedArticle", async (req, res) => {
		Article.updateOne(
			{ _id: req.body._id },
			{ $set: { saved: !req.body.saved } }
		).exec();
		const savedArticleList = await Article.find({ saved: true }).select({});
		res.send(savedArticleList);
	});

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});
};
