// Our newest addition to the dependency family
var mongoose = require("mongoose");

// Requiring the `Travel` model for accessing the `travel` collection
var Travel = require("./travelModel.js");

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/schematravel", {
  useMongoClient: true
});

// Create an object containing dummy data to save to the database
var data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: 42
};

// Save a new Example using the data object
Travel.create(data)
  .then(function(dbTravel) {
    // If saved successfully, print the new Example document to the console
    console.log(dbTravel);
  })
  .catch(function(err) {
    // If an error occurs, log the error message
    console.log(err.message);
  });
