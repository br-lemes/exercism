const std = @import("std");

pub fn total(basket: []const u32) u32 {
    if (basket.len == 0) return 0;

    var counts = [_]u32{0} ** 5;
    for (basket) |book| {
        if (book >= 1 and book <= 5) {
            counts[book - 1] += 1;
        }
    }

    return bestPrice(counts);
}

fn bestPrice(counts: [5]u32) u32 {
    var groups = [_]u32{0} ** 6;

    var remaining = counts;
    while (canFormGroup(remaining, 5)) {
        groups[5] += 1;
        for (remaining, 0..) |_, i| {
            if (remaining[i] > 0) {
                remaining[i] -= 1;
            }
        }
    }

    while (canFormGroup(remaining, 4)) {
        groups[4] += 1;
        var formed: u32 = 0;
        for (remaining, 0..) |_, i| {
            if (remaining[i] > 0 and formed < 4) {
                remaining[i] -= 1;
                formed += 1;
            }
        }
    }

    while (canFormGroup(remaining, 3)) {
        groups[3] += 1;
        var formed: u32 = 0;
        for (remaining, 0..) |_, i| {
            if (remaining[i] > 0 and formed < 3) {
                remaining[i] -= 1;
                formed += 1;
            }
        }
    }

    while (canFormGroup(remaining, 2)) {
        groups[2] += 1;
        var formed: u32 = 0;
        for (remaining, 0..) |_, i| {
            if (remaining[i] > 0 and formed < 2) {
                remaining[i] -= 1;
                formed += 1;
            }
        }
    }

    for (remaining) |count| {
        groups[1] += count;
    }

    while (groups[5] > 0 and groups[3] > 0) {
        groups[5] -= 1;
        groups[3] -= 1;
        groups[4] += 2;
    }

    var totalCost: u32 = 0;
    totalCost += groups[1] * getGroupPrice(1);
    totalCost += groups[2] * getGroupPrice(2);
    totalCost += groups[3] * getGroupPrice(3);
    totalCost += groups[4] * getGroupPrice(4);
    totalCost += groups[5] * getGroupPrice(5);

    return totalCost;
}

fn canFormGroup(counts: [5]u32, groupSize: u32) bool {
    var availableTypes: u32 = 0;
    for (counts) |count| {
        if (count > 0) {
            availableTypes += 1;
        }
    }
    return availableTypes >= groupSize;
}

fn getGroupPrice(groupSize: u32) u32 {
    const basePrice: u32 = 800;

    return switch (groupSize) {
        1 => basePrice,
        2 => (basePrice * 2 * 95) / 100,
        3 => (basePrice * 3 * 90) / 100,
        4 => (basePrice * 4 * 80) / 100,
        5 => (basePrice * 5 * 75) / 100,
        else => 0,
    };
}
