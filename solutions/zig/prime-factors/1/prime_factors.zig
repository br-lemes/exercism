const std = @import("std");
const mem = std.mem;

pub fn factors(allocator: mem.Allocator, value: u64) mem.Allocator.Error![]u64 {
    var result = std.ArrayList(u64).init(allocator);
    var n = value;

    while (n % 2 == 0) {
        try result.append(2);
        n /= 2;
    }

    var d: u64 = 3;
    while (d * d <= n) {
        while (n % d == 0) {
            try result.append(d);
            n /= d;
        }
        d += 2;
    }

    if (n > 1) {
        try result.append(n);
    }

    return result.toOwnedSlice();
}
