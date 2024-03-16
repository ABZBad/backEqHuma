const express = require('express');
const routerMenu = express.Router();
const menuController = require('../controllers/menu.controller');

routerMenu.get('/:id', menuController.obtenerMenuPorPerfil);

module.exports = routerMenu;
