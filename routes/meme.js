const routes = require('express').Router();
const memeController = require('../controllers/meme')
const multer = require('../middlewares/multer')
const gcs = require('../middlewares/gcs')

routes.get('/findall', memeController.find)
routes.post('/add', multer.single('img'), gcs, memeController.create)
routes.delete('/delete', memeController.delete)

module.exports = routes