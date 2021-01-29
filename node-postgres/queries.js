const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'tom',
    host: 'localhost',
    database: 'bingo',
    password: 'password',
    port: 5432
})

const getQuestions = (request, response) => {
    pool.query('SELECT * FROM questions', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getQuestions
}