const std = @import("std");

pub const ChessboardError = error{IndexOutOfBounds};

pub fn square(index: usize) ChessboardError!u64 {
    if (index < 1 or index > 64) {
        return ChessboardError.IndexOutOfBounds;
    }
    return std.math.pow(u64, 2, index - 1);
}

pub fn total() u64 {
    var i: usize = 1;
    var sum: u64 = 0;
    while (i <= 64) : (i += 1) {
        sum += std.math.pow(u64, 2, i - 1);
    }
    return sum;
}
