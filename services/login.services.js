const Login = require('../models/login.model');

class LoginService {

  static async obtenerPorId(usuario,password) {
    try {
      return await Login.obtenerAcceso(usuario,password);
    } catch (error) {
      throw new Error('Error al obtener el acceso');
    }
  }


  
}

module.exports = LoginService;