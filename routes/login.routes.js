
const express = require('express');
const routerLogin = express.Router();
const prospectController = require('../controllers/login.controller');

routerLogin.post('/', prospectController.obtenerAcceso);

module.exports = routerLogin;
