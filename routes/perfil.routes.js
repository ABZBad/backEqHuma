const express = require('express');
const routerPerfil = express.Router();
const perfilController = require('../controllers/perfil.controller');

routerPerfil.get('/', perfilController.obtenerTodos);
routerPerfil.get('/:id', perfilController.obtenerPorId);

module.exports = routerPerfil;
