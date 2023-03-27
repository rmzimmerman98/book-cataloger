const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Book = require('./models/books.js')

app.use(express.json())

app.get('/books', (req, res) => {
    console.log('Hello books!');
})

app.listen(3000, () => {
    console.log('listening for books');
})
mongoose.connect('mongodb://127.0.0.1:27017/bookmern')
mongoose.connection.once('open', () => {
    console.log('connected to mongod');
})