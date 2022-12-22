const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./database')
const path = require('path')

const hbs = require('hbs')
require('dotenv').config()

//using cors
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//setting up hbs as the view engine
app.set('Views',path.join(__dirname))
app.set('view engine','hbs')

//setting the routers
const blogRouter = require('./Routes/blogRouter')
app.use('/', blogRouter)

//listening to the port
app.listen(3000,()=>{
    console.log("Server running")
})