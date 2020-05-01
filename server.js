const express = require("express")

const app = express()
console.log
app.post('/', function (req, res, next) {
  let content = req.body;
  if (content.username && content.password) { 
      return res.status(200).json("user logged in");
  }
  if (content.email && content.password) { 
    return res.status(201).json("user created");
}
if (content.username && content.hash) { 
  return res.status(200).json("user forgot password");
}
  return res.status(404).json('user not found');
});

module.exports = app
