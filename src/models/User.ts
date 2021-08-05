import { getBMICategories } from "../controllers/BMICategory.controller";
import { BMICategory } from "./BMICategory";

export class User {
    // Static method that allows casting a json object into an object of type User
    static convertToUserObject(obj: Object) {
        return new User(obj["Gender"], obj["HeightCm"], obj["WeightKg"]);
    }

    // Class constructor
    constructor(
        public Gender: string,
        public HeightCm: number,
        public WeightKg: number,
        public BMI ? : number,
        public BMICategory ? : BMICategory
    ) {}

    // Calculate the Body Mass Index for each user
    calculeBMI() {
        this.BMI = this.WeightKg / Math.pow(this.convertHeightToMeters(this.HeightCm), 2);
    }

    // Get the BMI fixed to 2 digits decimals
    get getBMI() {
        return this.BMI.toFixed(2);
    }

    // Convert the height from centimeters to meters
    convertHeightToMeters(HeightCm: number): number {
        return HeightCm / 100;
    }

    // Iterate an array of type BMI Category to define the category to which each user belongs.
    setBMICategory() {
        var categories = getBMICategories();

        categories.forEach((category, index) => {
            this.defineRange(category);
        });
    }

    // Define the category and range according to the conditions established in each JSON object.
    defineRange(BMIcategory: BMICategory): void {
        if (this.BMI >= BMIcategory.minRange && this.BMI <= BMIcategory.maxRange) {
            this.BMICategory = BMIcategory;
        }
    }
}