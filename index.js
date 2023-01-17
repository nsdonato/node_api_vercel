const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/test", (req, res) => {
  res.send("<h1>Pero mira que hermoso test</h1>");
});

app.listen(port);

console.log("Escuchando en: http://localhost:" + port);
