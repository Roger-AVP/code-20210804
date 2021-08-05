"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../src/controllers/user.controller");
test('count all Users', () => {
    expect(user_controller_1.getUsers()).toHaveLength(6);
});
test('count Overweight Users', () => {
    expect(user_controller_1.countWeightStatusUsers("Overweight")).toBe(1);
});
//# sourceMappingURL=user.controller.test.js.map