const std = @import("std");
const mem = std.mem;

pub const Item = struct {
    weight: usize,
    value: usize,

    pub fn init(weight: usize, value: usize) Item {
        return Item{
            .weight = weight,
            .value = value,
        };
    }
};

pub fn maximumValue(allocator: mem.Allocator, maximumWeight: usize, items: []const Item) !usize {
    if (items.len == 0 or maximumWeight == 0) {
        return 0;
    }

    const rows = items.len + 1;
    const cols = maximumWeight + 1;

    const dp = try allocator.alloc([]usize, rows);
    defer allocator.free(dp);

    for (dp) |*row| {
        row.* = try allocator.alloc(usize, cols);
    }
    defer {
        for (dp) |row| {
            allocator.free(row);
        }
    }

    for (0..rows) |i| {
        dp[i][0] = 0;
    }
    for (0..cols) |w| {
        dp[0][w] = 0;
    }

    for (1..rows) |i| {
        const item = items[i - 1];

        for (1..cols) |w| {
            if (item.weight > w) {
                dp[i][w] = dp[i - 1][w];
            } else {
                const exclude = dp[i - 1][w];
                const include = item.value + dp[i - 1][w - item.weight];
                dp[i][w] = @max(exclude, include);
            }
        }
    }

    return dp[rows - 1][cols - 1];
}
