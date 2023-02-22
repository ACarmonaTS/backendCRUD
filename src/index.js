import express from "express";
import router from "./routes/users.routes.js";
const app = express();
const port = 4000;

//middlewares
app.use(express.json());
app.use("/api/users", router) //Para enrutar los métodos

//SERVER
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});

//Segmentar los métodos, la lamada de los mismos y su lógica, nos permite 
//tener un código mantenible y escalable