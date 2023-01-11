
const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const guiderSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    license: { type: String, required: false },
    nic: { type: String, required: true },
    dob: { type: Date, required: false },
    // photo: { type: String, required: true },
    guiding_place: { type: String, required: false },
    phone_number: { type: String, required: false },
    password: { type: String, required: true }
})

guiderSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

guiderSchema.statics.login = async function (email, password) {
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

const guiderModel = model('guider', guiderSchema)

module.exports = guiderModel;
