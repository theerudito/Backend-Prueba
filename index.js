const express = require('express')
const cors = require('cors')
const app = express()
const conection = require('./DataBase/db')
const Clients = require('./Router/Rutas')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//=========ROUTES===========
app.use("/api/clients", Clients)


app.get("/", (req, res) => {
  res.send("Hola soy el Backend")
})
//=========ROUTES===========


const port = process.env.PORT  || 8000
app.listen(port, () => console.log("SERVIDOR A SU SERVICIO EN EL PUERTO", port))