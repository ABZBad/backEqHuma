const Prospect = require('../models/prospect.model');

class ProspectService {
  static async obtenerTodos() {
    try {
      return await Prospect.obtenerTodos();
    } catch (error) {
      throw new Error('Error al obtener los prospects');
    }
  }

  static async obtenerPorId(id) {
    try {
      return await Prospect.obtenerPorId(id);
    } catch (error) {
      throw new Error('Error al obtener el prospect');
    }
  }

  static async crear(nombre , primerApp ,segundoApp ,correo ,
                    telefono ,idEmpresa ,idSucursal ,idUsuario,
                    nss,curp,listaServicios)
  {
    try {   
      // let prospectNuevo = new Prospect({
      //   nombre : nombre,
      //   primerApp:primerApp,
      //   segundoApp:segundoApp  ,
      //   correo : correo ,
      //   telefono : telefono ,
      //   fecha_nacimiento : fecha_nacimiento ,
      //   genero :genero ,
      //   idEmpresa : idEmpresa ,
      //   idSucursal : idSucursal ,
      //   nss : nss ,
      //   CURP : curp ,
      //   listaServicios : listaServicios
      // });
      // console.log(JSON.stringify(prospectNuevo));
      // prospectNuevo =await prospectNuevo.crear();
      // return prospectNuevo;
      //console.log(JSON.stringify(listaServicios));
      
      const jsonData= listaServicios;
      
      const arrayServicios = jsonData.map(obj => [obj.idEmpresa, obj.idCandidato, obj.idServicio]);
     // console.log(arrayServicios);

      return await Prospect.crear(nombre , primerApp ,
                      segundoApp  ,correo ,
                      telefono ,idEmpresa ,
                      idSucursal ,idUsuario,nss ,
                      curp,arrayServicios); 
    } catch (error) {
      throw new Error('Error al crear el prospecto, servicio: '+error);
    }
  }

  static async actualizar(id, nombre, precio) {
    try {
      return await Prospect.actualizar(id, nombre, precio);
    } catch (error) {
      throw new Error('Error al actualizar el prospect');
    }
  }

  static async eliminar(id) {
    try {
      return await Prospect.eliminar(id);
    } catch (error) {
      throw new Error('Error al eliminar el prospect');
    }
  }

  static async obtenerProspectosTodosPorEmpresa(id) {
    try {
      return await Prospect.obtenerProspectosTodosPorEmpresa(id);
    } catch (error) {
      throw new Error('Error al lista de prospectos por empresa $1',[id]);
    }
  }
}

module.exports = ProspectService;