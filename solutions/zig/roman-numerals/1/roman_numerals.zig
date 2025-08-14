const std = @import("std");
const mem = std.mem;

pub fn toRoman(allocator: mem.Allocator, arabicNumeral: i16) mem.Allocator.Error![]u8 {
    const values = [_]i16{ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
    const symbols = [_][]const u8{ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };

    var result = std.ArrayList(u8).init(allocator);
    defer result.deinit();

    var num = arabicNumeral;

    for (values, symbols) |value, symbol| {
        while (num >= value) {
            try result.appendSlice(symbol);
            num -= value;
        }
    }

    return result.toOwnedSlice();
}
