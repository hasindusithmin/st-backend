const mongoose = require('mongoose')
const { Schema } = mongoose
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

smartTravallerSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

smartTravallerSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
};



module.exports = mongoose.models.smart_traveller || mongoose.model('smart_traveller',smartTravallerSchema)