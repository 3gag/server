const Meme = require('../models/meme')

class MemeController {
  static create(req, res, next) {
    res.status(200).json(req.file)
    // let { img } = req.body
    const img = req.file.cloudStoragePublicUrl
    Meme.create({ img })
      .then(dataCreate => {
        res.status(201).json(dataCreate)
      })
      .catch(next)
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
    Meme.finOneAndRemove({ _id: id })
      .then(deleteMeme => {
        res.status(201).json(deleteMeme)
      })
      .catch(next)
  }

}

module.exports = MemeController