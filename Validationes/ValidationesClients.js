const Joy = require('@hapi/joi')


const SchemaRegister = Joy.object({
  nombres: Joy.string().min(5).max(255).required().messages({'string.base' : "debe ser un string",
  "string.empty" : "el campo nombre no debe estar vacio "
}),
  apellidos: Joy.string().min(4).max(255).required().messages(
    {
      "string.empty" : "el campo apellido no debe estar vacio ",
  }),
  nacimiento: Joy.string().min(10).max(11).required().messages({"string.empty" : "el campo nacimineto no debe estar vacio "}),
  genero: Joy.string().min(6).max(255).required().messages({"string.empty" : "el campo genero no debe estar vacio "}),
  telefono: Joy.string().min(10).max(10).required().messages(
    {
      "string.base" : "debe ser numero",
      "string.empty" : "el campo telefono no debe estar vacio ",
      "string.min" : "debe ser minimo 10 caracteres",
      "string.max" : "debe ser maximo 10 caracteres"
    }),
  email: Joy.string().min(6).max(255).required().email().messages({"string.empty" : "el campo email no debe estar vacio "}),
})

module.exports = SchemaRegister