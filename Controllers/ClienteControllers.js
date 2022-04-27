const Clients = require('../Models/ClientsModels')
const SchemaRegister = require('../Validationes/ValidationesClients')


//=========================MOSTRAR TODOS LOS REGISTROS=======================
module.exports.GetAllRegister = async(req, res ) => {
  try {
     const clients = await Clients.find()
     res.status(200).json(clients) 
  } catch (error) {
    res.json({message: error.message})
  }
}

//=========================MOSTRAR TODOS LOS REGISTROS=======================


//=========================MOSTRAR UN REGISTRO=======================
module.exports.GetOneRegistre = async(req, res ) => {
  
  try {
      const id = req.params.id
      await Clients.findById({_id: id}).then((client) => {
        res.status(200).json(client)
      })
  } catch (error) {
    res.json({message: error.message})
  }
}
//=========================MOSTRAR UN REGISTRO=======================


//=========================CREAR REGISTRO=======================
module.exports.CreateRegistre = async(req, res ) => {

  //==============VALIDACIONES DE USARIOS================
  const {error} = SchemaRegister.validate(req.body)
  if (error) {
    return res.status(400).json({
      error: error.details[0].message
    })
  }

  //=============COMPROBAR SI EXISTE EL EMAIL======================
  const exitEmail = await Clients.findOne({email: req.body.email})
  if (exitEmail) {
    return res.status(400).json(
      {error: true, message: "Email ya registrado"}
    )
  }

  try {
      await Clients.create(req.body)
      res.status(200).json(
        {"message" : "Cliente Creado Correctamente"}
      )
      
  } catch (error) {
    res.json({message: error.message})
  }
}




//=========================CREAR REGISTRO=======================



//=========================EDITAR REGISTRO=======================
module.exports.EditRegistre = async(req, res ) => {
  const {error} = SchemaRegister.validate(req.body)
  console.log(error)
  if (error) {
    return res.status(400).json({
      error: error.details[0].message
      
    })
  }

  //=============COMPROBAR SI EXISTE EL EMAIL======================
  const exitEmail = await Clients.findOne({email: req.body.email})
  if (exitEmail) {
    return res.status(400).json(
      {error: true, message: "Email ya registrado"}
    )
  }



  try {
    const id = req.params.id
      await Clients.updateOne({_id: id}, req.body).then(res => {
        console.log(res);
      })
      res.status(200).json(
        {"message" : "Cliente Editado Correctamente"}
      )
      
  } catch (error) {
    res.json({message: error.message})
  }
}
//=========================EDITAR REGISTRO=======================



//=========================ELIMINAR REGISTRO=======================
module.exports.DeleteRegistre = async(req, res ) => {
  try {
      const id = req.params.id
      await Clients.deleteOne({_id: id}).then(res => {
        console.log(res);
      })
      res.status(200).json(
        {"message" : "Cliente Eliminado Correctamente"}
      )
      
  } catch (error) {
    res.json({message: error.message})
  }
}
//=========================ELIMINAR REGISTRO=======================