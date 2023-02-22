//Aquí solo esta el código que redirige los métodos del CRUD
import * as crud from "../controllers/user.controllers.js"
import Router from "express";
const router = Router();
//Los métodos similares deben de tener rutas, por ejemplo,
//en otro método post, la ruta debería ser algo como: "/ruta-2/"

//READ
router.get("/", crud.getUsers)
//CREATE
router.post("/", crud.postUser)
//UPDATE (Modificar / actualizar)
router.put("/:id", crud.putUser)
//DELETE
router.delete("/:id", crud.deleteUser)

export default router