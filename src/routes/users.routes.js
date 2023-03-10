//Aquí solo esta el código que redirige los métodos del CRUD
import * as crud from "../controllers/user.controllers.js"
import Router from "express";
const routerUsers = Router();
//Los métodos similares deben de tener rutas, por ejemplo,
//en otro método post, la ruta debería ser algo como: "/ruta-2/"

//READ
routerUsers.get("/", crud.getUsers)
//CREATE
routerUsers.post("/", crud.postUser)
//UPDATE (Modificar / actualizar)
routerUsers.put("/:id", crud.putUser)
//DELETE
routerUsers.delete("/:id", crud.deleteUser)

export default routerUsers