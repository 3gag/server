const routes = require('express').Router();
const userRoutes = require('../routes/user')
const memeRoutes = require('../routes/meme')

routes.use('/user', userRoutes)
routes.use('/meme', memeRoutes)

module.exports = routes
