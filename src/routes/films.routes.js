//Aquí solo esta el código que redirige los métodos del CRUD
import * as crud from "../controllers/film.controllers.js"
import Router from "express";
const routerFilms = Router();
//Los métodos similares deben de tener rutas, por ejemplo,
//en otro método post, la ruta debería ser algo como: "/ruta-2/"

//READ
routerFilms.get("/", crud.getFilms)
//CREATE
routerFilms.post("/", crud.postFilm)
//UPDATE (Modificar / actualizar)
routerFilms.put("/:id", crud.putFilm)
//DELETE
routerFilms.delete("/:id", crud.deleteFilm)

export default routerFilms