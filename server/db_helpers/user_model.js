// const Pool = require('pg').Pool

// const pool = new Pool({
//     user: 'my_user',
//     host: 'localhost',
//     database: 'trueview_database',
//     password: 'root',
//     port: 5432,
//   });

//   const getUsers = (request, response) => {
//     pool.query('SELECT * FROM public.users', (error, results) => {
//       if (error) {
//         throw error
//       }
//       console.log('results', results.rows)
//       response.status(200).json(results.rows)
//     })
//   }

// const getUsers = () => {
//     return new Promise(function(resolve, reject) {
//         pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//             if (error) {
//                 reject(error)
//                 return
//             }
//             if (results === undefined) {
//                 console.log('rejecting')
//                 reject('no users')
//                 return
//             }
//             resolve(results.rows)
//         })
//     })
// }
//
const pgp = require('pg-promise')();
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'trueview_database',
    user: 'my_user',
    password: 'root',
    max: 30 
}
const db = pgp(connection);


const getUser = async (username) => {
    return await db.any('SELECT * FROM users WHERE name = $1', [username])     
}

// const createUser = async (username) => {

// }
async function getInsertUser(userData) {
    return db.task('getInsertUser', async t => {
        const user = await t.oneOrNone('SELECT * FROM users WHERE name = ${profile.nickname}', userData);
        return user || await t.one('INSERT INTO users(name, email) VALUES(${profile.nickname}, ${profile.email}) RETURNING *', userData);
    });
 
}

// const createUser = (body) => {
//     return new Promise(function(resolve, reject) {
//         const { name, email, chatToken } = body
//         pool.query('INSERT INTO users (name, email, chat_token) VALUES ($1, $2, $3) RETURNING *', [name, email, chatToken], (error, results) => {
//             if(error){
//                 reject(error)
//                 return
//             }
//             resolve( `A new user has been added: ${results.rows[0]}` )
//         })
//     })
// }

module.exports = {
    getUser ,
    // createUser,
    // getUser
    getInsertUser
}