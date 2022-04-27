const mongoose = require('mongoose')
require('dotenv').config()

const conection = mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Estas Conectado a la Base de Datos MONGODB"))
  .catch(() => console.log("Error al conectar a la base de datos de MONGODB"))

module.exports = conection