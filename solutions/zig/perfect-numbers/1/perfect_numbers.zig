const std = @import("std");

pub const Classification = enum {
    deficient,
    perfect,
    abundant,
};

/// Asserts that `n` is nonzero.
pub fn classify(n: u64) Classification {
    std.debug.assert(n > 0);

    if (n == 1) {
        return .deficient;
    }

    var sum: u64 = 1;
    var i: u64 = 2;
    while (i * i <= n) : (i += 1) {
        if (n % i == 0) {
            sum += i;
            if (i * i != n) {
                sum += n / i;
            }
        }
    }

    if (sum < n) {
        return .deficient;
    } else if (sum > n) {
        return .abundant;
    } else {
        return .perfect;
    }
}