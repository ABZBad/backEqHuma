const Servicio = require('../models/servicio.model');
class ServicioService {
    static async obtenerTodosServicios() {
        try {
            return await Servicio.obtenerTodosServicios();
        } catch (error) {
            throw new Error('Error al obtener el menu');
        }
    }
} module.exports = ServicioService;