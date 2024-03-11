const db = require('../db');

class Prospect {
  static async obtenerTodos() {
    const { rows } = await db.query('SELECT * FROM candidato');
    return rows;
  }

  static async obtenerPorId(id) {
    const { rows } = await db.query('SELECT * FROM candidato WHERE id = $1', [id]);
    return rows[0];
  }

  static async crear(nombre, precio) {
    const { rows } = await db.query('INSERT INTO candidato (nombre, apellido) VALUES ($1, $2) RETURNING *', [nombre, primerapp]);
    return rows[0];
  }

  static async actualizar(id, nombre, precio) {
    const { rows } = await db.query('UPDATE candidato SET nombre = $1, precio = $2 WHERE id = $3 RETURNING *', [nombre, primerapp, id]);
    return rows[0];
  }

  static async eliminar(id) {
    await db.query('DELETE FROM candidato WHERE id = $1', [id]);
    return { mensaje: 'candidato eliminado correctamente' };
  }
}

module.exports = Prospect;