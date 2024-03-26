const Empresa = require('../models/empresa.model');

class EmpresaService {
  static async obtenerEmpresaID(id) {
    try {
      const empresas = await Empresa.obtenerEmpresaID(id);
      console.log("servicio");
      
      return empresas;
    } catch (error) {
      throw new Error('Error al obtener empresa');
    }
  }
  static async crear(rfc,
    nombreEmpresa, nombreComercial,
    giro, nombreContacto,
    tipoContacto, correoContacto) {
    try {
      return await Empresa.crear(rfc, nombreEmpresa, nombreComercial,
        giro, nombreContacto,
        tipoContacto, correoContacto);
    } catch (error) {
      throw new Error('Error al crear el empresa en Servicio/crear');
    }
  }
  static async obtenerTodasEmpresas() {
    try {
      return await Empresa.obtenerTodasEmpresas();
    } catch (error) {
      throw new Error('Error al obtener lista de empresas');
    }
  }

}
module.exports = EmpresaService;