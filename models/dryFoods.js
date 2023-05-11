const mongoose = require("mongoose")
const Schema = mongoose.Schema
const DryFoodsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
    
})

DryFoodsSchema.virtual("url").get(() =>  {
    return `/fruit/${this._id}`})

module.exports = mongoose.model("DryFoods", DryFoodsSchema)