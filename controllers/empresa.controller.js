const Empresa = require('../services/empresa.services');
exports.obtenerEmpresaID = async (req, res) => {
   try {
      // if (!req.params.id || isNaN(req.params.id)) {
      //    return res.status(200).send({
      //       status: "Ok",
      //       error: "Error",
      //       message: "El id de la empresa no es válido"
      //    });
      // }
      // if(empresa.length === 0){
      //    return res.status(100).json({msg: 'No se encontró la empresa con el id ingresado'});
      // }
      const empresa = await Empresa.obtenerEmpresaID(req.params.id);
      console.log(empresa);
      res.status(200).send({
         message: 'Consulta exitosa',
         status: "Ok",
         data: empresa
      });
   } catch (error) {
      res.status(500).json(error);
   }
};


exports.crear = async (req, res, next) => {
   try {
      if (req.body.rfc == "" || !req.body.rfc) {
         MensajeCodigoError("Falta agregar RFC",401);
      }
      if (!req.body.nombreEmpresa || req.body.nombreEmpresa == "") {
         MensajeCodigoError("Falta el nombre",401);
      }
      if (!req.body.nombreComercial || req.body.nombreComercial == "") {
         MensajeCodigoError("Falta el nombreComercial",401);
      }
      if (!req.body.giro || isNaN(req.body.giro)) {
         MensajeCodigoError("Falta agregar GIRO",401);
      }
      if (!req.body.nombreContacto || req.body.nombreContacto == "") {
         MensajeCodigoError("Falta el nombreContacto",401);
      }
      if (!req.body.correoContacto || req.body.correoContacto == "") {
         MensajeCodigoError("Falta el correoContacto",401);
      }

      const { rfc, nombreEmpresa,
         nombreComercial, giro,
         nombreContacto, telefonoContacto,
         correoContacto } = req.body;

      console.log("parametros de entrada--->[", rfc, nombreEmpresa,
         nombreComercial, giro,
         nombreContacto, telefonoContacto,
         correoContacto, " ]");

      const nuevoEmpresa = await Empresa.crear(
         rfc, nombreEmpresa,
         nombreComercial, giro,
         nombreContacto, telefonoContacto,
         correoContacto);

      res.status(201).json({
         status: "Ok",
         message: 'Se ha creado la empresa',
         data: nuevoEmpresa
      });
   } catch (error) {
      
      console.log("Error en la creacion de empresa: ", error.message);
      next(error.message);
   }
};

exports.obtenerTodasEmpresas = async (req, res) => {
   try {
      const empresas = await Empresa.obtenerTodasEmpresas();
      res.json(empresas);
   } catch (error) {
      res.status(500).json({
         mensaje: 'Error en ' +
            'exports.obtenerTodasEmpresas ' +
            'obtener las empresas ', error
      });
   }
};
//implementar la siguente funcion
function MensajeCodigoError (mensaje, codigo) {
   const notFoundError = new Error();
   notFoundError.message=mensaje;
   notFoundError.status = codigo;
   throw notFoundError;
};

exports.agregarCuenta
