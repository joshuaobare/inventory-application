const express = require("express");
const router = express.Router();

// Require controller modules.
const fruit_controller = require("../controllers/fruitController");
const pastries_controller = require("../controllers/pastriesController");
const dryFoods_controller = require("../controllers/dryFoodsController");
const vegetables_controller = require("../controllers/vegController");
const beverage_controller = require("../controllers/beverageController");

/// fruit ROUTES ///

// GET catalog home page.
router.get("/", fruit_controller.index);

// GET request for creating a fruit. NOTE This must come before routes that display fruit (uses id).
router.get("/fruit/create", fruit_controller.fruit_create_get);

// POST request for creating fruit.
router.post("/fruit/create", fruit_controller.fruit_create_post);

// GET request to delete fruit.
router.get("/fruit/:id/delete", fruit_controller.fruit_delete_get);

// POST request to delete fruit.
router.post("/fruit/:id/delete", fruit_controller.fruit_delete_post);

// GET request to update fruit.
router.get("/fruit/:id/update", fruit_controller.fruit_update_get);

// POST request to update fruit.
router.post("/fruit/:id/update", fruit_controller.fruit_update_post);

// GET request for one fruit.
router.get("/fruit/:id", fruit_controller.fruit_detail);

// GET request for list of all fruit items.
router.get("/fruits", fruit_controller.fruit_list);

/// pastries ROUTES ///

// GET request for creating pastries. NOTE This must come before route for id (i.e. display pastries).
router.get("/pastries/create", pastries_controller.pastries_create_get);

// POST request for creating pastries.
router.post("/pastries/create", pastries_controller.pastries_create_post);

// GET request to delete pastries.
router.get("/pastries/:id/delete", pastries_controller.pastries_delete_get);

// POST request to delete pastries.
router.post("/pastries/:id/delete", pastries_controller.pastries_delete_post);

// GET request to update pastries.
router.get("/pastries/:id/update", pastries_controller.pastries_update_get);

// POST request to update pastries.
router.post("/pastries/:id/update", pastries_controller.pastries_update_post);

// GET request for one pastries.
router.get("/pastries/:id", pastries_controller.pastries_detail);

// GET request for list of all pastriess.
router.get("/pastries", pastries_controller.pastries_list);

/// dryFoods ROUTES ///

// GET request for creating dryFoods. NOTE This must come before route that displays dryFoods (uses id).
router.get("/dryFoods/create", dryFoods_controller.dryFoods_create_get);

//POST request for creating dryFoods.
router.post("/dryFoods/create", dryFoods_controller.dryFoods_create_post);

// GET request to delete dryFoods.
router.get("/dryFoods/:id/delete", dryFoods_controller.dryFoods_delete_get);

// POST request to delete dryFoods.
router.post("/dryFoods/:id/delete", dryFoods_controller.dryFoods_delete_post);

// GET request to update dryFoods.
router.get("/dryFoods/:id/update", dryFoods_controller.dryFoods_update_get);

// POST request to update dryFoods.
router.post("/dryFoods/:id/update", dryFoods_controller.dryFoods_update_post);

// GET request for one dryFoods.
router.get("/dryFoods/:id", dryFoods_controller.dryFoods_detail);

// GET request for list of all dryFoods.
router.get("/dryFoods", dryFoods_controller.dryFoods_list);

/// vegetables ROUTES ///

// GET request for creating vegetables. NOTE This must come before route that displays vegetables (uses id).
router.get(
  "/vegetables/create",
  vegetables_controller.vegetables_create_get
);

// POST request for creating vegetables.
router.post(
  "/vegetables/create",
  vegetables_controller.vegetables_create_post
);

// GET request to delete vegetables.
router.get(
  "/vegetables/:id/delete",
  vegetables_controller.vegetables_delete_get
);

// POST request to delete vegetables.
router.post(
  "/vegetables/:id/delete",
  vegetables_controller.vegetables_delete_post
);

// GET request to update vegetables.
router.get(
  "/vegetables/:id/update",
  vegetables_controller.vegetables_update_get
);

// POST request to update vegetables.
router.post(
  "/vegetables/:id/update",
  vegetables_controller.vegetables_update_post
);

// GET request for one vegetables.
router.get("/vegetables/:id", vegetables_controller.vegetables_detail);

// GET request for list of all vegetables.
router.get("/vegetables", vegetables_controller.vegetables_list);

/// BEVERAGES ROUTES ///

// GET request for creating beverages. NOTE This must come before route that displays vegetables (uses id).
router.get(
  "/beverages/create",
  beverage_controller.beverage_create_get
);

// POST request for creating beverages.
router.post(
  "/beverages/create",
  beverage_controller.beverage_create_post
);

// GET request to delete beverages.
router.get(
  "/beverages/:id/delete",
  beverage_controller.beverage_delete_get
);

// POST request to delete beverages.
router.post(
  "/beverages/:id/delete",
  beverage_controller.beverage_delete_post
);

// GET request to update beverages.
router.get(
  "/beverages/:id/update",
  beverage_controller.beverage_update_get
);

// POST request to update beverages.
router.post(
  "/beverages/:id/update",
  beverage_controller.beverage_update_post
);

// GET request for one beverages.
router.get("/beverages/:id", beverage_controller.beverage_detail);

// GET request for list of all beverages.
router.get("/beverages", beverage_controller.beverage_list);

module.exports = router;
