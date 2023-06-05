function ConvertHandler() {
  this.getNum = function (input) {
   const regex = /[a-zA-Z]/;
   let index = input.search(regex);
   let stringNumber = input.slice(0, index);
   if (!stringNumber) {
     return 1;
   } else {
     let operands = stringNumber.split("/");
     if (operands.length === 1) {
       if (isNaN(+stringNumber)) {
         return "invalid number";
       } else {
         return +stringNumber;
       }
     } else if (operands.length === 2) {
       if (isNaN(+operands[0]) || isNaN(+operands[1])) {
         return "invalid number";
       } else {
         if (+operands[1] === 0) {
           return "invalid number";
         } else {
           return +operands[0] / +operands[1];
         }
       }
     } else {
       return "invalid number";
     }
   }
  };

  this.getUnit = function (input) {
    let units = ["gal", "l", "mi", "km", "lbs", "kg"];
    const regex = /[a-zA-Z]/;
    let index = input.split("").findIndex((el) => regex.test(el));
    if (index < 0) {
      return "invalid unit";
    } else {
      let inputUnit = input.slice(index).toLowerCase();
      let result = units.includes(inputUnit);
      if (result) {
        if (inputUnit === "l") {
          return "L";
        }
        return inputUnit;
      }
      return "invalid unit";
    }
  };

  this.getReturnUnit = function (initUnit) {
    switch (initUnit) {
      case "gal":
        return "L";
        break;
      case "L":
        return "gal";
        break;
      case "mi":
        return "km";
        break;
      case "km":
        return "mi";
        break;
      case "lbs":
        return "kg";
        break;
      case "kg":
        return "lbs";
        break;
      default:
        return "invalid unit";
    }
  };

  this.spellOutUnit = function (unit) {
    switch (unit.toLowerCase()) {
      case "gal":
        return "gallons";
        break;
      case "l":
        return "liters";
        break;
      case "mi":
        return "miles";
        break;
      case "km":
        return "kilometers";
        break;
      case "lbs":
        return "pounds";
        break;
      case "kg":
        return "kilograms";
        break;
      default:
        return "invalid unit";
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch (initUnit) {
      case "gal":
        return `${(initNum * galToL).toFixed(5)}liters`;
        break;
      case "L":
        return `${(initNum / galToL).toFixed(5)}gallons`;
        break;
      case "mi":
        return `${(initNum * miToKm).toFixed(5)}kilometers`;
        break;
      case "km":
        return `${(initNum / miToKm).toFixed(5)}miles`;
        break;
      case "lbs":
        return `${(initNum * lbsToKg).toFixed(5)}kilograms`;
        break;
      case "kg":
        return `${(initNum / lbsToKg).toFixed(5)}pounds`;
        break;
      default:
        return "invalid input";
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
   return `${initNum} ${this.spellOutUnit(
     initUnit
   )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
