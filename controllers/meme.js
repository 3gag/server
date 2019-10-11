const Meme = require('../models/meme')
const gcsDelete = require('../helpers/gcsdelete')

class MemeController {
  static create( req, res, next){
    const { title } = req.body
    const img = req.file.cloudStoragePublicUrl
    const userId = req.user.id
    Meme.create({ title, img , userId})
      .then(dataCreate => {
        res.status(200).json(dataCreate)
      })
      .catch( next )
  }

  static find(req, res, next) {
    Meme.find()
      .then(dataMeme => {
        res.status(200).json(dataMeme)
      })
      .catch(next)
  }

  static delete(req, res, next) {
    let id = req.params.id
    Meme.findById(id)
      .then(result => {
        gcsDelete(result.img)
        return Meme.findByIdAndDelete(id)
      })
      .then( () => {
        res.status(200).json('Meme Deleted')
      })
      .catch(next)
  }
}

module.exports = MemeController