module.exports = (app) => {
    app.addSchema({
        $id: 'UserSignUp',
        title: 'User sign up',
        type: 'object',
        properties: {
            username: {
                type: 'string',
                description: 'this is qweqweqwewqe',
                example: 'mamad',
            },
            password: {
                type: 'string',
                description: 'this is qweqweqwweqw qwe qwe qweqwe ewqe',
                example: 'mamad123',
            },
        },
    });
};