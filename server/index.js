const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/Articles");
require("./models/Comments");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ReactNewScrapper",
  {
    useMongoClient: true
  }
);

require("./routes/index")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
