export class BMICategory {
  // Static method that allows casting a json object in class object type BMICategory
  static convertToBMICategoryObject(obj: Object) {
    return new BMICategory(
      obj["minRange"],
      obj["maxRange"],
      obj["category"],
      obj["healthRisk"]
    );
  }

  // Class constructor
  constructor(
    public minRange: number,
    public maxRange: number,
    public category: string,
    public healthRisk: string
  ) {}
}
