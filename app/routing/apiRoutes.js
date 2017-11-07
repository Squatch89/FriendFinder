const express = require('express');
const path = require('path');
const app = module.exports = express();
const friends = require('../data/friends.js');

const lowestDiff = [];
let count = 0;
let totalDifference;

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
    do {
        totalDifference = 0;
        for (let i = 0; i < newFriend.scores.length; i++) {
            totalDifference += Math.abs(parseInt(newFriend.scores[i] - friends[count].scores[i]));
            console.log(totalDifference);
        }
        lowestDiff.push(totalDifference);
        count++;
    }
    while (count < friends.length);
    
    console.log(lowestDiff);
    
    console.log(lowestDiff.indexOf(Math.min.apply(null, lowestDiff)));
    
    friends.push(newFriend);
    return res.json(friends);
});

