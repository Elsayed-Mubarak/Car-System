const mongoose = require("mongoose");
// database connection
const mongo = mongoose.connect(
  "mongodb://127.0.0.1:27017/cars-system",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {}
);

module.exports = mongo;
