const Car = require("../models/car");
const AccessCard = require("../models/access-card");
registerCarInHighway = async (req, res) => {
  try {
    const car = await Car.findone({ _id: req.body.car_id });
    if (car) {
      const accessCard = await AccessCard.findone({ car_id });
      if (accessCard.isFirst == true) {
        return res
          .status(400)
          .json({ message: "This Car Is Registerd Before In HighWay" });
      }
      accessCard.credit = 10;
      accessCard.isFirst = true;
      const savedCard = await accessCard.save();
      return res.status(200).json({
        message: "Car Is Registerd In HighWay and Card Created Successfully",
        savedCard,
      });
    } else {
      return res.status(200).json({
        message: "Car Not Found",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { registerCarInHighway };
