const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("Testing valid whole number input", () => {
    assert.equal(
      convertHandler.getNum("40kg"),
      40,
      "convertHandler should correctly read a whole number input"
    );
  });

  test("Testing valid decimal number input", () => {
    assert.equal(
      convertHandler.getNum("6.75lbs"),
      6.75,
      "convertHandler should correctly read a decimal number input"
    );
  });

  test("Testing valid fractional input", () => {
    assert.equal(
      convertHandler.getNum("32/4mi"),
      8,
      "convertHandler should correctly read a fractional input"
    );
  });

  test("Testing valid fractional input with a decimal", () => {
    assert.equal(
      convertHandler.getNum("8.8/2gal"),
      4.4,
      "convertHandler should correctly read a fractional input with a decimal"
    );
  });

  test("Testing error on a double-fraction", () => {
    assert.equal(
      convertHandler.getNum("3/2/2gal"),
      "invalid number",
      "convertHandler should correctly return an error on a double-fraction "
    );
  });

  test("Testing default to a numerical input of 1", () => {
    assert.equal(
      convertHandler.getNum("mi"),
      1,
      "convertHandler should correctly default to a numerical input of 1 when no numerical input is provided"
    );
  });

  test("Testing valid input unit", () => {
    assert.equal(
      convertHandler.getUnit("3gal"),
      "gal",
      "convertHandler should correctly read 'gal'"
    );
    assert.equal(
      convertHandler.getUnit("3L"),
      "L",
      "convertHandler should correctly read 'L'"
    );
    assert.equal(
      convertHandler.getUnit("3mi"),
      "mi",
      "convertHandler should correctly read 'mi'"
    );
    assert.equal(
      convertHandler.getUnit("3km"),
      "km",
      "convertHandler should correctly read 'km'"
    );
    assert.equal(
      convertHandler.getUnit("3lbs"),
      "lbs",
      "convertHandler should correctly read 'lbs'"
    );
    assert.equal(
      convertHandler.getUnit("3kg"),
      "kg",
      "convertHandler should correctly read 'kg'"
    );
  });

  test("Testing error for an invalid input unit", () => {
    assert.equal(
      convertHandler.getUnit("3kms"),
      "invalid unit",
      "convertHandler should correctly return an error for an invalid input unit"
    );
  });

  test("Testing correct return unit for each valid input unit", () => {
    assert.equal(
      convertHandler.getReturnUnit("km"),
      "mi",
      "convertHandler should return 'mi' for input equal to 'km'"
    );
    assert.equal(
      convertHandler.getReturnUnit("mi"),
      "km",
      "convertHandler should return 'km' for input equal to 'mi'"
    );
    assert.equal(
      convertHandler.getReturnUnit("gal"),
      "L",
      "convertHandler should return 'L' for input equal to 'gal'"
    );
    assert.equal(
      convertHandler.getReturnUnit("L"),
      "gal",
      "convertHandler should return 'gal' for input equal to 'L'"
    );
    assert.equal(
      convertHandler.getReturnUnit("lbs"),
      "kg",
      "convertHandler should return 'kg' for input equal to 'lbs'"
    );
    assert.equal(
      convertHandler.getReturnUnit("kg"),
      "lbs",
      "convertHandler should return 'lbs' for input equal to 'kg'"
    );
  });

  test("Testing correct return the spelled-out string unit for each valid input unit", () => {
    assert.equal(
      convertHandler.spellOutUnit("GAL"),
      "gallons",
      "convertHandler should correctly return 'gallons' for input equal to 'GAL'"
    );
    assert.equal(
      convertHandler.spellOutUnit("l"),
      "liters",
      "convertHandler should correctly return 'liters' for input equal to 'l'"
    );
    assert.equal(
      convertHandler.spellOutUnit("Mi"),
      "miles",
      "convertHandler should correctly return 'miles' for input equal to 'Mi'"
    );
    assert.equal(
      convertHandler.spellOutUnit("KM"),
      "kilometers",
      "convertHandler should correctly return 'kilometers' for input equal to 'KM'"
    );
    assert.equal(
      convertHandler.spellOutUnit("Lbs"),
      "pounds",
      "convertHandler should correctly return 'pounds' for input equal to 'Lbs'"
    );
    assert.equal(
      convertHandler.spellOutUnit("KG"),
      "kilograms",
      "convertHandler should correctly return 'kilograms' for input equal to 'KG'"
    );
  });

  test("Testing correct conversion 'gal' to 'L'", () => {
    assert.equal(
      convertHandler.convert(10, "gal"),
      "37.85410liters",
      "convertHandler should correctly convert 'gal' to 'L'"
    );
  });
  test("Testing correct conversion 'L' to 'gal'", () => {
    assert.equal(
      convertHandler.convert(10, "L"),
      "2.64172gallons",
      "convertHandler should correctly convert 'L' to 'gal'"
    );
  });
  test("Testing correct conversion 'mi' to 'km'", () => {
    assert.equal(
      convertHandler.convert(10, "mi"),
      "16.09340kilometers",
      "convertHandler should correctly convert 'mi' to 'km'"
    );
  });
  test("Testing correct conversion 'km' to 'mi'", () => {
    assert.equal(
      convertHandler.convert(10, "km"),
      "6.21373miles",
      "convertHandler should correctly convert 'km' to 'mi'"
    );
  });
  test("Testing correct conversion 'lbs' to 'kg'", () => {
    assert.equal(
      convertHandler.convert(10, "lbs"),
      "4.53592kilograms",
      "convertHandler should correctly convert 'lbs' to 'kg'"
    );
  });
  test("Testing correct conversion 'kg' to 'lbs'", () => {
    assert.equal(
      convertHandler.convert(10, "kg"),
      "22.04624pounds",
      "convertHandler should correctly convert 'kg' to 'lbs'"
    );
  });

});
