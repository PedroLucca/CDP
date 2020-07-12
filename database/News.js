const Sequelize = require('sequelize');
const connection = require('./database');


const news = connection.define('news', {

    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    subtitulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    autor:{
        type: Sequelize.STRING,
        allowNull: false
    },
    img:{
        type: Sequelize.BLOB("long"),
        allowNull: false
    }

});
 
news.sync({force: false}).then(()=>{});

module.exports = news;