"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBMICategories = void 0;
const BMICategory_1 = require("../models/BMICategory");
const BMICategories_json_1 = __importDefault(require("../data/BMICategories.json"));
// gets users from .json file and castrates each element with object of type BMICategory
function getBMICategories() {
    var categoriesObjects = BMICategories_json_1.default.map((category) => BMICategory_1.BMICategory.convertToBMICategoryObject(category));
    return categoriesObjects;
}
exports.getBMICategories = getBMICategories;
//# sourceMappingURL=BMICategory.controller.js.map