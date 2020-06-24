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

export const requestChat = async (customerId, reviewerId, reviewId) => {
    let chatExistsAlready = false
    let chatCurrencyNotEnough = false
    let serverError = false
    let success = false

    const responseChatCurrency = await fetch(`/db/users/${customerId}/chat-currency`)
    const { chat_currency } = await responseChatCurrency.json()

    if ( chat_currency < 1 ){
        chatCurrencyNotEnough = true
    }

    const chatExistsResponse =  await fetch(`/db/chat/${customerId}/${reviewerId}/${reviewId}`)
    const chatExists = await chatExistsResponse.json()

    if ( chatExists ){
        chatExistsAlready = true
    }

    if (!responseChatCurrency.ok || !chatExistsResponse.ok){
        serverError = true
    }

    if ( !chatCurrencyNotEnough && !chatExistsAlready ){
        const initiateChatResponse = await fetch(`/db/chat`, {
            method: 'POST',
            body: JSON.stringify({
                customerId,
                reviewerId,
                reviewId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 

        serverError = !initiateChatResponse.ok
    }


    return {
        chatCurrencyNotEnough,
        chatExistsAlready,
        serverError
    }

        
}