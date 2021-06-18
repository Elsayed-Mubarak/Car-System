const Car = require("../models/car");
const {
  registerCar: registerCarSchema,
} = require("../validations/register-car-schema");
updateCar = async (req, res) => {
  try {
    const { error, value } = registerCarSchema.validate(req.body);
    if (error)
      return res
        .status(400)
        .json({ message: error.message.replace(/"/g, ""), status: 400 });

    if (!car) {
      return res.status(400).json({ message: "Car Not Found" });
    }
    const targetCar = await Car.findOneAndUpdate(
      { _id: req.body.car_id },
      {
        $set: {
          brand: value.brand,
          model: value.model,
          plateNumber: value.plateNumber,
          name: value.name,
          position: value.position,
          age: value.age,
        },
      }
    ).populate("Employee");

    if (!targetCar) {
      return res.status(400).json({ message: "Car Edit Failed" });
    }
    return res.status(200).json({ message: "car updated", newCar: targetCar });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { updateCar };
