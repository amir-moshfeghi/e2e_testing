const express = require("express")

const app = express()
console.log
app.post("/api/v1/auth/login/", (req, res) => {
  res.send({
    "username": "amir5",
    "password": "1234569"
})
console.log(res)
})


module.exports = app