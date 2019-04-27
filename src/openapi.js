const fastifyOas = require('fastify-oas');

/**
 * @param {import('fastify').FastifyInstance} app
 */
module.exports = (app) => {
    app.register(fastifyOas, {
        routePrefix: '/docs',
        exposeRoute: true,
        addModels: true,
        swagger: {
            info: {
                title: 'Test openapi',
                description: 'testing the fastify swagger api',
                version: '0.1.0',
            },
            consumes: ['application/json'],
            produces: ['application/json'],
            tags: [
            ],
            servers: [
            ],
        },
    });
};