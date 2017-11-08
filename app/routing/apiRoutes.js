const express = require('express');
const path = require('path');
const app = module.exports = express();
const friends = require('../data/friends.js');

const lowestDiff = [];
let count = 0;
let totalDifference;
let bestFriendIndex;

app.get("/api/friends", function(req, res) {
    //will display all friends
    return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    //will handle results from the survey
    
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
    bestFriendIndex = lowestDiff.indexOf(Math.min.apply(null, lowestDiff));
    
    console.log(friends[bestFriendIndex].name);
    console.log(friends[bestFriendIndex].photo);
    
    friends.push(newFriend);
    return res.send(friends[bestFriendIndex]);
});

//new end point
// /api/friends/id
//return friend by id + bestfriend id

app.get("/api/friends/", function(req, res) {
   
    console.log(friends[bestFriendIndex]);
    return res.send(friends[bestFriendIndex]);
    
});

