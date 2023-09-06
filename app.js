
const express = require('express')
const app = express()

const path = require('path')

// app.use(express.static('navbar-app'))

app.get('/', (req,res) =>{
    // res.sendFile(path.resolve(__dirname,'navbar-app','index.html'))
    res.json([{name:"Derrick"}])
})

app.all('*',(req, res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})
app.listen(5001, ()=> console.log("listening..."))