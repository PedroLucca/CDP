const Sequelize = require('sequelize');
const connection = require('./database');


const User = connection.define('users', {
    usuario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.STRING(11),
        allowNull: false
    },
    contato:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }

});


 const Donation = connection.define('donations', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    numero:{
        type: Sequelize.STRING(16),
        allowNull: false
    },
    validade:{
        type: Sequelize.STRING(4),
        allowNull: false
    },
    cvv:{
        type: Sequelize.STRING(3),
        allowNull: false
    },
    valor:{
        type: Sequelize.DOUBLE,
        allowNull: false
    }

 });


//User.hasMany(Card);
//Card.hasMany(Donation);
User.hasMany(Donation);

User.sync({force:false}).then(()=> {});
//Card.sync({force: false}).then(()=>{});
Donation.sync({force: false}).then(()=>{});


module.exports = {user:User, donation: Donation};