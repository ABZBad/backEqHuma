const Login = require('../models/login.model');



exports.obtenerAcceso = async (req, res) => {
  try {
    const login = await Login
                            .obtenerAcceso(req.params.usuario,req.params.password);
    res.json(login);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener acceso' ,error  });
  }
};




