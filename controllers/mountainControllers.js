const knex = require('../db/connection')

const getAll = (req, res, next) => {
    
    return knex('mountain')
        .orderBy('id', 'asc')
        .then(mountains => res.json({mountains}))
        .catch(err => console.log('ERROR: ', err))
}
const getOne = (req, res, next) => {
    let rank = req.params.rank
    return knex('mountain')
        .select('*')
        .where({rank: rank})
        .then(mountain => res.json({mountain}))
        .catch(err => console.log('ERROR: ', err))
}
// const postMountain = (req, res, next) => {
    
//     return knex
// }
// const putMountain = (req, res, next) => {
    
//     return knex
// }
// const deleteMountain = (req, res, next) => {
    
//     return knex
// }

module.exports = {
    getAll,
    getOne,
    // postMountain,
    // putMountain,
    // deleteMountain
}