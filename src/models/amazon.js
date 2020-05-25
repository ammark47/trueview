export const getProductsFromAmazon = ( searchKey ) => {
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