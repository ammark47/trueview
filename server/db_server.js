const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser')
const { StreamChat } = require("stream-chat")

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

const STREAM_API_KEY = 'd2msy7mn26aa'
const STREAM_APP_SECRET = 'v65mjqbeq9axk6d69p2kd6mwr2hwg76tbu37dqbd2rve38jpja383d8m2ew5q3z8'

const serverStreamChat = new StreamChat(
  STREAM_API_KEY,
  STREAM_APP_SECRET
);

app.post('/users', async (req, res) => {  
  const { email, name } = req.body.profile
  // create stream chat user and token
  const chatUsername = email.replace(/([^a-z0-9_-]+)/gi, "_")
  const token = serverStreamChat.createToken(chatUsername)

  await serverStreamChat.setUser({
    id: chatUsername,
    name: name
  })

  serverStreamChat.disconnect()

  // create user in postgres
  userModel.getInsertUser({...req.body, token, chatUsername})
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

app.get('/users/:userId/chat-name', (req, res) => {
  const { userId } = req.params
  console.log(userId)
  userModel.getChatUsername(userId)
  .then(response => {
    console.log(response)
    res.status(200).send( response )
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

app.get('/chat/status/:reviewerId/:customerId/:reviewId', (req, res) => {
  const { customerId, reviewerId, reviewId } = req.params
  chatModel.getChatStatus(reviewerId, customerId, reviewId)
  .then(response => {
    console.log(response)
    res.status(200).send(response)
  })
  .catch(error => {
    console.error('error', error)
    res.status(500).send(error)
  })
})

app.patch('/chat/accept/:reviewerId/:customerId/:reviewId', (req, res) => {
  const { customerId, reviewerId, reviewId } = req.params
  chatModel.setChatStatusActive(reviewerId, customerId, reviewId)
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

app.get('/products/:productId', (req, res) => {
  const { productId } = req.params
  productModel.getProductInfo(productId)
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

