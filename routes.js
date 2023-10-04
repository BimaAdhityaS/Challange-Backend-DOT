const {homepage} = require('./handler');
const {postNotesHandler} = require('./handler');
const {putNotesHandler} = require('./handler');
const {deleteNotesHandler} = require('./handler');

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