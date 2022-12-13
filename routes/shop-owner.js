

const {Router} = require('express')
const shopOwnerModel = require('../models/shop-owner')

const shopOwnerRouter = Router()

shopOwnerRouter.get('/',async(req,res)=>{
    try {
        const shopOwner = await shopOwnerModel.find()
        res.status(200).json(shopOwner)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

shopOwnerRouter.post('/',async(req,res)=>{
    try {
        const {first_name,last_name,email,date,address,phone_number,city,password} = req.body;
        const shopOwner = await shopOwnerModel.create({first_name,last_name,email,date,address,phone_number,city,password})
        res.status(200).json(shopOwner)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = shopOwnerRouter;

