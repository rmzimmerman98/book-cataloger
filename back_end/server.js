const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Book = require('./models/books.js')

app.use(express.json())
app.use(cors())

app.post('/books', (req, res) => {
    Book.create(req.body)
    .then((createdBook) => {
        res.json(createdBook)
    })
})

app.get('/books', (req, res) => {
    Book.find({})
    .then((foundBooks) => {
        res.json(foundBooks)
    })
})

app.delete('/books/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
    .then((deletedBook) => {
        res.json(deletedBook)
    })
})

app.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedBook) => {
        res.json(updatedBook)
    })
})

app.listen(3000, () => {
    console.log('listening for books');
})
mongoose.connect('mongodb://127.0.0.1:27017/bookmern')
mongoose.connection.once('open', () => {
    console.log('connected to mongod');
})