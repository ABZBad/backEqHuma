const Empresa = require('../models/empresa.model');
exports.obtenerEmpresaID = async (req, res) => {
  try {
    const empresa = await Empresa.obtenerEmpresaID(req.params.id);
    console.log("empresa ->" ,req.params.id);
    res.json(empresa);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error en ' +
        'controller.obtenerEmpresaID ' +
        'obtener la empresa ID ' + req.params.id, error
    });
  }
};


exports.crear = async (req, res) => {
  try {
    const { rfc, nombreEmpresa,
      nombreComercial, giro,
      nombreContacto, telefonoContacto,
      correoContacto } = req.body;
    console.log("parametros de entrada--->[",rfc, nombreEmpresa,
      nombreComercial, giro,
      nombreContacto, telefonoContacto,
      correoContacto," ]");
    const nuevoEmpresa = await Empresa.crear(
      rfc, nombreEmpresa,
      nombreComercial, giro,
      nombreContacto, telefonoContacto,
      correoContacto);
    res.status(201).json(nuevoEmpresa);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la empresa en controller/crear', error });
  }
};

exports.obtenerTodasEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.obtenerTodasEmpresas();
    res.json(empresas);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error en ' +
        'exports.obtenerTodasEmpresas ' +
        'obtener las empresas ', error
    });
  }
};