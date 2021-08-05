"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const BMICategory_controller_1 = require("../controllers/BMICategory.controller");
class User {
    // Class constructor
    constructor(Gender, HeightCm, WeightKg, BMI, BMICategory) {
        this.Gender = Gender;
        this.HeightCm = HeightCm;
        this.WeightKg = WeightKg;
        this.BMI = BMI;
        this.BMICategory = BMICategory;
    }
    // Static method that allows casting a json object into an object of type User
    static convertToUserObject(obj) {
        return new User(obj["Gender"], obj["HeightCm"], obj["WeightKg"]);
    }
    // Calculate the Body Mass Index for each user
    calculeBMI() {
        this.BMI = this.WeightKg / Math.pow(this.convertHeightToMeters(this.HeightCm), 2);
    }
    // Get the BMI fixed to 2 digits decimals
    get getBMI() {
        return this.BMI.toFixed(2);
    }
    // Convert the height from centimeters to meters
    convertHeightToMeters(HeightCm) {
        return HeightCm / 100;
    }
    // Iterate an array of type BMI Category to define the category to which each user belongs.
    setBMICategory() {
        var categories = BMICategory_controller_1.getBMICategories();
        categories.forEach((category, index) => {
            this.defineRange(category);
        });
    }
    // Define the category and range according to the conditions established in each JSON object.
    defineRange(BMIcategory) {
        if (this.BMI >= BMIcategory.minRange && this.BMI <= BMIcategory.maxRange) {
            this.BMICategory = BMIcategory;
        }
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map