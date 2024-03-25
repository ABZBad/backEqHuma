const db = require('../db');

class Prospect {
  static async obtenerTodos() {
    const { rows } = await db.query('SELECT * FROM candidato');
    return rows;
  }

  static async obtenerPorId(id) {

    const { rows } = await db.query('SELECT * FROM candidato WHERE id = $1', [id]);
    console.log("salida obtenerPorId ---- $1 ", rows[0]);

    return rows[0];
  }

  static async crear(nombre,
    primerApp,
    segundoApp,
    correo,
    telefono,
    idEmpresa,
    idSucursal,
    idUsuario,
    nss,
    curp,
    listaServicios) {
    console.log("Lista en modelo");
    console.log(listaServicios);
    try {

      const formattedItems = listaServicios.map(item => "{$(listaServicios.join(','))").join(',');

      // const { rows } = await db.query('select * FROM  public.agregarProspecto ' +
      //   '( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
      //   , [nombre,
      //     primerApp,
      //     segundoApp,
      //     correo,
      //     telefono,
      //     idEmpresa,
      //     idSucursal,
      //     idUsuario,
      //     nss,
      //     curp,
      //     [1, 1, 1]
      //   ]);

      const items = [
        [1, 1, 1 ],
        [2, 1, 1 ]
      ];
      
      const insertQuery = 'SELECT public.agregarProspecto($1::serviciolista_type[])';
      
      pool.query(insertQuery, [items]);

      
    } catch (error) {
      throw new Error('Error al crear el modelo en prospecto:' + error.message);
    }

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

  static async obtenerProspectosTodosPorEmpresa(id) {
    const { rows } = await db.query('select * from  public.obtenerProspectosPorIDEmpresa($1)', [id]);
    return rows;
  }
}

module.exports = Prospect;