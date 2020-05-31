const db = require('./index')

const productModel = require('./product_model')

async function insertNewReview(reviewData){
    reviewData.userId = '1'
    return db.task('getInsertReview', async t => {
        const { id: productId } = await productModel.insertNewProduct(reviewData.product)
        reviewData.productId = productId
        const review = await t.oneOrNone("SELECT * FROM review WHERE product_id = ${productId} AND user_id = ${userId}", reviewData)
        return review || await t.one('INSERT INTO review(review_text,rating,user_id,product_id) VALUES (${review}, ${rating}, ${userId}, ${productId}) RETURNING *', reviewData)
    })
}

module.exports = {
    insertNewReview
}