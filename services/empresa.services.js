const Empresa = require('../models/empresa.model');

class EmpresaService {
  static async obtenerEmpresaID(id) {
    try {
      return await Empresa.obtenerEmpresaID(id);
    } catch (error) {
      throw new Error('Error al obtener empresa');
    }
  }
  static async crear(id,nombreEmpresa, nombreComercial,
    giro,nombreContacto,
    tipoContacto, correoContacto) {
    try {
      return await Empresa.crear(id,nombreEmpresa, nombreComercial,
        giro,nombreContacto,
        tipoContacto, correoContacto);
    } catch (error) {
      throw new Error('Error al crear el empresa en Servicio/crear');
    }
  }

}
module.exports = EmpresaService;