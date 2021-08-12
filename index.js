const express = require("express")
const app = express()
const fs = require("fs")
const multer = require("multer")
const path = require("path")
const upload = multer({ dest: "public/images" })

const port = process.env.PORT || 3000

// Config 

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Rutas

app.get("/", (req, res) => {
    res.render("index")
})

// Rutas para subir Los archivos

app.post("/upload", upload.single('imagen'), (req, res) => {
    console.log(req.file)   
    fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);
    res.send("Archivo Subido")
})

app.post('/uploadmult', upload.array('imagenes'), (req, res) => {
    console.log(req.files)
    res.send('Termina!');
});

app.listen(port)

console.log("App listen on Port " + port)