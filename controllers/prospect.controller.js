const Prospect = require('../services/prospect.services');

exports.obtenerTodos = async (req, res) => {
  try {
    const prospects = await Prospect.obtenerTodos();
    res.status(200).json({
      message: "Detalle de prospectos",
      data: prospects
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los prospectos' });
  }
};

exports.obtenerPorId = async (req, res) => {
  try {
    const prospect = await Prospect.obtenerPorId(req.params.id);
    res.status(200).json({
      message: "Detalle de prospecto " + req.params.id,
      data: prospect
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el prospecto por ID', error });
  }
};

exports.crear = async (req, res) => {
  try {

    const { nombre, primerApp,
      segundoApp, correo,
      telefono, idEmpresa,
      idSucursal, idUsuario, nss,
      curp, listaServicios } = req.body;

    const nuevoProspect = await Prospect.crear(nombre, primerApp,
      segundoApp, correo,
      telefono,
      idEmpresa, idSucursal, idUsuario,
      nss, curp, listaServicios);


    console.log(nuevoProspect);
    res.status(201).json({
      status: "ok",
      message: 'El prospecto ${nombre} ha sido creado',
      data: nuevoProspect
    });

  } catch (error) {
    res.status(500).json({
      mensaje: 'Error en ' +
        'controller.crear ',
      error: error.message
    });
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

exports.obtenerProspectosTodosPorEmpresa = async (req, res) => {
  try {
    const prospects = await Prospect.obtenerProspectosTodosPorEmpresa(req.params.id);
    res.status(200).send({
      message: 'Lista de prospectos obtenida exitos',
      data: prospects,
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los prospectos' });
  }
};