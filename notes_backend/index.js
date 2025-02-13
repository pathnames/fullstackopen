const Note = require('./models/note')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

let notes = [{ id: "1", content: "HTML is easy", important: true }, { id: "2", content: "Browser can execute only JavaScript", important: false }, { id: "3", content: "GET and POST are the most important methods of HTTP protocol", important: true }]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
    Note.find({}).then(notes => {
        res.json(notes)
    })
})

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id
    const note = notes.find(note => note.id === id)
    if (note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
})

app.post('/api/notes', (req, res) => {
    const body = req.body

    if (body.content === undefined) {
        return res.status(400).json({ error: 'content missing' })
    }
    const note = new Note({
        content: body.content,
        important: body.important || false
    })
    note.save().then(savedNote => {
        res.json(savedNote)
    })
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
