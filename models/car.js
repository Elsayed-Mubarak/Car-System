const mongoose = require('mongoose')

const car = new mongoose.Schema(
  {
    brand: { type: String, require: true },
    model: { type: Number, require: true },
    plateNumber: { type: Number, require: true },
    employeeID: {
      type: mongoose.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('car', car)
