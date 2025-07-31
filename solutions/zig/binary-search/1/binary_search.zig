pub fn binarySearch(comptime T: type, target: T, items: []const T) ?usize {
    var low: usize = 0;
    var high: usize = items.len;

    while (low < high) {
        const mid = low + (high - low) / 2;
        if (items[mid] == target) {
            return mid;
        } else if (items[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return null;
}