const db = require('../db');

class Perfil {
  static async obtenerTodos() {
    const { rows } = await db.query('SELECT * FROM perfil');
    console.log("salida Peril/obtenerTodos ");
    return rows;
  }

  static async obtenerPorId(id) {
    
    const { rows } = await db.query('SELECT * FROM perfil WHERE id = $1', [id]);
    console.log("salida Peril/obtenerPorId ---- $1 ", rows[0]);
    
    return rows[0];
  }
}

module.exports = Perfil;