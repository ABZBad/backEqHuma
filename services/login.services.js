const Login = require('../models/login.model');

class LoginService {

  static async obtenerAcceso(usuario,password) {
    try {
      const loginResp =await  Login.obtenerAcceso(usuario,password);
      
      return  loginResp;
    } catch (error) {
      throw new Error('Error al obtener el acceso'+error);
    }
  }


  
}

module.exports = LoginService;