const express = require("express");
const Car = require('./Entities/Car');
const app = express();
const port = 3000;

Datos = Car.cars;

app.use(express.json());

app.post("/", (req, res) => {

    try{
        res.status(201).send("Se ha creado el nuevo coche correctamente.");
        const coche = req.body;
        Datos.push(coche);
        //console.log(req.body);
    }
    catch(err){
        res.send("Ha ocurrido un error: " + err);
    }
    
})

app.get("/", (req, res) => {
    res.send("Vaya a la ruta /coches para visualizar todos los coches, si quieres añadir un nuevo coche lo puedes hacer mediante postman.");
});

app.get("/coches", (req, res) => {
    res.status(200).send(Datos);
});


app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:${port}`);
});