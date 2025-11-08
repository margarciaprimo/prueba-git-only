// app.js

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import "dotenv/config";

import express from "express";
import { engine } from "express-handlebars";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const app = express();
const PORT = process.env.PORT || 3000;


// Configurar carpeta public
app.use(express.static("public"));

// Configurar Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// ITERACIÓN 1: Implementar ruta GET / (home)
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

