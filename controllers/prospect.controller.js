const Prospect = require('../models/prospect.model');

exports.obtenerTodos = async (req, res) => {
  try {
    const prospects = await Prospect.obtenerTodos();
    res.json(prospects);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los prospectos' });
  }
};

exports.obtenerPorId = async (req, res) => {
  try {
    const prospect = await Prospect.obtenerPorId(req.params.id);
    res.status(200).json(prospect);

    //res.json(prospect);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el prospecto por ID' ,error });
  }
};

exports.crear = async (req, res) => {
  try {
    // const { nombre, primerapp } = req.body;
    // const nuevoProspect= await prospect.crear(nombre, primerapp);
    // console.log(nuevoProspect);
    // res.status(201).json(nuevoProspect);
    res.status(201);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el rospecto' });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const { nombre, primerapp } = req.body;
    const prospectActualizado = await Prospect.actualizar(req.params.id, nombre, primerapp);
    res.json(prospectActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el prospecto' });
  }
};

exports.eliminar = async (req, res) => {
  try {
    await Prospect.eliminar(req.params.id);
    res.json({ mensaje: 'Prospecto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el prospecto' });
  }
};