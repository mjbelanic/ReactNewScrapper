const path = require("path");
const router = require("express").Router();
var db = require("../models");
const commentRoutes = require("./comments");
var request = require("request");
var cheerio = require("cheerio");
var Article = require("./models/Article.js");

router.use("/comments" , commentRoutes);

//Scrape function
router.get("/", function(req, res){
    
        //remove all articles the user has not saved.
        var count = 0;
        
        var collection = db.collection('articles');
        collection.deleteMany({ saved: false}, function(err,result){
            console.log("Unsaved articles removed.")
        })
        request("http://www.c-sharpcorner.com/" , function(error, response, html){
            var $ = cheerio.load(html);
            $("ul#RecentActivity li.media div.media-body").each(function(i, element){
                var results = {};
                results.title = $(this).children("a").text();
                results.link = $(this).children("a").attr("href");
                results.author = $(this).children("a.author").text();
    
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
            res.redirect("/articles")
        });
    });

//Get Articles
router.get("/articles", function(req, res) {
    // Grab every doc in the Articles array
    Article.find({}, function(error, doc) {
      // Log any errors
      if (error) {
        console.log(error);
      }
      // Or send the doc to the browser as a json object
      else {
        var articleList = {articles: doc}
        res.render("articles",articleList);
      }
    });
  });

//find saved articles
router.get("/saved", function(req, res) {
    // Grab every doc in the Articles array
    Article.find({saved: true}, function(error, doc) {
      // Log any errors
      if (error) {
        console.log(error);
      }
      // Or send the doc to the browser as a json object
      else {
        var articleList = {articles: doc}
        res.render("articles",articleList);
      }
    });
  });
  
  // Get a document item and change its saved value to the opposite
  router.post("/saved/:id", function(req, res) {
    var isTrueSet = req.body.saved === "true";
      Article.findOneAndUpdate({_id: req.params.id}, {$set:{saved: !isTrueSet}}
      , function(err, results){
        if(err){
          console.log(err);
        }else{
         res.redirect("/articles");
        }
      });
});


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../newscrapper/build/index.html"));
  });
  
module.exports = router;