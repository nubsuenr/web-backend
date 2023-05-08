require('dotenv').config()
const express = require('express')
const cors  = require('cors')
// const mongoose = require('mongoose')
const Routes = require('./routes/routes')

const app  = express()

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.set('view engine', 'ejs');


//connection to database
// mongoose.set('strictQuery', true)
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => {
//         console.log('connected to database')
//     })
//     .catch((err) => {
//         console.log(err)
//     })
  


app.use(Routes)

app.listen(process.env.PORT, () =>{
    console.log("Started on http://localhost:"+process.env.PORT)
})