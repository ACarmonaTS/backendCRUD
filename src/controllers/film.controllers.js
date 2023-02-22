//Aquí esta el código que solo contiene la lógica del CRUD
import { films } from "../database/db.js";
import * as uuid from "uuid";

//READ
export const getFilms = (req, res) => {
    return res.json({
        ok: true,
        msg: "Películas registradas",
        data: films
    })
};
//CREATE
export const postFilm = ( req, res ) => {
    const { title, year, price } = req.body;
    const film = {
        id: uuid.v4(),
        title,
        year,
        price
    };
    films.push(film);
    return res.json({
        ok: true,
        msg: "Película agregada",
        data: film  // Para ver la película agregada
    });
}
//UPDATE (Modificar / actualizar)
export const putFilm = ( req, res ) => {
    const { id } = req.params;
    const { title, year, price } = req.body;

    const film = films.find( (film) => film.id === id )
    film.title = title;
    film.year = year;
    film.price = price;

    return res.json({
        ok: true,
        msg: "Película actualizada",
        data: film  // Para ver la película actualizada
    });
}
//DELETE
export const deleteFilm = ( req, res ) => {
    const { id } = req.params;

    const film = films.find( (film) => film.id === id )

    films.splice(films.indexOf(film), 1)

    return res.json({
        ok: true,
        msg: "Película eliminada",
        data: film  // Para ver la película eliminada
    });
}