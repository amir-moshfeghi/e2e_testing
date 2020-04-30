const express = require("express")

const app = express()
console.log
app.post('/', function (req, res, next) {
  let content = req.body;
  if (content.id) { 
      return res.status(201).json("user logged in");
  }
  return res.status(404).json('user not found');
});

module.exports = app
