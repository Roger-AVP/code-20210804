import users from "../data/users.json";
import { User } from "../models/User";

// fetches users from .json file and castrates each element with type object
export function getUsers(): User[] {
    var usersObjects: User[] = users.map((user) =>
        User.convertToUserObject(user)
    );
    return usersObjects;
}

// Performs all overweight calculations for each user
function processUsers(): User[] {
    var users = getUsers();
    var processedUsers = users.map((user, index) => {
        user.calculeBMI();
        user.setBMICategory();
        return user;
    });
    return processedUsers;
}

// Shows users with their respective calculations
export function showProcessedUsers(): void {
    var processedUsers = processUsers();

    processedUsers.map((user, index) => {
        console.log(
            `${index}. ${user.Gender} - ${user.HeightCm} - ${user.WeightKg} - BMI: ${user.getBMI} - BMICategory: ${user.BMICategory.category} - Health Risk: ${user.BMICategory.healthRisk}`
        );
    });

}

// Count the total number of people with weight status
export function countWeightStatusUsers(statusWeight: string): number {
    var processedUsers = processUsers();

    let count: number = processedUsers.filter(function(user) {
        return user.BMICategory.category == statusWeight;
    }).length;

    return count;
}