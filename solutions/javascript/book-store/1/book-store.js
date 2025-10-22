/** @param {number[]} books */
export const cost = (books) => {
    if (books.length === 0) {
        return 0;
    }

    const counts = Array(5).fill(0);
    for (const book of books) {
        if (book >= 1 && book <= 5) {
            counts[book - 1] += 1;
        }
    }

    return bestPrice(counts);
};

/** @param {number[]} counts */
const bestPrice = (counts) => {
    const groups = Array(5 + 1).fill(0);
    const remaining = [...counts];

    for (let groupSize = 5; groupSize >= 2; groupSize--) {
        while (canFormGroup(remaining, groupSize)) {
            groups[groupSize]++;
            let toRemove = groupSize;
            for (let i = 0; i < 5 && toRemove > 0; i++) {
                if (remaining[i] > 0) {
                    remaining[i]--;
                    toRemove--;
                }
            }
        }
    }

    groups[1] = remaining.reduce((a, b) => a + b, 0);

    const swapCount = Math.min(groups[5], groups[3]);
    groups[5] -= swapCount;
    groups[3] -= swapCount;
    groups[4] += 2 * swapCount;

    let totalCost = 0;
    for (let size = 5; size >= 1; size--) {
        totalCost += groups[size] * getGroupPrice(size);
    }

    return totalCost;
};

/**
 *  @param {number[]} counts
 *  @param {number} groupSize
 */
const canFormGroup = (counts, groupSize) => {
    let unique = 0;
    for (let i = 0; i < 5; i++) {
        if (counts[i] > 0) {
            unique++;
            if (unique >= groupSize) {
                return true;
            }
        }
    }
    return false;
};

/** @param {number} groupSize */
const getGroupPrice = (groupSize) => {
    const basePrice = 800;

    switch (groupSize) {
        case 1:
            return basePrice;
        case 2:
            return basePrice * 2 * 0.95;
        case 3:
            return basePrice * 3 * 0.9;
        case 4:
            return basePrice * 4 * 0.8;
        case 5:
            return basePrice * 5 * 0.75;
        default:
            return 0;
    }
};
