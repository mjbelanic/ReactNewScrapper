const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
require("./models/Articles");
require("./models/Comments");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/ReactNewScrapper",
	{
		useMongoClient: true
	}
);

const db = mongoose.connection;

require("./routes/index")(app);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(__dirname));
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "index.html"));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
	console.log(`App running on PORT: ${PORT}`);
});
