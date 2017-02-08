var express = require('express');
var router = express.Router();
var Burgers = require('./../models/burger');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function (req, res) {
    res.redirect('/index');
});

router.get('/index', function (req, res) {
    Burgers.findAll({}).then(function (data) {
        var hbsObj = {burgers: data};
        res.render('index', hbsObj);
    }).catch(function (err) {
        console.log(err);
    });
});
//
router.post('/index/create', function (req, res) {
    Burgers.create({
        burger_name: req.body.burger_name
    }).then(function(data) {
        res.redirect('/index');
    }).catch(function (err) {
        console.log(err);
    });
});
//
router.put('/index/update/:id', function (req, res) {
    var condition = req.params.id;
    Burgers.update({devoured: 1},
        {where: {id: req.params.id}
        }).then(function(data) {
            res.redirect('/index');
        }).catch(function (err) {
        console.log(err);
    });
});

module.exports = router;

