const std = @import("std");

pub fn truncate(phrase: []const u8) []const u8 {
    var iter = std.unicode.Utf8Iterator{
        .bytes = phrase,
        .i = 0,
    };

    var count: usize = 0;
    var end: usize = 0;

    while (iter.nextCodepoint()) |_| : (count += 1) {
        if (count >= 5) break;
        end = iter.i;
    }

    return phrase[0..end];
}
