const express = require("express");
const router = express.Router();

router.use(express.static(__dirname + "/views"));

router.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
});
  
router.get("/servicios", (req, res) => {
    res.render("servicios", { titulo: "Servicios EJS"});
});
  
router.get("/contacto", (req, res) => {
    res.render("contacto", { titulo: "Nosotros EJS"});
});

module.exports = router;