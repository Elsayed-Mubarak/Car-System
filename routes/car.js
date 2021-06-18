const express = require("express");
const router = express.Router({ caseSensitive: false });

const { registerCar } = require("../controller/register-car");
const { allCars } = require("../controller/get-cars");
const { deleteCar } = require("../controller/delete-car");
const { updateCar } = require("../controller/update-car");
const {
  registerCarInHighway,
} = require("../controller/register-car-in-highway");


router.post("/car", (req, res) => registerCar(req, res));
router.get("/all", (req, res) => allCars(req, res));
router.delete("/car", (req, res) => deleteCar(req, res));
router.put("/car", (req, res) => updateCar(req, res));
router.post("/highway", (req, res) => registerCarInHighway(req, res));

module.exports = router;
