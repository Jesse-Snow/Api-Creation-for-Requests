const port = 3003

const express = require("express")
const dataBase = require("./dataBase.js")
const application = express()

application.get("/products",(req,res,next) =>{
    res.send(dataBase.getAllProducts())
})

apllication.get("/products/:id",(req,res,next)=>{
    res.send(dataBase.getProduct(req.params.id))
})

apllication.post("/products",(req,res,next)=>{
    const product = dataBase.saveProduct({
        name:req.body.name,
        price:req.body.price
    })
    res.send(product) // JSON with the product Object information
})

application.listen(port,() => {
    console.log(`Using port:${port}`)
})
