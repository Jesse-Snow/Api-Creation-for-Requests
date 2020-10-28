const port = 3003

const express = require("express")
const application = express()

application.get("/products",(req,res,next) =>{
    res.send({name:"Sword",price:564.99})
})

application.listen(port,() => {
    console.log(`Using port:${port}`)
})
