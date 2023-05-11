#! /usr/bin/env node

console.log(
  "This script populates some inventory elements into your database. "
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Fruit = require("./models/fruit");
const Beverages = require("./models/beverages");
const DryFoods = require("./models/dryFoods");
const Pastries = require("./models/pastries");
const Veg = require("./models/vegetables");

const fruits = [];
const beverages = [];
const dryFoods = [];
const pastries = [];
const vegetables = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createFruit();
  await createBeverage();
  await createDryFood();
  await createPastry();
  await createVegetable();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function fruitCreate(name, description, category, price, quantity) {
  const fruit = new Fruit({ name, description, category, price, quantity });
  await fruit.save();
  fruits.push(fruit);
  console.log(`Added fruit: ${name}`);
}

async function beverageCreate(name, description, category, price, quantity) {
  const beverage = new Beverages({
    name,
    description,
    category,
    price,
    quantity,
  });
  await beverage.save();
  beverages.push(beverage);
  console.log(`Added beverage: ${name}`);
}

async function dryFoodCreate(name, description, category, price, quantity) {
  const dryFood = new DryFoods({
    name,
    description,
    category,
    price,
    quantity,
  });
  await dryFood.save();
  dryFoods.push(dryFood);
  console.log(`Added dry food: ${name}`);
}

async function pastriesCreate(name, description, category, price, quantity) {
  const pastry = new Pastries({ name, description, category, price, quantity });
  await pastry.save();
  pastries.push(pastry);
  console.log(`Added pastry: ${name}`);
}

async function vegetablesCreate(name, description, category, price, quantity) {
  const vegetable = new Veg({ name, description, category, price, quantity });
  await vegetable.save();
  vegetables.push(vegetable);
  console.log(`Added veg: ${name}`);
}

async function createFruit() {
  console.log("Adding fruits");
  await Promise.all([
    fruitCreate(
      "Banana",
      "A banana is an elongated, edible fruit - botanically a berry produced by several kinds of large herbaceous flowering plants in the genus Musa.",
      "Fruit",
      20,
      69
    ),
    fruitCreate(
      "Apple",
      "An apple is an edible fruit produced by an apple tree (Malus domestica)",
      "Fruit",
      10,
      10
    ),
    fruitCreate(
      "Durian",
      "The durian is the edible fruit of several tree species belonging to the genus Durio.",
      "Fruit",
      120,
      5
    ),
  ]);
}

async function createBeverage() {
  console.log("Adding genres");
  await Promise.all([
    beverageCreate(
      "Water",
      "An inorganic compound produced when two hydrogen atoms combine with a single oxygen atom",
      "Beverage",
      50,
      5000
    ),
    beverageCreate(
      "Coffee",
      "A beverage prepared from roasted coffee beans.",
      "Beverage",
      200,
      76
    ),
    beverageCreate(
      "Classic Coke",
      "Heisenberg's Operation",
      "Beverage",
      140,
      120
    ),
    beverageCreate(
      "Off-brand, generic Cola",
      "A carbonated soft drink. 2L",
      "Beverage",
      50,
      369
    ),
  ]);
}

async function createDryFood() {
  console.log("Adding fruits");
  await Promise.all([
    dryFoodCreate(
      "Flour",
      "Flour is a powder made by grinding raw grains, roots, beans, nuts, or seeds.",
      "Dry Food",
      100,
      7000
    ),
    dryFoodCreate(
      "Beans",
      "the seed of several plants in the family Fabaceae, which are used as vegetables for human or animal food",
      "Dry Food",
      100,
      30
    ),
    dryFoodCreate(
      "Canned Rice",
      "Rice is the seed of the grass species Oryza sativa.",
      "Dry Food",
      120,
      50
    ),
  ]);
}

async function createPastry() {
  console.log("Adding genres");
  await Promise.all([
    pastriesCreate(
      "Baguette",
      "A long thin French bread",
      "Pastry",
      300,
      20
    ),
    pastriesCreate(
      "Croissant",
      "A buttery, flaky pastery.",
      "Pastry",
      150,
      10
    ),
    pastriesCreate(
      "White Cake",
      "Cake that's white. Per Slice",
      "Pastry",
      190,
      120
    )
  ]);
}

async function createVegetable() {
    console.log("Adding genres");
    await Promise.all([
        vegetablesCreate(
        "Sukuma Wiki",
        "An East African dish made with collard greens",
        "Vegetable",
        200,
        20
      ),
      vegetablesCreate(
        "Lettuce",
        "A green vegetable paired with various dishes.",
        "Vegetable",
        150,
        10
      ),
      vegetablesCreate(
        "Courgette",
        "Also Zucchini. A summer squash",
        "Vegetable",
        190,
        20
      )
    ]);
  }

