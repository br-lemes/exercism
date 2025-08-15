const std = @import("std");
const mem = std.mem;

pub const Triplet = struct {
    a: usize,
    b: usize,
    c: usize,

    pub fn init(a: usize, b: usize, c: usize) Triplet {
        return Triplet{
            .a = a,
            .b = b,
            .c = c,
        };
    }
};

pub fn tripletsWithSum(allocator: mem.Allocator, n: usize) mem.Allocator.Error![]Triplet {
    var triplets = std.ArrayList(Triplet).init(allocator);
    defer triplets.deinit();

    const max_a = (n - 3) / 3;

    for (1..max_a + 1) |a| {
        const max_b = (n - a) / 2;

        for (a + 1..max_b + 1) |b| {
            const c = n - a - b;

            if (c > b) {
                if (a * a + b * b == c * c) {
                    try triplets.append(Triplet.init(a, b, c));
                }
            }
        }
    }

    return triplets.toOwnedSlice();
}
