const mongoose = require('mongoose')
const { Schema, model } = mongoose
const bcrypt = require('bcrypt')

const smartTravallerSchema = new Schema({
    full_name:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    nic_number:{
        type:String,required:true
    },
    birthdate:{
        type:String,required:true
    },
    contact_number:{
        type:String,required:true
    },
    profile_photo:{
        type:String,required:true
    },
    license:{
        type:String,required:true
    },
    guilding_place:{
        type:String,required:true
    },
    password:{
        type:String,required:true
    }
})


module.exports = mongoose.models.smart_traveller || mongoose.model('smart_traveller',smartTravallerSchema)