const path = require("path");
const router = require("express").Router();
var db = require("../models");
var Comment = require("./models/Note.js");
var Article = require("./models/Article.js");

// Create a new note or replace an existing note
router.get("/:id", function(req, res) {
    Comment.find({"_id": req.params.id}, function(error, doc) {
      // Log any errors
      if (error) {
        console.log(error);
      }
      // Or send the doc to the browser as a json object
      else {
        var commentList = {comment: doc}
        console.log(commentList);
        res.json(commentList);
      }
    });
  });
  
  
  
// Create a new note or replace an existing note
router.post("/:id", function(req, res) {
    // Create a new note and pass the req.body to the entry
    var newComment = new Comment(req.body);

    // And save the new note the db
    newComment.save(function(error, doc) {
    // Log any errors
    if (error) {
        console.log(error);
    }
    // Otherwise
    else {
        // Use the article id to find and update it's note
        Article.findOneAndUpdate({ "_id": req.params.id }, { $push: { "comment": doc._id }})
        // Execute the above query
        .exec(function(err, doc) {
        // Log any errors
        if (err) {
            console.log(err);
        }
        else {
            // Or send the document to the browser
            res.redirect("/articles");
        }
        });
    }
    });
});