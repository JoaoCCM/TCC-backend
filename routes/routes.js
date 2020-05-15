const { Router } = require("express");
const routes = Router();

const UserController = require("../controllers/userController");

routes.post("/user/register", UserController.create);

module.exports = routes;
