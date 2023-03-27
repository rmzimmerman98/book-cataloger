const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    author: String, 
    publisher: String,
    summary: String,
    pages: Number,
    read: {type: Boolean, default: false}
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book