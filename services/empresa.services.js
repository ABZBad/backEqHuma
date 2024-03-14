const Empresa = require('../models/empresa.model');

class EmpresaService {
  static async obtenerEmpresaID(id) {
    try {
      return await Empresa.obtenerEmpresaID(id);
    } catch (error) {
      throw new Error('Error al obtener empresa');
    }
  }
  static async crear(nombreEmpresa, nombreComercial,
    giro,nombreContacto,
    tipoContacto, correoContrato) {
    try {
      return await Empresa.crear(nombreEmpresa, nombreComercial,
        giro,nombreContacto,
        tipoContacto, correoContrato);
    } catch (error) {
      throw new Error('Error al crear el empresa');
    }
  }

}
module.exports = EmpresaService;