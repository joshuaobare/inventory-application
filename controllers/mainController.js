const Fruit = require("../models/fruit");
const Beverages = require("../models/beverages");
const DryFoods = require("../models/dryFoods");
const Pastries = require("../models/pastries");
const Veg = require("../models/vegetables");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {  
  const [
    numFruits,
    numBeverages,
    numDryFoods,
    numPastries,
    numVegetables,
  ] = await Promise.all([
    Fruit.countDocuments({}).exec(),
    Beverages.countDocuments({}).exec(),
    DryFoods.countDocuments({}).exec(),
    Pastries.countDocuments({}).exec(),
    Veg.countDocuments({}).exec(),
  ]);

  res.render("index", {
    title: "Inventory Application",
    fruit_count: numFruits,
    beverage_count: numBeverages,
    dryFood_count: numDryFoods,
    pastry_count: numPastries,
    veg_count: numVegetables,
  });
});
