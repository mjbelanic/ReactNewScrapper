const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/Articles");
require("./models/Comments");
const app = express();

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
  const path = require("path");
  app.use(express.static(path.join(__dirname, "client/build")));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
