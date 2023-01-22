const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Info = require('../../models/info')
const Province = require('../../models/province')
const Year = require('../../models/year')
const Subject = require('../../models/subject')

router.get("/", async (req, res) => {
    const infos = await Info.find({})
    // Contains 7 provinces
    const provinces = await Province.find({}).sort({'provinceNumber':1}).limit(5)
    res.render('index', { title: "HamroPaper", provinces, infos: infos[0] })
})
router.get('/province', async (req, res) => {
    // Showing all the provinces of nepal
    const provinces = await Province.find({}).sort({'provinceNumber':1})
    res.render('show', { provinces })
})
router.get('/province/:id', async (req, res) => {
    // id is ProvinceNumber
    const { id } = req.params
    let provinces
    // Show all the available year of a specific Province
    const yearsData = await Year.find({}).sort({'year':1})
    res.render('show', { provinces, years:yearsData,id })
})
router.get('/province/:id/:year', async (req, res) => {
    const {id,year} = req.params
    // id means province and year is year
    let provinces
    let years
    const subjectsInfo = await Subject.find({})
    res.render('show', { provinces, years ,subjectsInfo,id,year})
})


module.exports = router
