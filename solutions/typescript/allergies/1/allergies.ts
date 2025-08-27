const allergens = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats',
] as const;

type Allergen = typeof allergens[number];

export class Allergies {
    private allergenIndex: number;

    constructor(allergenIndex: number) {
        this.allergenIndex = allergenIndex;
    }

    public list(): Allergen[] {
        const result: Allergen[] = [];
        for (let i = 0; i < allergens.length; i++) {
            if ((this.allergenIndex & (1 << i)) !== 0) {
                result.push(allergens[i]);
            }
        }
        return result;
    }

    public allergicTo(allergen: Allergen): boolean {
        return (this.allergenIndex & (1 << allergens.indexOf(allergen))) !== 0;
    }
}
