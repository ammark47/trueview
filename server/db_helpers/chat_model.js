const db = require('./index')

const checkIfPendingOrActiveChatExists = async (customerId, userId, review_id) => {
    const chat = await db.oneOrNone('SELECT * FROM chat WHERE customer_id = $1 AND reviewer_id = $2 AND review_id = $3 AND (status = $4 OR status = $5)' , [customerId, userId, review_id, "ACTIVE", "PENDING"])
    return chat ? true : false
}

const insertNewChatRequest = async (chatInfo) => {
    return await db.none('INSERT INTO chat(customer_id, reviewer_id, status, review_id) VALUES (${customerId}, ${reviewerId}, ${status}, ${reviewId})', {...chatInfo, status: "PENDING"} )
}

module.exports = {
    checkIfPendingOrActiveChatExists,
    insertNewChatRequest
}