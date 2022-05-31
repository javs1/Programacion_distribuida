const express = require("express");
const router = express.Router();
const Servicio = require('../models/mascota')

router.use(express.static(__dirname + "/views"));

router.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
});
  
router.get("/servicios", async (req, res) => {
    res.render("servicios", { titulo: "Servicios EJS"});
    try {
        const arrayServicios = await Servicio.find();
        console.log(arrayServicios)
        res.render("servicios", {
            listaServicios: "Aquí irán todas las mascotas",
            arrayServicios
        })
    } catch (error) {
        console.log(error)
    }
    
});
  
router.get("/contacto", (req, res) => {
    res.render("contacto", { titulo: "Nosotros EJS"});
});

module.exports = router;