var express = require("express");
var router = express.Router();

/* GET user listing. */
router.get("/", function (req, res, next) {
  var persona = {
    nombre: "Luis",
    apellido: "Sepúlveda",
  };

  console.log(persona);
  res.send("respond with a resource");
});
module.exports = route;
