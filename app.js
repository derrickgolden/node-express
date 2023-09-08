
const express = require('express')
const app = express()

let {people} = require('./data')

app.use(express.static('methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/api/people', (req, res) =>{
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) =>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: "Enter valid name"})
    }
    res.status(201).json({success: true, person: name})
})

app.put('/api/people/:id', (req, res) =>{
    const {id} = req.params
    const {name} = req.body
    console.log(id, name)

    if(!name){
        return res.status(404).json({success: false, msg: "Enter to be updated"})
    }
    const person = people.find(per => per.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, msg: `No person with id: ${id}`})
    }else{
        const newPeople = people.map(pers =>{
            pers.id === Number(id) ? pers.name = name : null
            return pers
        })
        res.status(201).json({success: true, data: newPeople})
    }
})
app.delete('/api/people/:id', (req, res) =>{
    const {id} = req.params
    console.log(id)

    const person = people.find(per => per.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, msg: `No person with id: ${id}`})
    }else{
        const newPeople = people.filter(pers => pers.id !== Number(id))
        res.status(201).json({success: true, data: newPeople})
    }
})

app.post('/login', (req, res) =>{
    console.log(req.body)
    res.send("POST")
})

app.listen(5000, () => {
    console.log('Server is listening')
})