export const acceptChat = async (reviewerId, customerId, reviewId) => {
    try {
        return await fetch(`/db/chat/accept/${reviewerId}/${customerId}/${reviewId}`, {
            method: 'PATCH'
        })
    } catch (error) {
        console.error(error)
    }
}