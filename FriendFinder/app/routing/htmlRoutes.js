var path = require("path");



module.exports = function(app) {
    // User can enter survey with URL or press Survey button.
// Gives the user the HTML File.
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));

})

// Routes user to homepage (Fallback)
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
})
}