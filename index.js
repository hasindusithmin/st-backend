// install express with `npm install express` 
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const shopOwnerRoute = require('./routes/shop-owner')
const travallerRoute = require('./routes/travaller')
const app = express()

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => res.sendStatus(200))

app.use('/shop-owner',shopOwnerRoute)
app.use('/traveller',travallerRoute)

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.set('strictQuery', true);
mongoose.connect(DATABASE_URL)
    .then(()=>{
        app.listen(3000,()=>{
            console.log('DB connect\nServer Running Port:3000');
        })
    })
    .catch((err)=>{
        console.error(err.message);
    })

// export 'app'
module.exports = app