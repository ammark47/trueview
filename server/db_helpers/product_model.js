const db = require('./index')

async function insertNewProduct(productData){
    return db.task('getInsertProduct', async t => {
        const product = await t.oneOrNone('SELECT * FROM product WHERE store_name = ${store_name} AND product_name = ${product_name}', productData)
        return product || await t.one('INSERT INTO product(store_name,product_name,store_item_id) VALUES (${store_name}, ${product_name}, ${store_item_id}) RETURNING *', productData)
    })
}

module.exports = {
    insertNewProduct
}