const Pastries = require("../models/pastries")
const asyncHandler = require("express-async-handler")
const {body, validationResult} = require("express-validator");


exports.index = asyncHandler(async(req, res, next) => {
    res.send("Home Page")
})

// Display list of all pastries.
exports.pastry_list = asyncHandler(async (req, res, next) => {
  const allPastries = await Pastries.find({})
  .sort({name:1})
  .exec()

  res.render('category' , {title:"Pastries", data_array: allPastries , item:"pastries"})
});

// Display detail page for a specific pastry.
exports.pastry_detail = asyncHandler(async (req, res, next) => {
  
    const pastry = await Pastries.findById(req.params.id).exec()
    if (pastry === null){
        const err = new Error("Pastry not found")
        err.status = 404
        return next(err)
    }
    
    res.render("item_detail", {
        product: pastry,
        item: "Pastry"

    })

});

// Display pastry create form on GET.
exports.pastry_create_get = asyncHandler(async (req, res, next) => {
  res.render("create_form", {title: "Create Pastry"})
});

// Handle pastry create on POST.
exports.pastry_create_post = [
  
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

        const pastry = new Pastry({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
        })

        if(!errors.isEmpty()){
            res.render("create_form", {
                title: "Create Pastry",
                product: pastry,
                errors: errors.array()
            })
            return
        } else {
            await pastry.save()
            res.redirect(pastry.url)
        }
    })];

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
