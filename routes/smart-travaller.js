


const {Router} = require('express')
const smartTravallerModel = require('../models/smart-travaller')
const jwt = require('jsonwebtoken')

const smartTravallerRoute = Router()

smartTravallerRoute.get('/',async(req,res)=>{
    try {
        const travallers = await smartTravallerModel.find()
        res.status(200).json(travallers)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

smartTravallerRoute.get('/logout',async(req,res)=>{
    try {
        res.cookie('token','',{maxAge:0})
        res.sendStatus(202)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

smartTravallerRoute.get('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if (id == undefined) throw Error("id (params) is required.")
        const travaller = await smartTravallerModel.findById(id)
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

smartTravallerRoute.post('/register',async(req,res)=>{
    try {
        const {first_name,email,nic_number,birthdate,contact_number,profile_photo,license,guilding_place,password} = req.body;
        const travaller = await smartTravallerModel.create({first_name,email,nic_number,birthdate,contact_number,profile_photo,license,guilding_place,password})
        const tkn = jwt.sign({travaller},'jwt-secret',{expiresIn:'1h'})
        res.cookie('token',tkn)
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

smartTravallerRoute.put('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if (id == undefined) throw Error("id (params) is required.")
        const {first_name,email,nic_number,birthdate,contact_number,profile_photo,license,guilding_place,password} = req.body;
        const travaller = await smartTravallerModel.findByIdAndUpdate(id,{first_name,email,nic_number,birthdate,contact_number,profile_photo,license,guilding_place,password})
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

smartTravallerRoute.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const travaller = await smartTravallerModel.login(email,password)
        const tkn = jwt.sign({travaller},'jwt-secret',{expiresIn:'1h'})
        res.cookie('token',tkn)
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

smartTravallerRoute.delete('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if (id == undefined) throw Error("id (params) is required.")
        const travaller = await smartTravallerModel.findByIdAndDelete(id)
        res.status(200).json(travaller)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})



module.exports = smartTravallerRoute;

