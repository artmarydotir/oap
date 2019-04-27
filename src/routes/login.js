/**
 * @param {import('fastify').FastifyInstance} app
 */
module.exports = (app) => {
    app.route({
        method: 'POST',
        url: '/login',
        schema: {
            body: 'UserSignUp#',
            response: {
                201: {
                    type: 'string',
                    description: 'OK created',
                },
                406: {
                    type: 'string',
                    description: 'User is already exist',
                },
            },
        },
        handler: async (req, resply) => {
            const pUser = await app.User.findOne({
                where: {
                    username: req.body.username,
                },
            });
            if (pUser) {
                return resply.status(406).send('Already exist');
            }
            await app.User.create({
                username: req.body.username,
                password: req.body.password,
            });
            resply.status(201).send('ok');
        },
    });
};