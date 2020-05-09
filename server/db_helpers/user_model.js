const db =  require('./index')

async function getInsertUser(userData) {
    return db.task('getInsertUser', async t => {
        const user = await t.oneOrNone('SELECT * FROM users WHERE name = ${profile.nickname}', userData);
        return user || await t.one('INSERT INTO users(name, email) VALUES(${profile.nickname}, ${profile.email}) RETURNING *', userData);
    });
 
}


module.exports = {
    getInsertUser
}