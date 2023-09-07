
const express = require('express')
const app = express()

let {people} = require('./data')

app.use(express.static('methods-public'))

app.listen(5000, () => {
    console.log('Server is listening')
})