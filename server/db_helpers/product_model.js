const db = require('./index')

insertNewProduct = async (productData) => {
    productData.storeName = "walmart"
    return db.task('getInsertProduct', async t => {
        const product = await t.oneOrNone('SELECT * FROM product WHERE store_name = ${storeName} AND store_item_id = ${itemId}', productData)
        return product || await t.one('INSERT INTO product(store_name,product_name,store_item_id,small_image) VALUES (${storeName}, ${name}, ${itemId}, ${smallImage}) RETURNING *', productData)
    })
}

getReviewedProducts = async (searchKey) => {
    return db.task('getReviewedProduct', async t => {
        const reviewedProducts = await t.manyOrNone('SELECT * FROM product WHERE product_name LIKE $1', ['%' + searchKey + '%'])
        return reviewedProducts
    })
}

module.exports = {
    insertNewProduct,
    getReviewedProducts
}