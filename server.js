const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("newscrapper/build"));
app.use(routes);

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/newScrapper",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function(){
    console.log(`App running on PORT: ${PORT}`);
});