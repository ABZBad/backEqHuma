const { json } = require('body-parser');
const Login = require('../models/login.model');

exports.obtenerAcceso = async (req, res) => {
  try {
    //const login = await Login.obtenerAcceso(req.params.usuario,req.params.password);

    return res.status(200).send({ 
      "nombre":"Admin",
      "ID":'123456789',
      "IdtipoUsuario":"100",
      "IdSucursal":"1",
      "IdPerfil":"1",
      "IdPlan":"10",
      "IdZona":"10",
      "tipoDeSucursal" :"Empresa",
      "tipoCliente": "Interno"
    });
    //res.json(login);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener acceso' ,error  });
  }
};




