const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser')

const userModel = require('./db_helpers/user_model')
const productModel = require('./db_helpers/product_model')
const reviewModel = require('./db_helpers/review_model')

app.use((req,res,next) => {console.log(req.path); next() })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.post('/user', (req, res) => {  
  console.log(req.body)  
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

app.post('/product/create', (req, res) => {
  console.log(req.body)
  productModel.insertNewProduct(req.body)
  .then(response => {
    console.log(response)
    res.status(200).send(response)
  })
  .catch(error => {
    console.error(error)
    res.status(500).send(error)
  })
})

app.post('/reviews/create', (req, res) => {
  reviewModel.insertNewReview(req.body)
  .then(response => {
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

