const db =  require('./index')

async function getInsertUser(userData) {
    return db.task('getInsertUser', async t => {
        const user = await t.oneOrNone('SELECT * FROM users WHERE unique_id = ${profile.sub}', userData);
        return user || await t.one('INSERT INTO users(unique_id, name, email) VALUES(${profile.sub}, ${profile.nickname}, ${profile.email}) RETURNING *', userData);
    });
}


module.exports = {
    getInsertUser
}