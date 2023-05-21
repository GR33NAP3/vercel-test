const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const personController = require('./controllers/person')

const app = express()

//middlewares
app.use(express.json())

//routes
app.use('/people', personController)

const PORT = process.env.PORT

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

app.listen(PORT, console.log(`listening to port ${PORT}`))