const { json } = require('body-parser');
const Login = require('../services/login.services');

exports.obtenerAcceso = async (req, res) => {
  try {
    const { usuario, clave } = req.body;

    const login = await Login.obtenerAcceso(
                        usuario,clave);

    return res.status(200).json({
      status: 'ok',
      message: 'success',
      data: login
    });
    // return res.status(200).send({ 
    //   "usuario": "Admin",
    //   "ID":'123456789',
    //   "IdtipoUsuario":"100",
    //   "IdSucursal":"1",
    //   "IdPerfil":"1",
    //   "IdPlan":"10",
    //   "IdZona":"10",
    //   "tipoDeSucursal" :"Empresa",
    //   "tipoCliente": "Interno"
    // });
    //res.json(login);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error en ' +
        'controller.login ',
      error: error.message
    });
  }
};




