const db = require('../db');

class Login {
  static async obtenerAcceso(usuario, clave) {
    try {
      const { rows } = await db.query("SELECT * FROM public.accesoApp($1, $2)", [usuario, clave]);
      console.log(rows);
      return rows[0];

    } catch (error) {
      console.log(`Error al buscar la empresa por ID: ${error}`);
      throw error;

      // res.status(500).json({
      //   mensaje: 'Error en ' +
      //     'models.obtenerEmpresaID ' +
      //     'obtener la empresa ID ' + req.params.id,
      //   error
      // });
    }
  }


}

module.exports = Login;