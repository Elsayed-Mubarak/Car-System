const Car = require("../models/car");
deleteCar = async (req, res) => {
  try {
    const car = await Car.findOneAndDelete({ _id: req.body.car_id });
    if (!car) {
      return res.status(400).json({ message: "car not found" });
    }
    return res.status(200).json({ message: "car deleted" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { deleteCar };
