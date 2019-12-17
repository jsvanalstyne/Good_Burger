var express = require("express");

var router = express.Router();

// Importing the burger.js model
var burgers = require("../models/burger.js");
// Route to dispay all burgers
router.get("/", function(req, res){
    burgers.selectAll(function(data) {
        var burgerObject = {
            burger: data
          
        };
        res.render("index", burgerObject);
      });
})
router.post("/api/burgers", function(req, res) {
    burgers.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

router.put("/api/burgers/:id", function(req, res){
    // Takes user selected burger and updates the burger to be devoured. 
        var condition = "id = " + req.params.id;
    //   Using the burger.js in the models, we can update the devoured status. 
        burgers.updateOne({
          devoured: true
        }, condition, function(result) {
          if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
    
})
module.exports= router;