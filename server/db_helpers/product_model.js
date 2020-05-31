const db = require('./index')

async function insertNewProduct(productData){
    productData.storeName = "walmart"
    return db.task('getInsertProduct', async t => {
        const product = await t.oneOrNone('SELECT * FROM product WHERE store_name = ${storeName} AND store_item_id = ${itemId}', productData)
        return product || await t.one('INSERT INTO product(store_name,product_name,store_item_id) VALUES (${storeName}, ${name}, ${itemId}) RETURNING *', productData)
    })
}

module.exports = {
    insertNewProduct
}