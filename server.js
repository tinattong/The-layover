const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

// connect to mongoDB
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

//route to home
app.get('/', (req, res) => res.send('Hello Mongo'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

// Create an object containing dummy data to save to the database
var data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: 42
};