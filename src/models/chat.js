export const acceptChat = async (reviewerId, customerId, reviewId) => {
    const response = await fetch(`/db/chat/accept/${reviewerId}/${customerId}/${reviewId}`, {
            method: 'PATCH'
        })
    
    return response.ok
}

export const declineChat = async (reviewerId, customerId, reviewId) => {
    const response = await fetch(`/db/chat/decline/${reviewerId}/${customerId}/${reviewId}`, {
            method: 'PATCH'
        })
    
    return response.ok
}

export const checkPendingChats = (userId) => 
    new Promise((resolve, reject) => {
        fetch(`/db/chat/${userId}`)
        .then(response => response.json())
        .then(result =>{
            resolve({
                data: result,
                page: 1,
                totalCount: result.length
            })
        })
    })
