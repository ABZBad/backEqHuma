const Empresa = require('../models/empresa.model');
exports.obtenerEmpresaID = async (req, res) => {
    try {
      const empresa = await Empresa.obtenerEmpresaID(req.params.id);
      res.json(empresa);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error en '+
                                      'exports.obtenerEmpresaID '+
                                      'obtener la empresa ID ' + req.params.id ,error });
    }
  };
  
  
  exports.crear = async (req, res) => {
    try {
      const {nombreEmpresa, nombreComercial,
        giro,nombreContacto,
        tipoContacto, correoContrato } = req.body;

      const nuevoEmpresa = await empresa.crear(nombreEmpresa, nombreComercial,
        giro,nombreContacto,
        tipoContacto, correoContrato);
      res.status(201).json(nuevoEmpresa);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear la empresa' });
    }
  };