const DryFoods = require("../models/dryFoods")
const asyncHandler = require("express-async-handler")
const {body, validationResult} = require("express-validator");

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
 
    const dryFood = await DryFoods.findById(req.params.id).exec()

    if (dryFood === null){
        const err = new Error("Dry food not found")
        err.status = 404
        return next(err)
    }
    
    res.render("item_detail", {
        product: dryFood,
        item: "Dry Food"

    })

});

// Display dryFood create form on GET.
exports.dryFood_create_get = asyncHandler(async (req, res, next) => {
  res.render("create_form", {title: "Create Dry Food"})
});

// Handle dryFood create on POST.
exports.dryFood_create_post   = [
  
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

        const dryFood = new DryFoods({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
        })

        if(!errors.isEmpty()){
            res.render("create_form", {
                title: "Create Dry Food",
                product: dryFood,
                errors: errors.array()
            })
            return
        } else {
            await dryFood.save()
            res.redirect(dryFood.url)
        }
    })];

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
