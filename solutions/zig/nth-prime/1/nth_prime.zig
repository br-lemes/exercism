const std = @import("std");
const mem = std.mem;

pub fn prime(allocator: mem.Allocator, number: usize) !usize {
    _ = allocator;

    if (number == 0) return error.InvalidInput;

    var count: usize = 0;
    var candidate: usize = 2;

    while (true) {
        if (isPrime(candidate)) {
            count += 1;
            if (count == number) return candidate;
        }
        if (candidate == 2) {
            candidate = 3;
        } else {
            candidate += 2;
        }
    }

    return error.NoPrimeFound;
}

fn isPrime(n: usize) bool {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;

    var i: usize = 3;
    while (i * i <= n) : (i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}
