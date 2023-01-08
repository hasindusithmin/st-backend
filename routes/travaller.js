

const {Router} = require('express')
const travallerModel = require('../models/travaller')
const jwt = require('jsonwebtoken')

const travallerRoute = Router()

travallerRoute.get('/',async(req,res)=>{
    try {
        const travallers = await travallerModel.find()
        res.status(200).json(travallers)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

travallerRoute.get('/logout',async(req,res)=>{
    try {
        res.cookie('token','',{maxAge:0})
        res.sendStatus(202)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

travallerRoute.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if (id == undefined) throw Error("id (params) is required.")
        const travaller = await travallerModel.findById(id)
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

travallerRoute.post('/register',async(req,res)=>{
    try {
        const {first_name,last_name,email,date,address,phone_number,city,password} = req.body;
        const travaller = await travallerModel.create({first_name,last_name,email,date,address,phone_number,city,password})
        const tkn = jwt.sign({travaller},'jwt-secret',{expiresIn:'1h'})
        res.cookie('token',tkn)
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

travallerRoute.put('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if (id == undefined) throw Error("id (params) is required.")
        const {first_name,last_name,email,date,address,phone_number,city,password} = req.body;
        const travaller = await travallerModel.findByIdAndUpdate(id,{first_name,last_name,email,date,address,phone_number,city,password})
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

travallerRoute.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const travaller = await travallerModel.login(email,password)
        const tkn = jwt.sign({travaller},'jwt-secret',{expiresIn:'1h'})
        res.cookie('token',tkn)
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

travallerRoute.delete('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if (id == undefined) throw Error("id (params) is required.")
        const travaller = await travallerModel.findByIdAndDelete(id)
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})



module.exports = travallerRoute;

