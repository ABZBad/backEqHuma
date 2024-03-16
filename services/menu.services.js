const Menu = require('../models/menu.model');
class MenuService {
    static async obtenerMenuPorPerfil(id) {
        try {
            return await Menu.obtenerMenuPorPerfil(id);
        } catch (error) {
            throw new Error('Error al obtener el menu');
        }
    }
} module.exports = MenuService;