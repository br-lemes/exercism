const std = @import("std");
const mem = std.mem;
const ascii = std.ascii;

pub fn encode(allocator: mem.Allocator, s: []const u8) mem.Allocator.Error![]u8 {
    var result = std.ArrayList(u8).init(allocator);
    errdefer result.deinit();

    var count: usize = 0;
    for (s) |char| {
        if (ascii.isDigit(char)) {
            if (count > 0 and @rem(count, 5) == 0) {
                try result.append(' ');
            }
            try result.append(char);
            count += 1;
        } else if (ascii.isAlphabetic(char)) {
            if (count > 0 and @rem(count, 5) == 0) {
                try result.append(' ');
            }
            const d = ascii.toLower(char);
            try result.append('z' - (d - 'a'));
            count += 1;
        }
    }
    return result.toOwnedSlice();
}

pub fn decode(allocator: mem.Allocator, s: []const u8) mem.Allocator.Error![]u8 {
    var result = std.ArrayList(u8).init(allocator);
    errdefer result.deinit();

    for (s) |char| {
        if (ascii.isDigit(char)) {
            try result.append(char);
        } else if (ascii.isAlphabetic(char)) {
            const d = ascii.toLower(char);
            try result.append('z' - (d - 'a'));
        }
    }

    return result.toOwnedSlice();
}