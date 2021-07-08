const  sequelize = require('../dataBases/dataBase');
const product = require('../models/product');
const user = require('../models/user');


async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


const init = async () => {
    sequelize
        .sync()
        .then(result => {
            console.log( "results => " , result );
        })
        .catch(err => {
            console.log(err);
        });
    console.log('Tables have synced!')
}

module.exports= {
    testConnection,
    init
}
