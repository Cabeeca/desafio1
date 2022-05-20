const express = require('express')
const route = express.Router()
const { _index, _create, _edit, _createNote, _editNote, _deleteNote } = require('../controllers/controller')

route.get('/', _index)
route.get('/create', _create)
route.get('/edit/:id', _edit)

route.post('/create', _createNote)
route.put('/edit/:id', _editNote)
route.delete('/delete/:id', _deleteNote)


module.exports = route