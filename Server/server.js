
const express = require('express')

const bodyParse = require('body-parser')

const cors = require('cors')

const PORT = 3037

const api = require('./routes/api')

const app= express()
app.use(cors())


app.use(bodyParse.json())

app.use('/api',api)

app.get('/', function(req, res)
{
    res.send('Hello From server')
})

app.listen(PORT,function(){
    console.log('Server Running on localhost:'+ PORT)
})
