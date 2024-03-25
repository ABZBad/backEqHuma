const Direccion = require('../services/direccion.services');
exports.crear = async (req, res, next) => {
    try {
       if (req.body.codigo_postal == "" || !req.body.codigo_postal) {
          MensajeCodigoError("Falta agregar codigo postal",401);
       }
       if (!req.body.colonia || req.body.colonia == "") {
          MensajeCodigoError("Falta el nombre de colonia",401);
       }
 
        const { calle,
                    numero_exterior,
                    numero_interior,
                    colonia,
                    ciudad,
                    localidad,
                    estado,
                    codigo_postal,
                    pais,
                    idprospecto} = req.body;
 
        console.log("parametros de entrada--->[", 
                    calle,numero_exterior,
                    numero_interior,colonia,
                    ciudad,
                    localidad,
                    estado,
                    codigo_postal,
                    pais,
                    idprospecto, " ]");
 
       const nuevaDireccion = await Direccion.crear(
                        calle,
                        numero_exterior,
                        numero_interior,
                        colonia,
                        ciudad,
                        localidad,
                        estado,
                        codigo_postal,
                        pais,
                        idprospecto);
 
       res.status(201).json({
          status: "Ok",
          message: 'Se ha agregado la direccion',
          data: nuevaDireccion
       });
    } catch (error) {
       
       console.log("Error en la creacion de empresa: ", error.message);
       next(error.message);
    }
 };
 exports.obtenerDomicilios = async (req, res) => {
    try {
       const direcciones = await Direccion.obtenerDomiciliosID(req.params.id);

       res.status(200).json({
        status: "Ok",
        message: 'Lista de direccions del prospecto: '+ req.params.id ,
        data: direcciones
     });
    } catch (error) {
       res.status(500).json({
          mensaje: 'Error en ' +
             'exports.obtenerTodasEmpresas ' +
             'obtener las empresas ', error
       });
    }
 };
 