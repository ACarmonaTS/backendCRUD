import express from "express";
import { config } from "dotenv"
import routerFilms from "./routes/films.routes.js";
import routerUsers from "./routes/users.routes.js";
const app = express();

config()

//middlewares
app.use(express.json());
app.use("/api/users", routerUsers) //Para enrutar los métodos
app.use("/api/films", routerFilms)

//SERVER
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto " + process.env.PORT);
});

//Segmentar los métodos, la lamada de los mismos y su lógica, nos permite 
//tener un código mantenible y escalable