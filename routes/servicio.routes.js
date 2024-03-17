const express = require('express');
const routerServicio = express.Router();
const servicioController = require('../controllers/servicio.controller');

routerServicio.get('', servicioController.obtenerTodosServicios);

module.exports = routerServicio;
