

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
        const {shop_name,owner_name,email,license,address,phone_number,equipments,category,password} = req.body;
        const shopOwner = await shopOwnerModel.create({shop_name,owner_name,email,license,address,phone_number,equipments,category,password})
        res.status(200).json(shopOwner)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = shopOwnerRouter;

