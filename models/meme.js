const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memeSchema = new Schema({
  img: {
    type : String
  },
  userId:{
    type: mongoose.ObjectId, ref:"User"
  } 
}, { timestamps: true })

const Meme = mongoose.model('Meme', memeSchema)
module.exports = Meme

