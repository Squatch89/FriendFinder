const express = require('express');
const path = require('path');
const app = module.exports = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});