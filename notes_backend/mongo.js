const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://pjkpjk9000:${password}@cluster0.ge5aq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String, 
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

Note.find({important: true}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})
// const note = new Note({
//     content: 'HTML is Easy',
//     important: true
// })

// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })