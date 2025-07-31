const std = @import("std");

pub fn isArmstrongNumber(num: u128) bool {
    var n = num;
    var sum: u128 = 0;
    var len: u128 = 0;

    while (n > 0) : (n /= 10) {
        len += 1;
    }
    n = num;

    while (n > 0) : (n /= 10) {
        sum += std.math.pow(u128, n % 10, len);
    }
    return sum == num;
}
