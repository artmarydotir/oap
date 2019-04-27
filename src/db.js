const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `${__dirname}/database.sqlite`,
});

class User extends Sequelize.Model { }
User.init({
    username: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: Sequelize.STRING,
}, { sequelize, modelName: 'user' });

sequelize.sync();

module.exports = {
    User,
    sequelize,
};