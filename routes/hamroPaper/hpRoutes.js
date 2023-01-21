const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Info = require('../../models/info')

router.get("/",async(req,res)=> {
    const infos = await Info.find({})
    // Contains 7 provinces
    const {provinces} = infos[0]
    res.render('index',{title:"Homepage",provinces:provinces.slice(0,5),infos:infos[0]})
})


module.exports = router
