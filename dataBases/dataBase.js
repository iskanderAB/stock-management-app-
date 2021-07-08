const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'sqliteStock', {
    dialect: 'sqlite',
    storage: 'dataBases/database.db'
});


module.exports = sequelize;
