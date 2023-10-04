const { nanoid } = require('nanoid');
const notes = require('./notes');

const homepage = (request, h) => {
    const response = h.response({
        status: 'success',
        message: 'Homepage'
    });
    return response;
}

const postNotesHandler = (request, h) => {
    const {title, tags, body} = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const note = {id, title, tags, body, createdAt, updatedAt}

    notes.push(note);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if(isSuccess){
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
                noteCreatedAt: createdAt,
                noteUpdatedAt: updatedAt
            }
        });
        response.code(201);
        return response;
    }else {
        const response = h.response({
            status: 'fail',
            message: 'Catatan gagal ditambahkan'
        });
        response.code(500);
        return response;
    }
}

const putNotesHandler = (request, h) => {
    const {id} = request.params;
    const {title, tags, body} = request.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id === id);

    if(index !== -1){
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt
        };

        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil diperbarui',
            data: {
                notetitle: title,
                noteTags: tags,
                noteBody: body,
                noteUpdatedAt: updatedAt
            }
        });
        response.code(200);
        return response;
    }else {
        const response = h.response({
            status: 'fail',
            message: 'Catatan gagal diperbarui'
        });
        response.code(404);
        return response;
    }
}

const deleteNotesHandler = (request, h) => {
    const {id} = request.params;

    const index = notes.findIndex((note) => note.id === id);

    if(index !== -1){
        notes.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil dihapus'
        });
        response.code(200);
        return response;
    }else {
        const response = h.response({
            status: 'fail',
            message: 'Catatan gagal dihapus'
        });
        response.code(404);
        return response;
    }
}

module.exports = { homepage, postNotesHandler, putNotesHandler, deleteNotesHandler};