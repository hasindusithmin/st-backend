// install express with `npm install express` 
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => res.sendStatus(200))

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