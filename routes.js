const {homepage} = require('./source/handler');
const {postNotesHandler} = require('./source/handler');
const {putNotesHandler} = require('./source/handler');
const {deleteNotesHandler} = require('./source/handler');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: homepage
    },
    {
        method: 'POST',
        path: '/',
        handler: postNotesHandler
    },
    {
        method: 'PUT',
        path: '/{id}',
        handler: putNotesHandler
    },
    {
        method: 'DELETE',
        path: '/{id}',
        handler: deleteNotesHandler
    }
];

module.exports = routes;