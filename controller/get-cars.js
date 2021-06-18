const Car = require("../models/car");
allCars = async (req, res) => {
  try {
    const cars = await Car.find();
    return res.status(200).json({ cars });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { allCars };
