import { BMICategory } from "../models/BMICategory";
import categories from "../data/BMICategories.json";

// gets users from .json file and castrates each element with object of type BMICategory
export function getBMICategories(): BMICategory[] {
    var categoriesObjects: BMICategory[] = categories.map((category) =>
        BMICategory.convertToBMICategoryObject(category)
    );
    return categoriesObjects;
}