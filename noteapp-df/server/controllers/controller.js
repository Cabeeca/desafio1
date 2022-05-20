let Notes = []

const _index = (req, res) => {
    res.render('index', { Notes })
}

const _create = (req, res) => {
    res.render('create')
}

const _edit = (req, res) => {
    const founded = Notes.find((note) => note.id == req.params.id)
    res.render('edit', { founded })
}

const _createNote = (req, res) => {
    const newNote = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    }

    Notes.push(newNote)

    res.redirect('/')
}

const _editNote = (req, res) => {
    const { title, content } = req.body

    const noteToEdit = Notes.find((note) => note.id == req.params.id)

    if (title){
        noteToEdit.title = title
    }

    if (content){
        noteToEdit.content = content
    }

    res.redirect('/')    
}

const _deleteNote = (req, res) => {
    Notes = Notes.filter((note) => note.id != req.params.id)
    
    res.redirect('/')
}

module.exports = { _index, _create, _edit, _createNote, _editNote, _deleteNote }