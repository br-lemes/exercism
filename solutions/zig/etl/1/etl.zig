const std = @import("std");

pub fn transform(allocator: std.mem.Allocator, legacy: std.AutoHashMap(i5, []const u8)) !std.AutoHashMap(u8, i5) {
    var result = std.AutoHashMap(u8, i5).init(allocator);
    errdefer result.deinit();

    var it = legacy.iterator();
    while (it.next()) |entry| {
        const score = entry.key_ptr.*;
        const letters = entry.value_ptr.*;
        for (letters) |letter| {
            const lower = std.ascii.toLower(letter);
            try result.put(lower, score);
        }
    }

    return result;
}
