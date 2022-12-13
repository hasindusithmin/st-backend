

const {Router} = require('express')
const travallerModel = require('../models/travaller')

const travallerRoute = Router()

travallerRoute.get('/',async(req,res)=>{
    try {
        const travallers = await travallerModel.find()
        res.status(200).json(travallers)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

travallerRoute.post('/',async(req,res)=>{
    try {
        const {first_name,last_name,email,date,address,phone_number,city,password} = req.body;
        const travaller = await travallerModel.create({first_name,last_name,email,date,address,phone_number,city,password})
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = travallerRoute;

