const EventEmitter = require('events')
const http = require('http')

const server = http.createServer((req,res)=>{

})

server.on("request", (req, res) =>{
    res.write("hello wolrd")
    res.end()
})

const customEmitter = new EventEmitter()
const customEmitt = new EventEmitter()
customEmitter.on("request", () =>{
    console.log("request")
})
customEmitt.on("request", () =>{
    console.log("request2")
})

server.listen(8000)

customEmitter.emit("request")
customEmitt.emit("request")