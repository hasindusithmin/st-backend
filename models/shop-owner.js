
const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const shopOwnerSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    address: { type: String, required: true },
    phone_number: { type: String, required: true },
    city: { type: String, required: true },
    password: { type: String, required: true }
})

shopOwnerSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const shopOwnerModel = model('shopowner', shopOwnerSchema)

module.exports = shopOwnerModel;
