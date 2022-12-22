const express = require('express')
const app = express()
const db = require('./database')
const path = require('path')

const hbs = require('hbs')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('Views',path.join(__dirname))
app.set('view engine','hbs')
const blogRouter = require('./Routes/blogRouter')
const { urlencoded } = require('express')
app.use('/', blogRouter)

app.listen(3000,()=>{
    console.log("Server running")
})