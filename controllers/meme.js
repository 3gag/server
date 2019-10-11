const Meme = require('../models/meme')
const gcsDelete = require('../helpers/gcsdelete')

class MemeController {
<<<<<<< HEAD
  static create(req, res, next) {
    res.status(200).json(req.file)
    // let { img } = req.body
    const img = req.file.cloudStoragePublicUrl
    Meme.create({ img })
      .then(dataCreate => {
        res.status(201).json(dataCreate)
      })
      .catch(next)
=======
  static create( req, res, next){
    const { title } = req.body
    const img = req.file.cloudStoragePublicUrl
    const userId = req.user.id
    Meme.create({ title, img , userId})
      .then(dataCreate => {
        res.status(200).json(dataCreate)
      })
      .catch( next )
>>>>>>> b1f8fbc802db6416734fd64de0cc0b2d14568e02
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
<<<<<<< HEAD
    Meme.finOneAndRemove({ _id: id })
      .then(deleteMeme => {
        res.status(201).json(deleteMeme)
=======
    Meme.findById(id)
      .then(result => {
        gcsDelete(result.img)
        return Meme.findByIdAndDelete(id)
      })
      .then( () => {
        res.status(200).json('Meme Deleted')
>>>>>>> b1f8fbc802db6416734fd64de0cc0b2d14568e02
      })
      .catch(next)
  }
<<<<<<< HEAD

=======
>>>>>>> b1f8fbc802db6416734fd64de0cc0b2d14568e02
}

module.exports = MemeController