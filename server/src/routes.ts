import express from "express";

import {
  ClassesController,
  ConnectionsController,
  UsersController,
  AuthController,
} from "./controllers";

import validateToken from "./middlewares/validateToken";

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();
const authController = new AuthController();

routes.post("/login", authController.create);

routes.post("/users", usersController.create);

routes.use(validateToken);

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

routes.get("/users", usersController.show);

export default routes;
