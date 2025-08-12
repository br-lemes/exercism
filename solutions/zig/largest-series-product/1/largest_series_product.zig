const std = @import("std");

pub const SeriesError = error{
    InvalidCharacter,
    NegativeSpan,
    InsufficientDigits,
};

pub fn largestProduct(digits: []const u8, span: i32) SeriesError!u64 {
    if (span < 0) {
        return SeriesError.NegativeSpan;
    }

    if (span == 0) {
        return 1;
    }

    if (span > digits.len) {
        return SeriesError.InsufficientDigits;
    }

    var max_product: u64 = 0;

    for (digits, 0..) |_, i| {
        if (i + @as(usize, @intCast(span)) > digits.len) {
            break;
        }

        var current_product: u64 = 1;
        for (digits[i..i + @as(usize, @intCast(span))]) |digit_char| {
            const digit = std.fmt.charToDigit(digit_char, 10) catch {
                return SeriesError.InvalidCharacter;
            };
            current_product *= digit;
        }

        if (current_product > max_product) {
            max_product = current_product;
        }
    }

    return max_product;
}