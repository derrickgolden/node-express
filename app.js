
const express = require('express')
const app = express()
const { products } = require('./data')

const path = require('path')

// app.use(express.static('navbar-app'))

app.get('/products/:id', (req,res) =>{
    const {id} = req.params
    const prod = products.find((product) => product.id === Number(id))
    // res.sendFile(path.resolve(__dirname,'navbar-app','index.html'))
    res.json(prod)
})

app.get('/api/v1/query/?', (req,res) =>{
    console.log(req.query)
    const {search, limit} = req.query

    let sortedProducts = [...products]
    if(search){
        sortedProducts = products.filter(product => product.name.startsWith(search))
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    res.status(200).send(sortedProducts)
})

app.all('*',(req, res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})
app.listen(5001, ()=> console.log("listening..."))