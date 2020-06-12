const db = require('./index')

const checkIfPendingOrActiveChatExists = async (customerId, userId, review_id) => {
    const chat = await db.oneOrNone('SELECT * FROM chat WHERE customer_id = $1 AND reviewer_id = $2 AND review_id = $3 AND (status = $4 OR status = $5)' , [customerId, userId, review_id, "ACTIVE", "PENDING"])
    return chat ? true : false
}

module.exports = {
    checkIfPendingOrActiveChatExists,
}