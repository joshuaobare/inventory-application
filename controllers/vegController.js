const Veg = require("../models/vegetables")
const asyncHandler = require("express-async-handler")

exports.index = asyncHandler(async(req, res, next) => {
    res.send("Home Page")
})

// Display list of all vegetables.
exports.vegetable_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: vegetable list");
});

// Display detail page for a specific vegetable.
exports.vegetable_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: vegetable detail: ${req.params.id}`);
});

// Display vegetable create form on GET.
exports.vegetable_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: vegetable create GET");
});

// Handle vegetable create on POST.
exports.vegetable_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: vegetable create POST");
});

// Display vegetable delete form on GET.
exports.vegetable_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: vegetable delete GET");
});

// Handle vegetable delete on POST.
exports.vegetable_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: vegetable delete POST");
});

// Display vegetable update form on GET.
exports.vegetable_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: vegetable update GET");
});

// Handle vegetable update on POST.
exports.vegetable_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: vegetable update POST");
});
