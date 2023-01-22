const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const mongoose = require('mongoose')
const Subject = require('./models/subject')
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
const subjectsInfo = [
            {
                subjectName: "English",
                subjectURL: "https://media.istockphoto.com/id/511281043/photo/multiethnic-group-of-children-and-english-concept.jpg?b=1&s=170667a&w=0&k=20&c=EWckAARo41_qko_9Iuf5m5YTrKSFh0HmG2jEM47LCX0="
            },
            {
                subjectName: "Nepali",
                subjectURL: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmVwYWx8ZW58MHx8MHx8&w=1000&q=80"
            },
            {
                subjectName: "Compulsory Mathematics",
                subjectURL: "https://media.istockphoto.com/id/636332456/photo/online-education-concept.jpg?b=1&s=170667a&w=0&k=20&c=t-cEbf4E2bR4hSzwa8T0GOvywSNCaX-Hq1iQbjQo1UE="
            },
            {
                subjectName: "Science",
                subjectURL: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVudGlmaWN8ZW58MHx8MHx8&w=1000&q=80"
            },
            {
                subjectName: "Optional Mathematics",
                subjectURL: "https://images.unsplash.com/photo-1635372722656-389f87a941b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0aGVtYXRpY3N8ZW58MHx8MHx8&w=1000&q=80"
            },
            {
                subjectName: "Social Studies",
                subjectURL: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29jaWFsJTIwc3R1ZGllc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            },
            {
                subjectName: "Environment, Population and Health",
                subjectURL: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZW52aXJvbm1lbnR8ZW58MHx8MHx8&w=1000&q=80"
            },
            {
                subjectName: "Computer Science",
                subjectURL: "https://images.unsplash.com/photo-1617240016072-d92174e44171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            },
            {
                subjectName: "Accountancy",
                subjectURL: "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjb3VudHxlbnwwfHwwfHw%3D&w=1000&q=80"
            }
        ]


app.get('/update', async (req, res) => {
    // Delete all the existing InfoURL
    await Subject.deleteMany({})
    // Insert New Urls into Info Collections
    try {
        const newInfos = await Subject.insertMany(subjectsInfo)
        console.log("New Infos added successfully")
        console.log(newInfos)
    } catch (error) {
        res.status(401).send({ message: "Cannot create all the newInsideData" || error.message });
    }
})