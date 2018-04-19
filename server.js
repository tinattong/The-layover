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
