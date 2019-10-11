const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memeSchema = new Schema({
  img: {
    type : String
  },
  userId: {
    type: Schema.Types.ObjectId, ref:"User"
  },
  title: {
    type: String
  }
}, { timestamps: true })

const Meme = mongoose.model('Meme', memeSchema)
module.exports = Meme