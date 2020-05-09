export const insertNewProduct = (product) => {
    try {
        return await fetch('/db/product/', {
            method: 'POST',
            body: product,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error(error)
    }
}