const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3111
const mountainRoutes = require('./routes/mountainRoutes')
const userRoutes = require('./routes/userRoutes')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => res.json({
    "Mountains": `http://localhost:${port}/mountains`,
    "User Mountains": `http://localhost:${port}/user_mountains`
}))
app.use('/mountains', mountainRoutes)
app.use('/user_mountains', userRoutes)



app.use(notFound)
app.use(errorHandler)

function notFound(err, req, res, next) {
    res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
    console.error('NOPE, LOL', err)
    const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port, () => console.log(process.env.NODE_ENV !== 'production' ? `I got you on http://localhost:${port}`: ''))
