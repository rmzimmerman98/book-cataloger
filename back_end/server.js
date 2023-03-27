const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

app.get('/', (req, res) => {
    console.log('Hello world!');
})

app.listen(3000, () => {
    console.log('listening for books');
})
mongoose.connect('mongodb://127.0.0.1:27017/bookmern')
mongoose.connection.once('open', () => {
    console.log('connected to mongod');
})