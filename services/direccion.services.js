const Direccion = require('../models/direccion.model');

class DireccionService {
    static async crear(calle,
        numero_exterior,
        numero_interior,colonia,
        ciudad,localidad,
        estado,codigo_postal,
        pais,idprospecto) {
        try {
            return await Direccion.crear(calle,numero_exterior,
                numero_interior,colonia,
                ciudad,localidad,estado,codigo_postal,
                pais,idprospecto);
        } catch (error) {
            throw new Error('Error al crear el empresa en Servicio/crear');
        }
    }

    static async obtenerDomiciliosID(id) {
        try {
            return await Direccion.obtenerDomiciliosID(id);
        } catch (error) {
            throw new Error('Error al crear el empresa en Servicio/crear');
        }
    }
} module.exports = DireccionService;