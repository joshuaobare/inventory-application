const mongoose = require("mongoose")
const Schema = mongoose.Schema
const PastriesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    url: { type: String, required: true },
})

const Pastries = mongoose.model("Pastries", PastriesSchema)