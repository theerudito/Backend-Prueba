const Joy = require('@hapi/joi')


const SchemaRegister = Joy.object({
  nombres: Joy.string().min(6).max(255).required(),
  apellidos: Joy.string().min(6).max(255).required(),
  nacimiento: Joy.string().min(6).max(255).required(),
  genero: Joy.string().min(6).max(255).required(),
  telefono: Joy.string().min(6).max(10).required(),
  email: Joy.string().min(6).max(255).required().email(),
})

module.exports = SchemaRegister