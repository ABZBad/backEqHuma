const Perfil = require('../models/perfil.model');

class PerfilService {
    static async obtenerTodos() {
        try {
            return await Perfil.obtenerTodos();
        } catch (error) {
            throw new Error('Error al obtener los Perfiles');
        }
    }

    static async obtenerPorId(id) {
        try {
            return await Perfil.obtenerPorId(id);
        } catch (error) {
            throw new Error('Error al obtener el Perfil');
        }
    }
} module.exports = PerfilService;