const std = @import("std");
const mem = std.mem;
const ascii = std.ascii;

pub fn abbreviate(allocator: mem.Allocator, phrase: []const u8) ![]u8 {
    var acronym = std.ArrayList(u8).init(allocator);
    errdefer acronym.deinit();

    var it = std.mem.splitAny(u8, phrase, " -");
    while (it.next()) |word| {
        if (word.len == 0) continue;
        var first_char: ?u8 = null;
        for (word) |char| {
            if (ascii.isAlphabetic(char)) {
                first_char = char;
                break;
            }
        }
        if (first_char) |char| {
            try acronym.append(ascii.toUpper(char));
        }
    }

    return acronym.toOwnedSlice();
}