"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./src/controllers/user.controller");
user_controller_1.showProcessedUsers();
let countOverweight = user_controller_1.countWeightStatusUsers("Overweight");
console.log("Overweight People: " + countOverweight);
//# sourceMappingURL=app.js.map