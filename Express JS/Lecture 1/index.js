//Lecture 1
const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send("Hello World")
})
app.listen(8000, () => {
    console.log("listening to port 8000");
})
//--------------------------------------