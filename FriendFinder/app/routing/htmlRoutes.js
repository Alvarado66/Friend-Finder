var path = require("path");



module.exports = function (app) {
    // User can enter survey with URL or press Survey button.
    // Gives the user the HTML File.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));

    })

    // Defualt route that loads to home page.
    // app.use(function(req, res) {
    //     res.sendFile(path.join(__dirname, "/../public/home.html"));
    // })

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    })
}