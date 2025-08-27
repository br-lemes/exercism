const allergens = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
 } as const;

type Allergen = keyof typeof allergens;

export class Allergies {
    private allergenIndex: number;

    constructor(allergenIndex: number) {
        this.allergenIndex = allergenIndex;
    }

    public list(): Allergen[] {
        const result: Allergen[] = [];
        for (const allergen in allergens) {
            if (this.allergicTo(allergen as Allergen)) {
                result.push(allergen as Allergen);
            }
        }
        return result;
    }

    public allergicTo(allergen: Allergen): boolean {
        return (this.allergenIndex & allergens[allergen]) !== 0;
    }
}
