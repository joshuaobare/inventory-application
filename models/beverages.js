const mongoose = require("mongoose")
const Schema = mongoose.Schema
const BeverageSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    
})

BeverageSchema.virtual("url").get(function() {
    return `/beverages/${this._id}`})

module.exports = mongoose.model("Beverage", BeverageSchema)