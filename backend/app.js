const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts')
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
const Post = require('./models/post')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect('mongodb+srv://deepak:J9BnJqrRdBivaNk7@cluster0-x0zun.mongodb.net/test?retryWrites=true&w=majority' ).then(
  (res) => {
   console.log("Connected to Database Successfully.")
  }
).catch(() => {
  console.log("Connection to database failed.");
});

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "Get, Post")
  next();
});
app.use('/api/posts' ,postRoutes);
module.exports = app