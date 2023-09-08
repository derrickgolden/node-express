
const express = require('express')
const routor = express.Router()

const {people} = require('../data')

routor.get('/', (req, res) =>{
    res.status(200).json({success: true, data: people})
})

routor.post('/', (req, res) =>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: "Enter valid name"})
    }
    res.status(201).json({success: true, person: name})
})
routor.post('/postman', (req, res) =>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: "Enter valid name"})
    }
    res.status(201).json({success: true, person: name})
})

routor.put('/:id', (req, res) =>{
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
routor.delete('/:id', (req, res) =>{
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

module.exports = routor;
