import { showProcessedUsers, countWeightStatusUsers } from './src/controllers/user.controller';

showProcessedUsers();

let countOverweight = countWeightStatusUsers("Overweight");
console.log("Overweight People: " + countOverweight);