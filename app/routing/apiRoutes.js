app.get("/api/friends", function(req, res) {
    //will display all friends
    return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    //will handle results from the survey
    return res.json(friends);
});

