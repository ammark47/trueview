const express = require('express')
const app = express()
const port = 5000

const walmart = require('./walmart_api')


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/walmart/products/:searchQuery', async (req, res) => {
    const { searchQuery, start } = req.params
    try {
        const items = await walmart.getWalmartProducts(searchQuery, start)
        console.log(items)
        res.status(200).json(items)
    } catch (error) {
        res.status(500).send(error)
    }  
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))