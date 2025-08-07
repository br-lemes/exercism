const std = @import("std");

pub fn clean(phrase: []const u8) ?[10]u8 {
    var digits: [11]u8 = undefined;
    var len: u8 = 0;

    for (phrase) |c| {
        if (c >= '0' and c <= '9') {
            if (len == digits.len) return null;
            digits[len] = c;
            len += 1;
        }
    }

    var ten_digits: [10]u8 = undefined;

    if (len == 11) {
        if (digits[0] != '1') return null;
        @memcpy(ten_digits[0..], digits[1..]);
    } else if (len == 10) {
        @memcpy(ten_digits[0..], digits[0..10]);
    } else {
        return null;
    }

    const area_code = ten_digits[0];
    const exchange_code = ten_digits[3];

    if (area_code < '2') return null;
    if (exchange_code < '2') return null;

    return ten_digits;
}