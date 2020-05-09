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