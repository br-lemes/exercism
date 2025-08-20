export function find(haystack: unknown, needle: unknown): number | never {
    const arr = haystack as number[];
    const n = needle as number;

    if (arr.length === 0) {
        throw new Error('Value not in array');
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === n) {
            return mid;
        }
        if (arr[mid] < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    throw new Error('Value not in array');
}
