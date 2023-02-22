//Aquí esta el código que solo contiene la lógica del CRUD
import users from "../database/db.js";
import * as uuid from "uuid";

//READ
export const getUsers = (req, res) => {
    return res.json({
        ok: true,
        msg: "Usuarios obtenidos",
        data: users
    })
};
//CREATE
export const postUser = ( req, res ) => {
    const { name, course } = req.body;
    const user = {
        id: uuid.v4(),
        name,
        course
    };
    users.push(user);
    return res.json({
        ok: true,
        msg: "Usuario agregado",
        data: user  // Para ver el usuario agregado
    });
}
//UPDATE (Modificar / actualizar)
export const putUser = ( req, res ) => {
    const { id } = req.params;
    const { name, course } = req.body;

    const user = users.find( (user) => user.id === id )
    user.name = name;
    user.course = course;

    return res.json({
        ok: true,
        msg: "Usuario actualizado",
        data: user  // Para ver el usuario actualizado
    });
}
//DELETE
export const deleteUser = ( req, res ) => {
    const { id } = req.params;

    const user = users.find( (user) => user.id === id )

    users.splice(users.indexOf(user), 1)

    return res.json({
        ok: true,
        msg: "Usuario eliminado",
        data: user  // Para ver el usuario eliminado
    });
}