const fastify = require('fastify');

const { sequelize, User } = require('./src/db');
const openapi = require('./src/openapi');
const UserSignUp = require('./src/schema/UserSignUp');
const login = require('./src/routes/login');


(async () => {
    const app = fastify();
    
    app.decorate('sequelize', sequelize);
    app.decorate('User', User);

    openapi(app);
    UserSignUp(app);
    login(app);

    await app.listen(9989, '0.0.0.0');
})();