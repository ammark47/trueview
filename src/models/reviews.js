export const insertNewReview = async (review) => {
    try {
        return await fetch('/db/reviews/create', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export const getReviewersForProduct = async (productId) => {
    try {
        return await fetch(`/db/reviews/${productId}`, {
            method: 'GET'
        })
    } catch (error) {
        console.error(error)
    }
}

export const requestChat = async (customerId, reviewerId, productId) => {
    try {
        const response  = await fetch(`/db/users/${customerId}/chat-currency`)
        const { chat_currency: chatCurrency} = await response.json()
        
        
    } catch (error) {
        console.error(error)
    }
}