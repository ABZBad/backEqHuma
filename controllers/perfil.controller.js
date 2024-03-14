const Perfil = require('../models/perfil.model');

exports.obtenerTodos = async (req, res) => {
  try {
    const perfiles = await Peril.obtenerTodos();
    res.json(perfiles);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los perfiles, controller/perfiles/obtenerTodos' });
  }
};

exports.obtenerPorId = async (req, res) => {
  try {
    const perfil = await Perfil.obtenerPorId(req.params.id);
    res.status(200).json(perfil);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el perfil por ID' ,error });
  }
};
