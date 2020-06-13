const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser')

const userModel = require('./db_helpers/user_model')
const productModel = require('./db_helpers/product_model')
const reviewModel = require('./db_helpers/review_model')
const chatModel = require('./db_helpers/chat_model')

app.use((req,res,next) => {console.log(req.path); next() })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.post('/users', (req, res) => {  
  userModel.getInsertUser(req.body)
  .then(response => {
      res.status(200).json(response)
  })
  .catch(error => {
      console.error(error)
      res.status(500).send(error)
  })
})

app.get('/users/:userId/chat-currency', (req, res) => {
  const { userId } = req.params
  console.log(userId)
  userModel.getChatCurrencyCount(userId)
  .then(response => {
    console.log(response)
    res.status(200).send({ "chatExists": response })
  })
  .catch(error => {
    console.error('error', error)
    res.status(500).send(error)
  })
})

app.get('/chat/:customerId/:userId/:reviewId', (req, res) => {
  const { customerId, userId, reviewId } = req.params
  chatModel.checkIfPendingOrActiveChatExists(customerId, userId, reviewId)
  .then(response => {
    console.log(response)
    res.status(200).send(response)
  })
  .catch(error => {
    console.error('error', error)
    res.status(500).send(error)
  })
})

app.post('/chat', (req, res) => {
  chatModel.insertNewChatRequest(req.body)
  .then(response => {
    console.log(response)
    res.status(200).send(response)
  })
  .catch(error => {
    console.error('error', error)
    res.status(500).send(error)
  })
})

app.get('/chat/:userId', (req, res) => {
  const { userId } = req.params
  chatModel.getAllPendingChatRequestsForUser(userId)
  .then(response => {
    console.log(response)
    res.status(200).send(response)
  })
  .catch(error => {
    console.error('error', error)
    res.status(500).send(error)
  })
})

app.get('/products', (req, res) => {
  const { search } = req.query
  console.log(search) 
  productModel.getReviewedProducts(search)
    .then(response => {
      console.log(response)
      res.status(200).send(response)
    })
    .catch(error => {
      console.error('error', error)
      res.status(500).send(error)
    })
})

app.get('/reviews/:productId', (req, res) => {
  const { productId } = req.params
  reviewModel.getReviewersFromProductId(productId)
    .then(response => {
      console.log(response)
      res.status(200).send(response)
    })
    .catch(error => {
      console.error('error', error)
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

