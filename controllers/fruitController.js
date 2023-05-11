const Fruit = require("../models/fruit");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("Home Page");
});
// Display list of all fruits.
exports.fruit_list = asyncHandler(async (req, res, next) => {
    const allFruits = await Fruit.find({})
        .sort({name:1})
        .exec()
        
  res.render("fruits", {title: "Fruits", fruit_list:allFruits})
});

// Display detail page for a specific fruit.
exports.fruit_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: fruit detail: ${req.params.id}`);
});

// Display fruit create form on GET.
exports.fruit_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: fruit create GET");
});

// Handle fruit create on POST.
exports.fruit_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: fruit create POST");
});

// Display fruit delete form on GET.
exports.fruit_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: fruit delete GET");
});

// Handle fruit delete on POST.
exports.fruit_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: fruit delete POST");
});

// Display fruit update form on GET.
exports.fruit_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: fruit update GET");
});

// Handle fruit update on POST.
exports.fruit_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: fruit update POST");
});
