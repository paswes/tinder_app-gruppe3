const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,

    database: 'postgres',
    password: '123',
    user: 'postgres',

    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
