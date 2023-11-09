const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
productname: String,
manufacturer: String,
price: Number
})
module.exports = mongoose.model("electronics",
electronicsSchema)