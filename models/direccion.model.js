const db = require('../db');

class Direcion {

    static async crear(calle,
        numero_exterior,numero_interior,
        colonia,ciudad,localidad,
        estado,codigo_postal,pais,idprospecto) {
        try {
            const strQuery = 'select * from  public.agregarDireccion( ' +
                ' $1,$2 ,$3, $4, $5, $6, $7, $8, $9,$10 )';
            console.log(strQuery);
            const { rows } = await db.query(strQuery,
                [   calle,
                    numero_exterior,
                    numero_interior,
                    colonia,
                    ciudad,
                    localidad,
                    estado,
                    codigo_postal,
                    pais,
                    idprospecto
                ]);
            return rows[0];
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error en ' +
                    'exports.Crear ' +
                    'la domicilio',
                error
            });
        }
    }

    static async obtenerDomiciliosID(id) {
        try {
          const { rows } = await db.query('select * from domicilio where idprospecto  = $1', [id]);
          return rows;
        } catch (error) {
          console.log(`Error al buscar los domicilios del prospecto por ID: ${error}`);
          throw error;

        }
      }



}
module.exports = Direcion;