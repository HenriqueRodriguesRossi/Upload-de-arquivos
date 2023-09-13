const express = require("express")
const app = express()
const bodyParser = require("body-parser")
require("dotenv").config()
require("./database/connection")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const pictureRouter = require("./router/pictureRouter")
app.use(pictureRouter)

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}!`)
})