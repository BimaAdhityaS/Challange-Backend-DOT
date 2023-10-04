server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Kuku bima energi';
    }
});

module.exports = routes;