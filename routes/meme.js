const routes = require('express').Router();
const memeController = require('../controllers/meme')
const multer = require('../middlewares/multer')
const gcs = require('../middlewares/gcs')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

routes.get('/findall', memeController.find)
routes.post('/add',authentication, multer.single('img'), gcs, memeController.create)
routes.delete('/delete/:id',authentication, authorization, memeController.delete)

module.exports = routes