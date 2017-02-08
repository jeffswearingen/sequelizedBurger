var db = require("../models");

module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/index", function (req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    // CREATE route for adding new burger
    app.post("/index/create", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: false,
            date: CURRENT_TIMESTAMP
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
    });

    app.put("/index/update/:id", function (req, res) {
        db.Burger.update({
            burger_name: req.body.burger_name,
            devoured: true,
            date: req.body.date
        }, {
            where: {
                id: req.params.id
            }
        });
    });
}