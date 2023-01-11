

const {Router} = require('express')
const guiderModel = require('../models/guider-model')
const jwt = require('jsonwebtoken')

const guiderRouter = Router()

guiderRouter.get('/',async(req,res)=>{
    try {
        const guider = await guiderModel.find()
        res.status(200).json(guider)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

guiderRouter.get('/logout',async(req,res)=>{
    try {
        res.cookie('token','',{maxAge:0})
        res.sendStatus(202)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

guiderRouter.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if (id == undefined) throw Error("Id (param) is required.")
        const guider = await guiderModel.findById(id)
        res.status(200).json(guider)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

guiderRouter.post('/register',async(req,res)=>{
    try {
        const {name,password,nic} = req.body;
        const guider = await guiderModel.create({name,password,nic})
        const tkn = jwt.sign({guider},'jwt-secret',{expiresIn:'1h'})
        res.cookie('token',tkn)
        res.status(200).json(guider)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

guiderRouter.put('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const {shop_name,owner_name,email,license,address,phone_number,equipments,category,password} = req.body;
        const guider = await guiderModel.findByIdAndUpdate(id,{shop_name,owner_name,email,license,address,phone_number,equipments,category,password})
        res.status(200).json(guider)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

guiderRouter.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const guider = await guiderModel.login(email,password)
        const tkn = jwt.sign({guider},'jwt-secret',{expiresIn:'1h'})
        res.cookie('token',tkn)
        res.status(200).json(guider)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

guiderRouter.delete('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if (id == undefined) throw Error("Id (param) is required.")
        const guider = await guiderModel.findByIdAndDelete(id)
        res.status(200).json(guider)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})





module.exports = guiderRouter;

