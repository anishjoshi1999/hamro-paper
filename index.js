const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
// Routes
const hpRoutes = require('./routes/hamroPaper/hpRoutes')
// Connection to MongoDB Atlas
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@hamropaper.73vdqph.mongodb.net/${process.env.MONGODB_ATLAS_COLLECTION}`
// Connection to Database
mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Serving on port ${process.env.PORT} `)
        })

        console.log("Connected to MongoDB Atlas open")
    })
    .catch((err) => {
        console.log("error found")
        console.log(err)
    })

// Configuration for express
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Hamro Paper  Routes
app.use('/', hpRoutes)

