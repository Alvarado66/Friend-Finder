var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
    });

    // Gets user info (name, photo, scores)
    var user = req.body;
    // converts to integer for the scores
    for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    var friendMatchIndex = 0;
    var minimumDiff = 40;

    for(var i = 0; i < friends.length; i++) {
        var totalDifference = 0;

        for(var j = 0; j < friends[i].scores.length; j++) {
            var diff = Math.abs(user.scores[j] - friends[i].scores[j]);

            totalDifference += diff;
        }
    }
}
