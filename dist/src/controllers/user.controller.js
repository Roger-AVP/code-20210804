"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWeightStatusUsers = exports.showProcessedUsers = exports.getUsers = void 0;
const users_json_1 = __importDefault(require("../data/users.json"));
const User_1 = require("../models/User");
// fetches users from .json file and castrates each element with type object
function getUsers() {
    var usersObjects = users_json_1.default.map((user) => User_1.User.convertToUserObject(user));
    return usersObjects;
}
exports.getUsers = getUsers;
// Performs all overweight calculations for each user
function processUsers() {
    var users = getUsers();
    var processedUsers = users.map((user, index) => {
        user.calculeBMI();
        user.setBMICategory();
        return user;
    });
    return processedUsers;
}
// Shows users with their respective calculations
function showProcessedUsers() {
    var processedUsers = processUsers();
    processedUsers.map((user, index) => {
        console.log(`${index}. ${user.Gender} - ${user.HeightCm} - ${user.WeightKg} - BMI: ${user.getBMI} - BMICategory: ${user.BMICategory.category} - Health Risk: ${user.BMICategory.healthRisk}`);
    });
}
exports.showProcessedUsers = showProcessedUsers;
// Count the total number of people with weight status
function countWeightStatusUsers(statusWeight) {
    var processedUsers = processUsers();
    let count = processedUsers.filter(function (user) {
        return user.BMICategory.category == statusWeight;
    }).length;
    return count;
}
exports.countWeightStatusUsers = countWeightStatusUsers;
//# sourceMappingURL=user.controller.js.map