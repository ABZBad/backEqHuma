const Menu = require('../models/menu.model');

exports.obtenerMenuPorPerfil = async (req, res) => {
  try {
    const menu = await Menu.obtenerMenuPorPerfil(req.params.id);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el perfil por ID' ,error });
  }
};

