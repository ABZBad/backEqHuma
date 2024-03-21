const db = require('../db');

class Empresa {
  static async obtenerEmpresaID(id) {
    try {
      const { rows } = await db.query('SELECT * FROM empresa WHERE id = $1', [id]);
      console.log("salida---- $1 ", rows[0]);
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

  static async crear(rfc, nombreEmpresa, nombreComercial,
    giro, nombreContacto, telefonoContacto, correoContacto) {
    try {
      const strQuery = "select * from  public.agregarEmpresa(" +
        "'$1','$2' ,'$3', $4, $5, $6, $7)";
      console.log(strQuery);
      const { rows } = await db.query("select * from  public.agregarEmpresa(" +
                                      "$1,$2 ,$3, $4, $5, $6, $7)", 
                      [rfc, nombreEmpresa, nombreComercial,
                      giro, nombreContacto, telefonoContacto,
                    correoContacto]);
      return rows[0];
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error en ' +
          'exports.Crear ' +
          'la empresa',
        error
      });
    }
  }

  static async obtenerTodasEmpresas() {
    try {
      const { rows } = await db.query('SELECT * FROM public.obtenerEmpresas()');
      console.log("SELECT * FROM obtenerEmpresas");
      return rows;

    } catch (error) {
      res.status(500).json({
        mensaje: 'Error en ' +
          'exports.obtenerTodasEmpresas ' +
          'obtener la empresa ID ' + req.params.id,
        error
      });
    }
  }


}
module.exports = Empresa;