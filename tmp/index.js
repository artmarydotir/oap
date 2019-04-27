const fastify = require('fastify');
const fastifyOas = require('fastify-oas');
const Sequelize = require('sequelize');


(async () => {
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

    sequelize.sync()


    const app = fastify({
        // logger: true,
    });




    await app.listen(9989, '0.0.0.0');
})();