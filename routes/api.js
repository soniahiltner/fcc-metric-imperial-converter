"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();


  app.get("/api/convert", (req, res) => {
    const { input } = req.query;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const output = convertHandler.convert(initNum, initUnit)
    const returnNum = convertHandler.getNum(output)
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    if (!input) {
      res.send("invalid unit");
    } else {
      if (initNum === "invalid number" && initUnit === "invalid unit") {
        res.send("invalid number and unit");
      } else if (initNum === "invalid number" && initUnit !== "invalid unit") {
        res.send("invalid number");
      } else if (initNum !== "invalid number" && initUnit === "invalid unit") {
        res.send("invalid unit");
      } else {
        res.json({
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: string
        })
      }
    }
  });
};
