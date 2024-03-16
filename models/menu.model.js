const db = require('../db');
class Menu {
  static async obtenerMenuPorPerfil(id) {
    const { rows } = await db.query('select * from  public.obtenerMenuPorPerfil($1)', [id]);
    console.log("salida Peril/obtenerPorId ---- $1 ", rows[0]);
    return rows[0];
  }
}

module.exports = Menu;