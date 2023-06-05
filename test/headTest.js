const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5,6,7]), 5); // PASS
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // PASS
assertEqual(head(), 5); // FAIL
assertEqual(head([]), 0); // FAIL