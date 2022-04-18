import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes";

/*Aqui configuramos em qual porta a API funcionará*/

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running"));