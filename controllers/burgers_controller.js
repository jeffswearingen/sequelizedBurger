// var express = require('express');
// var router = express.Router();
// var burger = require('./../models/burger');
//
// router.get('/', function(req, res) {
// 	res.redirect('/index');
// });
//
// router.get('/index', function(req, res) {
// 	burger.all(function(data) {
// 		var hbsObj = { burgers: data} ;
// 		res.render('index', hbsObj);
// 	});
// });
//
// router.post('/index/create', function(req, res) {
// 	burger.create(['burger_name', 'devoured', 'date'], [req.body.burger_name, '0', 'CURRENT_TIMESTAMP'], function(data) {
// 		res.redirect('/index');
// 	});
// });
//
// router.put('/index/update/:id', function(req, res) {
// 	var condition = req.params.id;
// 	burger.update({devoured: 1}, condition, function() {
// 		res.redirect('/index');
// 	});
// });
//
// module.exports = router;

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