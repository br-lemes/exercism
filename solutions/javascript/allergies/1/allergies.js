const allergens = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
};

/** @typedef {keyof typeof allergens} Allergen */

export class Allergies {
    #allergenIndex;

    /** @param {number} allergenIndex */
    constructor(allergenIndex) {
        this.#allergenIndex = allergenIndex;
    }

    /** @returns {Allergen[]} */
    list() {
        /** @type {Allergen[]} */
        const result = [];
        for (const allergen in allergens) {
            if (this.allergicTo(/** @type {Allergen} */ (allergen))) {
                result.push(/** @type {Allergen} */ (allergen));
            }
        }
        return result;
    }

    /** @param {Allergen} allergen */
    allergicTo(allergen) {
        return (this.#allergenIndex & allergens[allergen]) !== 0;
    }
}
