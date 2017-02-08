var express = require('express');
var router = express.Router();
var burger = require('./../models/burger');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function (req, res) {
    res.redirect('/index');
});

router.get('/index', function(req, res) {
    burger.all(function(data) {
        var hbsObj = { burgers: data };
        res.render('index', hbsObj);
    });
});
//
router.post('/index/create', function (req, res) {
    burger.create([req.body.burger_names], function (data) {
        res.redirect('/index');
    });
});
//
router.put('/index/update/:id', function (req, res) {
    var condition = req.params.id;
    burger.update({devoured: 1}, condition, function () {
        res.redirect('/index');
    });
});

module.exports = router;

// var db = require("../models");
//
//
// // GET route for getting all of the posts
// router.get("/index", function (req, res) {
//     db.Burger.findAll({}).then(function (dbBurger) {
//         res.render('index', {burger: dbBurger});
//     });
// });
//
// // CREATE route for adding new burger
// router.post("/index/create", function (req, res) {
//     db.Burger.create({
//         burger_name: req.body.burger_name,
//         devoured: false,
//         // date: CURRENT_TIMESTAMP
//     }).then(function (dbBurger) {
//         res.redirect("/");
//     });
// });
//
// router.put("/index/update/:id", function (req, res) {
//     db.Burger.update({
//         burger_name: req.body.burger_name,
//         devoured: true,
//         date: req.body.date
//     }, {
//         where: {
//             id: req.params.id
//         }
//     }).then(function (dbBurger) {
//         res.redirect("/");
//     });
// });
//
//
// module.exports = router;