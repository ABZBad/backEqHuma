const db = require('../db');
class Servicio {
  static async obtenerTodosServicios() {
    const { rows } = await db.query('select * from  public.catalogoServicios()');
    console.log("salida servicio/obtenerTodosServicios ---- $1 ");
    return rows;
  }
}

module.exports = Servicio;