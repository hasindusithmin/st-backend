
const {Schema,model} = require('mongoose')
const bcrypt = require('bcrypt')

const shopOwnerSchema = new Schema({
    first_name:String,
    last_name:String,
    email:String,
    dob:String,
    address:String,
    contact:String,
    place:String,
    password:String
})

shopOwnerSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
})  

const shopOwnerModel = model('shopowner',shopOwnerSchema)

module.exports = shopOwnerModel;
