const std = @import("std");
const mem = std.mem;

pub const Signal = enum {
    wink,
    double_blink,
    close_your_eyes,
    jump,
};

pub fn calculateHandshake(allocator: mem.Allocator, number: u5) mem.Allocator.Error![]const Signal {
    var signals = std.ArrayList(Signal).init(allocator);

    if (number & 1 != 0) {
        try signals.append(.wink);
    }
    if (number & 2 != 0) {
        try signals.append(.double_blink);
    }
    if (number & 4 != 0) {
        try signals.append(.close_your_eyes);
    }
    if (number & 8 != 0) {
        try signals.append(.jump);
    }

    if (number & 16 != 0 and signals.items.len > 0) {
        var i: usize = 0;
        var j: usize = signals.items.len - 1;
        while (i < j) : ({
            i += 1;
            j -= 1;
        }) {
            const temp = signals.items[i];
            signals.items[i] = signals.items[j];
            signals.items[j] = temp;
        }
    }

    return signals.toOwnedSlice();
}
