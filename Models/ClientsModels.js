const mongoose = require('mongoose')


const Schema = mongoose.Schema

const ClientsModels = new Schema (
  {
    nombres: {type: String, require: true}, 
    apellidos: {type: String, require: true}, 
    nacimiento: {type: String, require: true},
    genero: {type: String, require: true}, 
    telefono: {type: Number, require: true}, 
    email : {type: String, require: true, unique: true},
  },
  {
    timestamps: true,    
    versionKey: false
  }
)

module.exports = mongoose.model("Clients", ClientsModels)