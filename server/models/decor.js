const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const decorSchema = new Schema({
  imageURL: { type: String, required: true },
  room: { type: String, required: true },
  item: { type: String, required: true },
  price: { type: Number, required: true },
  store: { type: String, required: true },
});

const Decor = mongoose.model("Decor", decorSchema);

module.exports = Decor;
