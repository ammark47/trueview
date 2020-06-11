const db =  require('./index')

const getInsertUser = async (userData) => {
    return db.task('getInsertUser', async t => {
        const user = await t.oneOrNone('SELECT * FROM users WHERE unique_id = ${profile.sub}', userData);
        return user || await t.one('INSERT INTO users(unique_id, name, email) VALUES(${profile.sub}, ${profile.nickname}, ${profile.email}) RETURNING *', userData);
    });
}

const getChatCurrencyCount = async (userId) => {
    return db.one('SELECT chat_currency FROM users WHERE id = $1', [userId])
}


module.exports = {
    getInsertUser,
    getChatCurrencyCount
}