export const insertNewProduct = async (product) => {
    try {
        return await fetch('/db/product/create', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export const searchAllWalmartProducts = async ( searchKey ) => {
    try {
        const response = await fetch('/api/walmart/products/' + searchKey)
        const listOfProductsJson = await response.json()

        return listOfProductsJson["items"]
    } catch (error) {
        console.error(error)
    }
}