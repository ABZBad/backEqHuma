const db = require('../db');

class Login {
  static async obtenerAcceso(usuario,password) {
    const { rows } = await db.query('SELECT * FROM acceso WHERE usuario = $1 AND password = $2', [usuario, password]);
    return rows[0];
  }


}

module.exports = Login;