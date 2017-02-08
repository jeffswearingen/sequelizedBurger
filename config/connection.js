// var Sequelize = require('sequelize');
//
// var env;
//
// if (process.env.JAWSDB_URL)
//     env = "production";
// else {
//     env = "development";
// }
//
// var config = require('./config')[env];
//
// var sequelize;
//
// if (config.use_env_variable) {
//     sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//     sequelize = new Sequelize(config.database, config.username, config.password, {
//         host: config.host,
//         dialect: config.dialect
//     });
// }
//
// module.exports = sequelize;

var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;