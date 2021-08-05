"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMICategory = void 0;
class BMICategory {
    // Class constructor
    constructor(minRange, maxRange, category, healthRisk) {
        this.minRange = minRange;
        this.maxRange = maxRange;
        this.category = category;
        this.healthRisk = healthRisk;
    }
    // Static method that allows casting a json object in class object type BMICategory
    static convertToBMICategoryObject(obj) {
        return new BMICategory(obj["minRange"], obj["maxRange"], obj["category"], obj["healthRisk"]);
    }
}
exports.BMICategory = BMICategory;
//# sourceMappingURL=BMICategory.js.map