const std = @import("std");
const mem = std.mem;

pub fn rotate(allocator: mem.Allocator, text: []const u8, shiftKey: u5) mem.Allocator.Error![]u8 {
    var result = try allocator.alloc(u8, text.len);
    errdefer allocator.free(result);

    for (text, 0..) |char, i| {
        result[i] = if (char >= 'a' and char <= 'z')
            'a' + (@as(u8, char) - 'a' + @as(u8, shiftKey)) % 26
        else if (char >= 'A' and char <= 'Z')
            'A' + (@as(u8, char) - 'A' + @as(u8, shiftKey)) % 26
        else
            char;
    }

    return result;
}
