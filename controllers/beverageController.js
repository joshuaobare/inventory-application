const Beverages = require("../models/beverages")
const asyncHandler = require("express-async-handler")
const {body, validationResult} = require("express-validator");

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
    res.render("create_form", {title: "Create Beverage"})
});

// Handle beverage create on POST.
exports.beverage_create_post  = [
  
    body("name")
    .trim()
    .isLength({min:1})
    .escape()
    .withMessage("Name must be specified"),
    
    body("description")
    .trim()
    .isLength({min:1})
    .escape()
    .withMessage("Description must be specified"),
    
    body("category")
    .trim()
    .isLength({min:1})
    .escape()
    .withMessage("Category must be specified"),
    
    body("price")
    .trim()
    .isLength({min:1})
    .escape()
    .withMessage("Price must be specified")
    .isNumeric()
    .withMessage("Price has non-numeric characters"),

    body("quantity")
    .trim()
    .isLength({min:1})
    .escape()
    .withMessage("Quantity must be specified")
    .isNumeric()
    .withMessage("Quantity has non-numeric characters"),


    asyncHandler(async(req,res,next) => {
        const errors = validationResult(req)

        const beverage = new Beverages({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
        })

        if(!errors.isEmpty()){
            res.render("create_form", {
                title: "Create Beverage",
                product: beverage,
                errors: errors.array()
            })
            return
        } else {
            await beverage.save()
            res.redirect(beverage.url)
        }
    })];

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
