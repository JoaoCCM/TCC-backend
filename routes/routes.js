const { Router } = require('express');
const routes = Router();

const AuthController = require('../controllers/authController');

routes.post('/auth/register', AuthController.create);

module.exports = routes;