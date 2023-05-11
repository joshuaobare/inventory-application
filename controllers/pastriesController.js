const Pastries = require("../models/pastries")
const asyncHandler = require("express-async-handler")

exports.index = asyncHandler(async(req, res, next) => {
    res.send("Home Page")
})

// Display list of all pastries.
exports.pastry_list = asyncHandler(async (req, res, next) => {
  const allPastries = await Pastries.find({})
  .sort({name:1})
  .exec()

  res.render('pastries' , {title:"Pastries", pastry_list: allPastries})
});

// Display detail page for a specific pastry.
exports.pastry_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: pastry detail: ${req.params.id}`);
});

// Display pastry create form on GET.
exports.pastry_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: pastry create GET");
});

// Handle pastry create on POST.
exports.pastry_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: pastry create POST");
});

// Display pastry delete form on GET.
exports.pastry_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: pastry delete GET");
});

// Handle pastry delete on POST.
exports.pastry_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: pastry delete POST");
});

// Display pastry update form on GET.
exports.pastry_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: pastry update GET");
});

// Handle pastry update on POST.
exports.pastry_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: pastry update POST");
});
