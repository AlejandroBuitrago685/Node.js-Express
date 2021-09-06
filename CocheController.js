const express = require("express");
const Car = require('./Entities/Car');
const app = express();
const port = 3000;

Datos = Car.cars;

app.use(express.json());

//Añadir coches nuevos
app.post("/", (req, res) => {

    try{
        res.status(201).send("Se ha creado el nuevo coche correctamente.");
        const coche = req.body;
        Datos.push(coche);
        console.log("Nuevo coche creado exitosamente.");
    }
    catch(err){
        res.send("Ha ocurrido un error: " + err);
    }
    
})

//INDEX
app.get("/", (req, res) => {
    res.send("Vaya a la ruta /coches para visualizar todos los coches, si quieres añadir un nuevo coche lo puedes hacer mediante postman.");
});

//Obtener todos los coches
app.get("/coches", (req, res) => {

    if(Datos == ""){
        res.send("No hay ningún coche aún, puedes crear nuevos con Postman.");
    }
    else{
        res.status(200).send(Datos);
    }
    
});

app.listen(port, () => {
    console.log(`Servidor escuchando http://localhost:${port}`);
});