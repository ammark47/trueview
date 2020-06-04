export const searchAllWalmartProducts = async ( searchKey ) => {
    try {
        const response = await fetch('/api/walmart/products/' + searchKey)
        const listOfProductsJson = await response.json()

        return listOfProductsJson["items"]
    } catch (error) {
        console.error(error)
    }
}

export const searchReviewedProducts = async ( searchKey ) => {
    try {
        const response = await fetch('/db/products?search=' + searchKey)
        const listOfProductsJson = await response.json()

        return listOfProductsJson
    } catch (error) {
        console.error(error)
    }
}