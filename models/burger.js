// var orm = require('./../config/orm');
// // interface with ORM commands
//
// var burger = {
//
// 	all: function(callback) {
// 		orm.selectAll('burgers', function(res) {
// 			callback(res);
// 		})
// 	},
//
// 	create: function(columns, burger, callback) {
// 		orm.insertOne('burgers', columns, burger, function(res) {
// 			callback(res);
// 		})
// 	},
//
// 	update: function(values, condition, callback) {
// 		var condition = 'id = ' + condition;
// 		var values = 'devoured = ' + values.devoured;
// 		orm.updateOne('burgers', values, condition, function(res) {
// 			callback(res);
// 		})
// 	}
//
// }

var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

// module.exports = burger;

// module.exports = function(sequelize, DataTypes) {

var Burger = sequelize.define("burgers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    burger_name: {
        type: Sequelize.STRING,
        validate: {
            isEmpty: false
        }
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false

});
Burger.sync();

var burger = {
    all: function(callback) {
        Burger.findAll({}).then(function(dbBurger) {
            callback(dbBurger);
        });
    },

    create: function(burger_name, callback) {
        Burger.create({
            burger_name: burger_name
        }).then(function() {
            callback();
        });
    },
    update: function(id, callback) {
        Burger.update({
            devoured: true
        },{
            where: { id : id }
        }).then(function() {
            callback();
        });
    }
};

module.exports = burger;
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

// module.exports = burger;