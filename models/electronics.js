const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
    productname: String,
    manufacturer: {type: String,required: [true, "Manufacturer is required"]},
    price:{ type: Number, min: [100,"Mininum price should be 10"], max: [3000,"maximum price should be 30"]  }
})
module.exports = mongoose.model("electronics",
    electronicsSchema)