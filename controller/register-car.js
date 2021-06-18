const {
  registerCar: registerCarSchema,
} = require("../validations/register-car-schema");
const Employee = require("../models/employee");
const Car = require("../models/car");
/**
 * @param(employeeName, position,age ,brand,model,plateNumber);
 */
registerCar = async (req, res) => {
  try {
    // request validation
    const { error, value } = registerCarSchema.validate(req.body);
    if (error)
      return res
        .status(400)
        .json({ message: error.message.replace(/"/g, ""), status: 400 });

    const savedEmployee = await Employee.create({
      name: value.name,
      position: value.position,
      age: value.age,
    });
    if (!savedEmployee) {
      return res
        .status(401)
        .json({ message: "Employee Not Saved Successfully" });
    }

    const savedCar = await Car.create({
      employeeID: value._id,
      brand: value.brand,
      model: value.model,
      plateNumber: value.plateNumber,
    });
    if (!savedCar) {
      return res.status(401).json({
        message: "Car Not Saved Successfully Should To Get Employee Id First",
      });
    }

    return res.status(200).json({
      message: "Car Register Successfully",
      Car: savedCar,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { registerCar };
