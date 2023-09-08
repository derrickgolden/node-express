
const express = require('express')
const app = express()

const router = express.Router()

router.post('/', (req, res) =>{
    console.log(req.body)
    res.send("POST")
})

module.exports = router;