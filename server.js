const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const front = require("./routes/front");
const api = require("./routes/api");

const port = 3000;
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(front);
app.use(api);

app.listen(port, () => console.log(`Escuchando puerto ${port}`));
