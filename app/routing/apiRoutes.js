var friends = require("../data/friends");

module.exports = function (app) {
    // Return all friends in friends.js as JSON info
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);


        // Gets user info (name, photo, scores)
        var user = req.body;
        // converts to integer for the scores
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }
        // This will be the default friend
        var friendMatchIndex = 0;
        var minimumDiff = 40;
        // Starts a for loop with no difference and compares user with friend scores.
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                var diff = Math.abs(user.scores[j] - friends[i].scores[j]);

                totalDifference += diff;
            }
            // if new minimum score, it changes the friend match index and sets
            // a new minimum for the next comparisons 
            if (totalDifference < minimumDiff) {
                friendMatchIndex = i;
                minimumDiff = totalDifference;
            }
            // when a new friend match is made, it
            // gets pushed into the array
            friends.push(user);
            // displays on the friend match on browser to user
            res.json(friends[friendMatchIndex]);

        };
    });
};