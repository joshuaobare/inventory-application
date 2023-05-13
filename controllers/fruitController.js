const Fruit = require("../models/fruit");
const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("Home Page");
});
// Display list of all fruits.
exports.fruit_list = asyncHandler(async (req, res, next) => {
  const allFruits = await Fruit.find({}).sort({ name: 1 }).exec();

  res.render("category", {
    title: "Fruits",
    data_array: allFruits,
    item: "fruits",
  });
});

// Display detail page for a specific fruit.
exports.fruit_detail = asyncHandler(async (req, res, next) => {
  const fruit = await Fruit.findById(req.params.id).exec();

  if (fruit === null) {
    const err = new Error("Fruit not found");
    err.status = 404;
    return next(err);
  }

  res.render("item_detail", {
    product: fruit,
    item: "Fruit",
  });
});

// Display fruit create form on GET.
exports.fruit_create_get = asyncHandler(async (req, res, next) => {
  res.render("create_form", {title: "Create Fruit"})
});

// Handle fruit create on POST.
exports.fruit_create_post = [
  
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

        const fruit = new Fruit({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            quantity: req.body.quantity,
        })

        if(!errors.isEmpty()){
            res.render("create_form", {
                title: "Create Fruit",
                product: fruit,
                errors: errors.array()
            })
            return
        } else {
            await fruit.save()
            res.redirect(fruit.url)
        }
    })];

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
