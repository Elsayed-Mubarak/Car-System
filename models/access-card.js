const mongoose = require('mongoose')

const AccessCard = new mongoose.Schema(
  {
    car_id: {
      type: mongoose.Types.ObjectId,
      ref: 'Car',
      required: true,
    },
    credits: { type: Number, default: 0 },
    isFirst: { type: Boolean, default: false },
  },
  { timestamps: true },
)

module.exports = mongoose.model('AccessCard', AccessCard)
