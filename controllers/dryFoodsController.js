const DryFoods = require("../models/dryFoods")
const asyncHandler = require("express-async-handler")

exports.index = asyncHandler(async(req, res, next) => {
    res.send("Home Page")
})

// Display list of all dryFoods.
exports.dryFood_list = asyncHandler(async (req, res, next) => {
  const allDryFoods = await DryFoods.find({})
  .sort({name:1})
  .exec()

  res.render("category" , {title:"Dry Foods", data_array:allDryFoods, item:"dry foods"})
});

// Display detail page for a specific dryFood.
exports.dryFood_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: dryFood detail: ${req.params.id}`);
});

// Display dryFood create form on GET.
exports.dryFood_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: dryFood create GET");
});

// Handle dryFood create on POST.
exports.dryFood_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: dryFood create POST");
});

// Display dryFood delete form on GET.
exports.dryFood_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: dryFood delete GET");
});

// Handle dryFood delete on POST.
exports.dryFood_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: dryFood delete POST");
});

// Display dryFood update form on GET.
exports.dryFood_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: dryFood update GET");
});

// Handle dryFood update on POST.
exports.dryFood_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: dryFood update POST");
});
