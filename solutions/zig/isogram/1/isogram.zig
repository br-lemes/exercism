const std = @import("std");

pub fn isIsogram(str: []const u8) bool {
    var counts = [_]u8{0} ** 26;
    for (str) |c| {
        const char = std.ascii.toUpper(c);
        if (char < 'A' or char > 'Z') {
            continue;
        }
        const i = char - 'A';
        if (counts[i] > 0) {
            return false;
        }
        counts[i] += 1;
    }
    return true;
}
