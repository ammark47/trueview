const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser')

const userModel = require('./db_helpers/user_model')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

app.post('/user', (req, res) => {    
    userModel.getInsertUser(req.body)
    .then(response => {
        console.log(response)
        res.status(200).send(response)
    })
    .catch(error => {
        console.error(error)
        res.status(500).send(error)
    })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

