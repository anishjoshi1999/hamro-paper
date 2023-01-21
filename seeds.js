const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const mongoose = require('mongoose')
const Info = require('./models/info')
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
const urls = {
    homePageURL:"https://img.freepik.com/free-vector/save-planet-concept-illustration-with-man-woman_23-2148509643.jpg?w=740&t=st=1674183605~exp=1674184205~hmac=6782935e81b3b0e40044d7d6ef534ed21e06bee3f1d807d2e397d31e00a1e0b1",
    viewAllURL:"https://img.freepik.com/premium-vector/map-nepal-red-background-with-long-shadow_601298-1023.jpg?w=2000",
    bottomURL:"https://img.freepik.com/free-vector/hand-drawn-people-planting-tree-illustration_23-2149214943.jpg?w=740&t=st=1674183563~exp=1674184163~hmac=edfdca322bae13e068a9f421a80aa15b8a088e6e6d36d7cfd61a9b1486284912",
    provinces:[
        {
            provinceName:"Province No. 1",
            provinceURL:"https://nepaltraveller.com/uploads/destination/province-no-1.png"
        },
        {
            provinceName:"Province No. 2",
            provinceURL:"https://nepaltraveller.com/uploads/destination/province-no-2.png"
        },
        {
            provinceName:"Province No. 3",
            provinceURL:"https://nepaltraveller.com/uploads/destination/province-no-3.png"
        },
        {
            provinceName:"Gandaki Pradesh",
            provinceURL:"https://nepaltraveller.com/uploads/destination/province-no-4.jpg"
        },
        {
            provinceName:"Province No. 5",
            provinceURL:"https://nepaltraveller.com/uploads/destination/province-no-5.png"
        },
        {
            provinceName:"Karnali Pradesh",
            provinceURL:"https://nepaltraveller.com/uploads/destination/province-no-6.jpg"
        },
        {
            provinceName:"Sudurpashchim Pradesh",
            provinceURL:"https://nepaltraveller.com/uploads/destination/province-no-7.jpg"
        }
    ]
}

app.get('/update',async(req,res)=> {
    // Delete all the existing InfoURL
    await Info.deleteMany({})
    // Insert New Urls into Info Collections
    try {
        const newInfos = await Info.insertMany(urls)
        console.log("New Infos added successfully")
        console.log(newInfos)
    } catch (error) {
        res.status(401).send({ message: "Cannot create all the newInsideData" || error.message });
    }
})