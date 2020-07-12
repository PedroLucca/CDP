const sequelize = require("sequelize");
const connection = new sequelize("poti","root","pedromae02",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;