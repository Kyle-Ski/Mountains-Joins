const knex = require('../db/connection')

const getAll = (req, res, next) => {
    
    return knex('mountain')
        .orderBy('id', 'asc')
        .then(mountains => res.json({mountains}))
        .catch(err => console.log('ERROR: ', err))
}
const getOne = (req, res, next) => {
    let rank = req.params.rank
    if(!Number(rank)){
        res.json({error: 'Please enter a valid rank number'})
    } else {
        return knex('mountain')
            .select('*')
            .where({rank: rank})
            .then(mountain => {
                if(!mountain.length){
                    return res.json({error: 'That rank doesn\'t exist yet'})
                } else {
                    return res.json({mountain})
                }
            })
            .catch(err => console.log('ERROR: ', err))
    }
}
const postMountain = (req, res, next) => {
    const body = req.body
    return knex('mountain')
        .insert(body)
        .returning('*')
        .then(mountain => res.json({mountain: mountain[0]}))
}
// const putMountain = (req, res, next) => {
    
//     return knex
// }
const deleteMountain = (req, res, next) => {
    const id = req.params.id
    return knex('mountain')
        .where('id', id)
        .delete()
        .returning('*')
        .then(deleted => res.json({deleted: deleted[0]}))
        .catch(err => console.log('ERROR:', err))
}

module.exports = {
    getAll,
    getOne,
    postMountain,
    // putMountain,
    deleteMountain
}