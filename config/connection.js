var Sequelize = require('sequelize');
var sequelize;
//var mysql = require('mysql');
var env;
if (process.env.JAWSDB_URL)
    env = "production";
else {
    env = 'development';
}
var connection;
var config = require('./config')[env];
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect
    });
    //     host: "127.0.0.1",
    //     user: "root",
    //     password: "root",
    //     database: "burgers_db"
    // });
};


module.exports = sequelize;