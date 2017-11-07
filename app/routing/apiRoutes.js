const express = require('express');
const path = require('path');
const app = module.exports = express();
const friends = require('../data/friends.js');

app.get("/api/friends", function(req, res) {
    //will display all friends
    return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    //will handle results from the survey
    
    //compare the newFriend against all other friends
    //determine the lowest "difference" between newFriend and other friends
    //display the best match
    const newFriend = req.body;
    console.log(newFriend);
    
    friends.push(newFriend);
    return res.json(friends);
});

