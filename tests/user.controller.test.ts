import { getUsers, countWeightStatusUsers } from '../src/controllers/user.controller';

test('count all Users', () => {
    expect(getUsers()).toHaveLength(6);
});

test('count Overweight Users', () => {
    expect(countWeightStatusUsers("Overweight")).toBe(1);
});