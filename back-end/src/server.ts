import "reflect-metadata";
import express from "express";
import ".";
import { routes } from "./routes";

/*Aqui configuramos em qual porta a API funcionará*/

const app = express();
const cors = require('cors');

app.use(cors())

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running"));