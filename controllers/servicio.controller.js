const Servicio = require('../models/servicio.model');

exports.obtenerTodosServicios= async (req, res) => {
  try {
    const servicio = await Servicio.obtenerTodosServicios();
    res.status(200).json(servicio);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el perfil por ID' ,error });
  }
};

