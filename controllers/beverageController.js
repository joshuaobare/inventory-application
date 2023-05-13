const Beverages = require("../models/beverages")
const asyncHandler = require("express-async-handler")

exports.index = asyncHandler(async(req, res, next) => {
    res.send("Home Page")
})


// Display list of all beverages.
exports.beverage_list = asyncHandler(async (req, res, next) => {
  const allBeverages = await Beverages.find({})
  .sort({title:1})
  .exec()

  res.render("category", {title: "Beverages", data_array:allBeverages, item: "beverages"})
});

// Display detail page for a specific beverage.
exports.beverage_detail = asyncHandler(async (req, res, next) => {
  
    const beverage = await Beverages.findById(req.params.id).exec()

    if (beverage === null){
        const err = new Error("Beverage not found")
        err.status = 404
        return next(err)
    }
    
    res.render("item_detail", {
        product: beverage,
        item: "Beverage"

    })
});

// Display beverage create form on GET.
exports.beverage_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: beverage create GET");
});

// Handle beverage create on POST.
exports.beverage_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: beverage create POST");
});

// Display beverage delete form on GET.
exports.beverage_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: beverage delete GET");
});

// Handle beverage delete on POST.
exports.beverage_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: beverage delete POST");
});

// Display beverage update form on GET.
exports.beverage_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: beverage update GET");
});

// Handle beverage update on POST.
exports.beverage_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: beverage update POST");
});
