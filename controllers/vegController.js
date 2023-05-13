const Veg = require("../models/vegetables")
const asyncHandler = require("express-async-handler")
const {body, validationResult} = require("express-validator");

exports.index = asyncHandler(async(req, res, next) => {
    res.send("Home Page")
})

// Display list of all vegetables.
exports.vegetable_list = asyncHandler(async (req, res, next) => {
    const allVegetables = await Veg.find({})
    .sort({name:1})
    .exec()
  
    res.render("category" , {title:"Vegetables", data_array:allVegetables, item:"vegetables"})
});

// Display detail page for a specific vegetable.
exports.vegetable_detail = asyncHandler(async (req, res, next) => {
  
    const veg = await Veg.findById(req.params.id)
    if (veg === null){
        const err = new Error("Vegetable not found")
        err.status = 404
        return next(err)
    }
    
    res.render("item_detail", {
        product: veg,
        item: "Vegetable"

    })
    
});

// Display vegetable create form on GET.
exports.vegetable_create_get = asyncHandler(async (req, res, next) => {
  res.render("create_form", {title: "Create Vegetable"})
});

// Handle vegetable create on POST.
exports.vegetable_create_post = [
  
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

        const vegetable = new Veg({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
        })

        if(!errors.isEmpty()){
            res.render("create_form", {
                title: "Create Pastry",
                product: vegetable,
                errors: errors.array()
            })
            return
        } else {
            await vegetable.save()
            res.redirect(vegetable.url)
        }
    })];

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
