const Prospect = require('../models/prospect.model');

class ProspectService {
  static async obtenerTodos() {
    try {
      return await Prospect.obtenerTodos();
    } catch (error) {
      throw new Error('Error al obtener los prospects');
    }
  }

  static async obtenerPorId(id) {
    try {
      return await Prospect.obtenerPorId(id);
    } catch (error) {
      throw new Error('Error al obtener el prospect');
    }
  }

  static async crear(nombre, primerapp) {
    try {
      return await Prospect.crear(nombre, primerapp);
    } catch (error) {
      throw new Error('Error al crear el prospect');
    }
  }

  static async actualizar(id, nombre, precio) {
    try {
      return await Prospect.actualizar(id, nombre, precio);
    } catch (error) {
      throw new Error('Error al actualizar el prospect');
    }
  }

  static async eliminar(id) {
    try {
      return await Prospect.eliminar(id);
    } catch (error) {
      throw new Error('Error al eliminar el prospect');
    }
  }
}

module.exports = ProspectService;