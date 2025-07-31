const std = @import("std");
const mem = std.mem;

pub fn sum(allocator: mem.Allocator, factors: []const u32, limit: u32) !u64 {
    var multiples = std.ArrayList(u32).init(allocator);
    defer multiples.deinit();

    var seen = std.AutoHashMap(u32, void).init(allocator);
    defer seen.deinit();

    for (factors) |factor| {
        if (factor == 0) {
            continue;
        }
        var i: u32 = 1;
        while (i * factor < limit) : (i += 1) {
            const multiple = i * factor;
            if (!seen.contains(multiple)) {
                try seen.put(multiple, {});
                try multiples.append(multiple);
            }
        }
    }

    var total: u64 = 0;
    for (multiples.items) |m| {
        total += m;
    }

    return total;
}