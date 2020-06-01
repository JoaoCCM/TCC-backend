const { Router } = require("express");
const routes = Router();

const AuthController = require("../api/auth");
const UserController = require("../controllers/userController");
const ExamingController = require("../controllers/examingController/examingController");
const GuidenceController = require("../controllers/guidenceController/guidenceController");
const ProductionController = require("../controllers/productionController/productionController");
const ProjectController = require("../controllers/projectController/projectController");
const TeacherController = require("../controllers/teacherController/teacherController");

//signin
routes.post("/signin", AuthController.signin);

//User
routes.post("/user/register", UserController.create);

//Teacher
routes.post("/teacher/register", TeacherController.create);

//Examing Board
routes.post("/board/register", ExamingController.create);

//Guidence
routes.post("/guidence/register", GuidenceController.create);

//Production
routes.post("/production/register", ProductionController.create);

//Project
routes.post("/project/register", ProjectController.create);

module.exports = routes;
